# Example Using Gmail OAuth2 with Nodemailer

This project holds source files in both TypeScript and Javascript demonstrating how to get a Google OAuth2 token and use it with Nodemailer.

## Installing

Naviage to the project directory in your terminal and run

```npm i```

to install node_modules.

## Running the Code

### Building/Running TypeScript

Use the commands provided in ```package.json``` to build the TypeScript files then run the output.

```
	npm run build
	npm run start:ts
```

There is no :ts extension on ```build``` because you do not build the Javascript source files; only TypeScript files need to be built.

### Running the Javascript

To run the Javascript source files you can use the run command

```npm run start:js```

## Procedure

### Prerequisite

Make sure you have authorized your application with your Google account and replaced the faux credentials with your own in the ```config/google_auth``` file.

```
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
```

### Step 1

Inside each index file of the ```src``` folder, there are 3 commented-out steps that you will uncomment, run, then recomment before proceeding to the next step.

You will uncomment the first chunk of code in the index file you're working in:

```
/* Step 1 */

googleAuth.getAuthorizeUrl((err, url) => {
	if(err) return console.log(err);
	console.log("Auth url is: ", url);
});
```

If you are working in the TypeScript index file, save, build, and run it, or if you are working in the Javascript index file, just save and run.
This should display your authorization Url in the console.

Comment the first step out again.

### Step 2

Uncomment step two the same way you did the first:

```
/* Step 2 */

googleAuth.getAccessToken((err, token) => {
	if(err) return console.log(err);
	console.log("Auth token is: ", token);
});
```

Save, build run, and you should see your access and refresh tokens.

Comment out the second step again.

### Step 3

Paste your token in place of the faux token at the bottom of the ```config/google_auth``` file:

```
export const tokens: Credentials = {
	access_token: 'xxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxx',
	token_type: 'Bearer',
	refresh_token: 'x/xxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	expiry_date: 1528250763439
};
```

Go ahead and enter your the email of the account you authorized with google (it will log in with this email and your tokens) and optionally a common name:

```
const EMAIL_USERNAME: string = 'me@example.com';
const COMMON_NAME: string = 'John Doe';
```

### Step 4

Back in your index file, uncomment out the last step and send a test email by saving, building, and running the code. With all of the luck, it will be delivered to the address that you specified in the ```to``` property.