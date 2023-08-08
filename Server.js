// server.js
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000; // Choose any available port number

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submissions
app.post('/submit-form', (req, res) => {
  const form = req.body;
  // Save the form data to your Excel sheet using axios or any other method.
  // Replace the following URL with your actual API endpoint for saving the data.
  const excelSheetUrl = 'https://sheet.best/api/sheets/75528b19-189a-4325-82b5-02b2d20c00a8';

  axios
    .post(excelSheetUrl, form)
    .then((response) => {
      console.log('Form data saved successfully:', response.data);
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      console.error('Error saving form data:', error);
      res.status(500).json({ success: false, error: 'Failed to save form data.' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
