import * as googleAuth from 'google-auth-library';
import { Credentials } from 'google-auth-library/build/src/auth/credentials';

const scope: string = "https://mail.google.com/";

/**
 * Step 0: Create OAuth2 credentials at the Google Console (make sure to download JSON, not only just get key and secret)
 */

export const credentials = {
	"web": {
		"client_id": "############-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com",
		"project_id": "my-project",
		"auth_uri": "https://accounts.google.com/o/oauth2/auth",
		"token_uri": "https://accounts.google.com/o/oauth2/token",
		"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
		"client_secret": "xxxxxx-xxxxxxxx-xxxxxxx",
		"redirect_uris": ["http://localhost"],
		"javascript_origins": ["http://localhost"]
	}
};

/**
 * Step 1: Authorize in the browser
 */

export function getAuthorizeUrl(callback: (err: any, url: string) => any): void {
	const oauth2Client = new googleAuth.OAuth2Client(credentials.web.client_id, credentials.web.client_secret, credentials.web.redirect_uris[0]);

	const authUrl = oauth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: scope
	});

	callback(null, authUrl);
}

/**
 * Step 2: Get auth token
 */


/**
 * Paste in your one-time use authorization code here
 */
const code: string = "4/AAAt_6Q8QhcsPxIbhr_k4KH102H4J1DNOzzS1QCe-hSIEyatB7HJOIoMK50nnyv2BD9VyMaFeXrQZJxf_wI7YXA";

export function getAccessToken(callback: (err: any, token?: Credentials | null) => any): void {
	const oauth2Client = new googleAuth.OAuth2Client(credentials.web.client_id, credentials.web.client_secret, credentials.web.redirect_uris[0]);

	oauth2Client.getToken(code, (err, token) => {
		if(err) return console.log(err);

		callback(null, token);
	});
}

/**
 * Step 3: Save access and refresh tokens as an export for Nodemailer
*/

/**
 * Paste your credentials here as this object.
 */

export const tokens: Credentials = {
	access_token: 'xxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxx',
	token_type: 'Bearer',
	refresh_token: 'x/xxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	expiry_date: 1528250763439
};