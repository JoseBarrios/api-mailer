[![NPM version][npm-image]][npm-url]
[![Downloads][download-badge]][npm-url]

### Description
Mailer normalizes different service providers APIs (AWS SES, SendGrid, etc) into a single, consistent API interface. This provides modularity and portability. For example, if you change service providers (from SES to SendGrid), the API calls would remain the same. The only thing that would change would be the config file.

### Install
```sh
$ npm install api-mailer
```


### Setup

*AWS*: Setup your config file with your AWS SES credentials. [See example](https://github.com/JoseBarrios/api-mailer/blob/master/config/aws-example.json).

*SendGrid*: Setup your config file with your SendGrid API Key. [See example](https://github.com/JoseBarrios/api-mailer/blob/master/config/sendgrid-example.json).
### Basic usage
```js
var sgConfig = require('sendgrid-secret.json') 
var awsConfig = require('aws-secret.json') 

var Mailer = require('api-mailer');  
//It will detect the service provider on config file and use it
var mailer = new Mailer(sgConfig);

let recipient = {};
recipient.givenName = "RecipientFirst";    
recipient.familyName = "RecipientLast";     
recipient.email = "test@recipient.com";

let sender = {};
sender.givenName ="SenderFirst";
sender.familyName = "SenderLastName";
sender.email = "hello@sender.com";

let email = {};
email.recipient = recipient;
email.sender = sender;
email.subject = "Subject line";
email.textContent = "This is the text content"
email.htmlContent = "<p> This is the HTML content </p>"

mailer.sendEmail(email)     
    .then(response => {/* success */})
    .catch(error => {/* error */})


```
### Operations
Operation  |    Params
-----------|----------------
sendEmail    | {email}

### Tests
```sh
$ npm test
```


[npm-url]: https://www.npmjs.com/package/api-mailer
[npm-image]: https://img.shields.io/npm/v/api-mailer.svg?style=flat-square
[download-badge]: http://img.shields.io/npm/dm/api-mailer.svg?style=flat-square
