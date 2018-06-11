import * as nodemailer from 'nodemailer';
import * as googleAuth from './google_auth';

const EMAIL_USERNAME: string = 'me@example.com';
const COMMON_NAME: string = 'John Doe';

const nodemailerSettings = {
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	service: 'Gmail',
	from: `"${COMMON_NAME}" <${EMAIL_USERNAME}>`, // You actually dont have to do this because Gmail overwrites it with the authenticated user anyway, but it's semantic
	
	auth: {
		type: 'OAuth2',
		user: EMAIL_USERNAME,
		clientId: googleAuth.credentials.web.client_id,
		clientSecret: googleAuth.credentials.web.client_secret,
		refreshToken: googleAuth.tokens.refresh_token,
		accessToken: googleAuth.tokens.access_token,
		expires: googleAuth.tokens.expiry_date
	}
} as nodemailer.TransportOptions;

export const gmailTransport = nodemailer.createTransport(nodemailerSettings);