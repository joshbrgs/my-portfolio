import { APIRoute } from "astro";
import fetch from "node-fetch";

export const post: APIRoute = async ({ request }) => {
  const { email } = await request.json();

  const hubspotAPIUrl =
    `https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/${email}`;
  const hubspotAPIKey = import.meta.env.HUBSPOT_API_KEY;

  const body = {
    properties: [
      {
        property: "email",
        value: email,
      },
    ],
  };

  try {
    const response = await fetch(hubspotAPIUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${hubspotAPIKey}`,
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return new Response("Subscription successful!", { status: 200 });
    } else {
      return new Response("Subscription failed", { status: 500 });
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response("Error occurred", { status: 500 });
  }
};

