export default async (req, res) => {
    const {email} = req.body;

    console.log({email});

    if (!email) {
        return res.status(400).json({error: 'Email is required'});
    }

    try {
        const AUDIENCE_ID = process.env.AUDIENCE_ID;
        const API_KEY = process.env.API_KEY;
        const DATACENTER = process.env.DATACENTER;
        const data = {
            email_address: email,
            status: "subscribed"
        };

        const response = await fetch (`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
            body: JSON.stringify(data),
            headers: {
                Authorization: `apikey ${API_KEY}`,
                "Content-Type": "application/json"
            },
            method: "POST"
        });

        if (response.status >= 400) {
            return res.status(400).json({error: `There was an error subscribing to the newsletter. Try again later.`});
        }

        return res.status(201).json({error: ""});
    } catch (error) {
        return res.status(500).json({error: error.message || error.toString()});
    }
}