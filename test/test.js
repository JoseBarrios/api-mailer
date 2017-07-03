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
email.sender = sender;
email.recipient = recipient;
email.about = "Subject line";
email.text = "This is the text content"
email.HTML = "<p> This is the HTML content </p>"

mailer.sendEmail(email).then(console.log).catch(console.error)

recipient.givenName = null;
recipient.familyName = null;
mailer.sendEmail(email).then(console.log).catch(console.error)
