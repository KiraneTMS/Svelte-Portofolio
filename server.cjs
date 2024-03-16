const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000; // Adjust port if needed

// Configure your email credentials (replace with your actual values)
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',  // Replace with your SMTP server host
  port: 587,                 // Replace with your SMTP server port
  secure: false,             // Adjust based on your SMTP server configuration
  auth: {
    user: 'arsyaalifian4@gmail.com',  // Replace with your email address
    pass: 'arsyaalifian2018'     // Replace with your email password
  }
});

app.post('/api/send-email', async (req, res) => {
  try {
    const imageData = req.body; // Assuming the request body contains the barcode image data
    const mailOptions = {
      from: 'arsyaalifian4@gmail.com',  // Replace with your email address
      to: 'kirenaiasakura@gmail.com', // Replace with recipient email address
      subject: 'Barcode Notification',
      attachments: [
        {
          filename: 'barcode.png', // Adjust filename as needed
          content: imageData, // Replace with actual image data handling
          contentType: 'image/png'  // Adjust content type based on the image format
        }
      ]
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    res.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
