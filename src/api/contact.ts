import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export default async function (req, res) {
  const { email, subject, message } = req.body;
  const client_ID = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const Redirect_URI = process.env.REDIRECT_URI;
  const Refresh_token = process.env.REFRESH_TOKEN;

  const oAuth2Client = new google.auth.OAuth2(
    client_ID,
    client_secret,
    Redirect_URI
  );
  oAuth2Client.setCredentials({ refresh_token: Refresh_token });

  const accessToken = oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL,
      clientId: client_ID,
      clientSecret: client_secret,
      refreshToken: Refresh_token,
      accessToken: accessToken
    }
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: process.env.MAIL,
      subject: subject,
      html: `<h1>Response from Portfolio!</h1><br><p>${message}</p>`
    });
    console.log('Message Sent', emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}
