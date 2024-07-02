// Hubspot's base API url
import { useState } from "preact/hooks";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  let base_url = "https://api.hsforms.com/submissions/v3/integration/submit";

  // Our portalId
  let portal_id = "";

  // Our formId
  let form_id = "";

  // Construct the request url
  let request_url = base_url + "/" + portal_id + "/" + form_id;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    let body = {
      submittedAt: new Date().getTime(),
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: formData.get("email"),
        },
      ],
    };

    const response = await fetch(request_url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <>
      <h4>Let's get in Touch!</h4>
      <form onSubmit={submit}>
        <label>
          Email:
          <input
            placeholder="Email"
            type="email"
            name="Email"
            id="email"
            required
          />
        </label>
        <button type="button">Submit</button>
        {responseMessage && (
          <div class="toast">
            <div class="alert alert-info">
              <span>{responseMessage}</span>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
