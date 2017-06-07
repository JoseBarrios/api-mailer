[![NPM version][npm-image]][npm-url]
[![Downloads][download-badge]][npm-url]

### Install
```sh
npm install @josebarrios/mailer
```
### Basic usage
```js
var config = require('../config/file.json') 
var Mailer = require('@josebarrios/mailer');                                                                           
var mailer = new Mailer(config);                                                                               
                                                                                                               
let recipient = {};                                                                                            
recipient.givenName = "RecipientFirst"                                                                         
recipient.familyName = "RecipientLast"                                                                         
recipient.email = "test@cognilab.com"                                                                          
                                                                                                               
                                                                                                               
let sender = {};                                                                                               
sender.givenName ="SenderFirst";                                                                               
sender.familyName = "SenderLastName";                                                                          
sender.email = "hello@cognilab.com";                                                                           
                                                                                                               
                                                                                                               
let email = {};                                                                                                
email.subject = "Subject line";                                                                                
email.textContent = "This is the text content"                                                                 
email.htmlContent = "<p> This is the HTML content </p>"                         
                                                                                                               
mailer.sendEmail(email, sender, recipient)     


```
### Operations
Operation  |    Params
-----------|----------------
sendEmail    | {email, sender, recipient}

## License
All Rights Reserved © [Barrios I/O](http://barrios.io)

[npm-url]: https://www.npmjs.com/package/@josebarrios/mailer
[npm-image]: https://img.shields.io/npm/v/mturk-api.svg?style=flat-square
[download-badge]: http://img.shields.io/npm/dm/mturk-api.svg?style=flat-square
