package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
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

func Handler(w http.ResponseWriter, r *http.Request) {
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
	hubspotAPIUrl := fmt.Sprintf("https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/%s", email)

	hubspotBody := HubspotBody{
		Properties: []HubspotProperty{
			{Property: "email", Value: email},
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

	if resp.StatusCode >= 200 && resp.StatusCode < 300 {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Subscription successful!"))
	} else {
		http.Error(w, "Subscription failed", resp.StatusCode)
	}
}

func main() {
	http.HandleFunc("/subscribe", Handler)
	http.ListenAndServe(":8080", nil)
}
