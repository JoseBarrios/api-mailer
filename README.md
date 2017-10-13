[![NPM version][npm-image]][npm-url]
[![Downloads][download-badge]][npm-url]

### Install
```sh
npm install api-mailer
```

### Setup

**AWS SES**: Setup your config file with your AWS credentials, but first set up the SES service in your AWS account.

### Basic usage
```js
var config = require('../config/example.json') 
var Mailer = require('api-mailer');                                                                           
var mailer = new Mailer(config);                                                                               
                                                                                                               
let recipient = {};                                                                                            
recipient.givenName = "RecipientFirst"                                                                         
recipient.familyName = "RecipientLast"                                                                         
recipient.email = "test@recipient.com"                                                                          
                                                                                                               
                                                                                                               
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

[npm-url]: https://www.npmjs.com/package/api-mailer
[npm-image]: https://img.shields.io/npm/v/mturk-api.svg?style=flat-square
[download-badge]: http://img.shields.io/npm/dm/mturk-api.svg?style=flat-square
