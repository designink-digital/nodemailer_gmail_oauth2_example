/**
 * Module holding your default Nodemailer configuration settings and utilities.
 */

var nodemailer = require('nodemailer');
var googleAuth = require('./google_auth');

/**
 * Your email address to send email from
 * @type { string }
 */
var EMAIL_USERNAME = 'me@example.com';
/**
 * The name to display
 * @type { string }
 */
var COMMON_NAME = 'John Doe';
/**
 * The settings object containing your Nodemailer configuration with Gmail OAuth2
 */
var nodemailerSettings = {
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	service: 'Gmail',
	from: '"' + COMMON_NAME + '" <' + EMAIL_USERNAME + '>', // You actually dont have to do this because Gmail overwrites it with the authenticated user anyway, but it's semantic

	auth: {
		type: 'OAuth2',
		user: EMAIL_USERNAME,
		clientId: googleAuth.credentials.web.client_id,
		clientSecret: googleAuth.credentials.web.client_secret,
		refreshToken: googleAuth.tokens.refresh_token,
		accessToken: googleAuth.tokens.access_token,
		expires: googleAuth.tokens.expiry_date
	}
};

/**
 * Creates a Nodemailer transport for use from the options specified
 * 
 * @param { Object } nodemailerSettings - The settings provided for authentication and configuration
 */
module.exports.gmailTransport = nodemailer.createTransport(nodemailerSettings);