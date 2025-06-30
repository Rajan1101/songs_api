# Songs API

This API serves trending songs data at `/api/trending`.

## Data Source
The API fetches its data from [jsonbin.io](https://jsonbin.io/app/dashboard).

- All trending data is retrieved live from the jsonbin.io bin.
- You can manage or update the data directly from your jsonbin.io dashboard.

## Usage
- Start the server: `node api/trending.js`
- Access the endpoint: [http://localhost:3000/api/trending](http://localhost:3000/api/trending)

## Note
- The API key is required for private bins. Update the key in the code if you change your bin or permissions.
