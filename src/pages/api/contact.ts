//Refactor to Go
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { email, subject, message } = req.body;
  try {
    const client_ID = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;
    const Redirect_URI = process.env.REDIRECT_URI;
    const Refresh_token = process.env.REFRESH_TOKEN;

    const oAuth2Client = new google.auth.OAuth2(
      client_ID,
      client_secret,
      Redirect_URI
    );
    oAuth2Client.setCredentials({
      refresh_token: Refresh_token
    });

    const accessToken = oAuth2Client.getAccessToken();

    const auth = {
      type: 'OAuth2',
      user: process.env.MAIL,
      clientId: client_ID,
      clientSecret: client_secret,
      refreshToken: Refresh_token,
      accessToken: accessToken
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: auth
    });

    const emailRes = await transporter.sendMail({
      from: req.body.email,
      to: process.env.MAIL,
      subject: req.body.subject,
      html: `<h1>Response from Portfolio!</h1><br><p>Email:${req.body.email}</p><br><p>${req.body.message}</p>`
    });
    // eslint-disable-next-line no-console
    console.log('Message Sent', emailRes.messageId);
  } catch (err) {
    // console.log(err);
  }
  res.status(200).json(req.body);
};
