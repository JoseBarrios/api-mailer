var config = require('../config/ses.json')
var Mailer = require('../index.js');
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
