import nodemailer from 'nodemailer';
import { google } from 'googleapis';

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
  port: 25,
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL,
    clientId: client_ID,
    clientSecret: client_secret,
    refreshToken: Refresh_token,
    accessToken: accessToken
  }
});

export default async (req, res) => {
  const { email, subject, content, recipient } = req.body;

  if (email === '' || subject === '' || content === '' || recipient === '') {
    res.status(403).send('');
    return;
  }

  const mailerRes = await mailer({ email, subject, text: content, recipient });
  res.send(mailerRes);
};

const mailer = ({ email, subject, text, recipient }) => {
  const from =
    subject && email ? `${subject} <${email}>` : `${subject || email}`;
  const message = {
    from,
    to: `${recipient}`,
    subject: `${subject}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};
