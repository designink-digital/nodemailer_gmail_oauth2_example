import * as googleAuth from './config/google_auth';
import * as nodemailerConfig from './config/nodemailer_config';

/* Step 1 */

// googleAuth.getAuthorizeUrl((err, url) => {
// 	if(err) return console.log(err);
// 	console.log("Auth url is: ", url);
// });

/* Step 2 */

// googleAuth.getAccessToken((err, token) => {
// 	if(err) return console.log(err);
// 	console.log("Auth token is: ", token);
// });

/* Step 3 */

// const message = {
// 	to: 'me@example.com',
// 	subject: 'Test Message',
// 	text: 'Congrats! You sent this email from your Node.js application, using your Gmail account with OAuth2!',
// 	html: '<h2>Congrats!</h2>'
// 		+ '<p>You sent this email from your Node.js application, using your Gmail account with OAuth2!</p>'
// };
// nodemailerConfig.gmailTransport.sendMail(message, function(err, info) {
// 	if(err) return console.log(err);
// 	console.log("Sent mail! Result: ", info);
// });