import fetch from "node-fetch";

const API_KEY = process.env.API_KEY;
const SERVER_ID = process.env.SERVER_ID;
const PANEL_URL = process.env.PANEL_URL;

async function renew() {
    const res = await fetch(`${PANEL_URL}/api/client/servers/${SERVER_ID}/renew`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Accept": "application/json"
        }
    });

    const data = await res.json();
    console.log("Response:", data);

    if (!res.ok) {
        console.error("Renew failed:", data);
        process.exit(1);
    }

    console.log("Renew completed successfully!");
}

renew();
