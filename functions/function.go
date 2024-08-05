package function

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
)

type RequestBody struct {
	Email string `json:"email"`
}

type HubspotProperty struct {
	Property string `json:"property"`
	Value    string `json:"value"`
}

type HubspotBody struct {
	Properties []HubspotProperty `json:"properties"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodOptions {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Max-Age", "3600")
		w.WriteHeader(http.StatusNoContent)
		return
	}
	// Set CORS headers for the main request.
	w.Header().Set("Access-Control-Allow-Origin", "*")

	if r.Method != http.MethodPost {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	var reqBody RequestBody
	if err := json.NewDecoder(r.Body).Decode(&reqBody); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	email := reqBody.Email
	hubspotAPIKey := os.Getenv("HUBSPOT_API_KEY")
	hubspotAPIUrl := "https://api.hubapi.com/communication-preferences/v3/subscribe"

	hubspotBody := HubspotBody{
		Properties: []HubspotProperty{
			{Property: "emailAddress", Value: email},
			{Property: "legalBasis", Value: "LEGITIMATE_INTEREST_CLIENT"},
			{Property: "subscriptionId", Value: "366686542"},
			{Property: "legalBasisExplanation", Value: "Subscribed Via Josh Portfolio Form"},
		},
	}

	hubspotBodyJSON, err := json.Marshal(hubspotBody)
	if err != nil {
		http.Error(w, "Error creating request body", http.StatusInternalServerError)
		return
	}

	req, err := http.NewRequest("POST", hubspotAPIUrl, bytes.NewReader(hubspotBodyJSON))
	if err != nil {
		http.Error(w, "Error creating request", http.StatusInternalServerError)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", hubspotAPIKey))

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		http.Error(w, "Error sending request", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, "Error Decoding Hubspot Body", http.StatusInternalServerError)
	}

	if resp.StatusCode >= 200 && resp.StatusCode < 300 {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Subscription successful!"))
	} else {
		http.Error(w, fmt.Sprintf("Subscription Failed: %s", string(b)), resp.StatusCode)
	}
}

func init() {
	functions.HTTP("Handler", handler)
}
