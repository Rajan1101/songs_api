const https = require("https");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/trending", (req, res) => {
  const options = {
    hostname: "api.jsonbin.io",
    path: "/v3/b/6862210b8561e97a502ea64c",
    method: "GET",
    headers: {
      "X-Access-Key":
        "$2a$10$IYf4kIvpZ4kUTpODUF93ie72m597/kNPBIym/L3JuKiDPnwCUqzeK",
    },
  };

  const request = https.request(options, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      try {
        const json = JSON.parse(data);
        res.status(200).json(json);
      } catch (e) {
        res.status(500).json({ error: "Failed to parse JSON" });
      }
    });
  });

  request.on("error", (error) => {
    res.status(500).json({ error: "Failed to fetch data" });
  });

  request.end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
