var config = require('../config/aws-secret.json')
var Mailer = require('../index.js');
var mailer = new Mailer(config);

let recipient = {};
recipient.givenName = "RecipientFirst"
recipient.familyName = "RecipientLast"
recipient.email = "test@barrios.io"

let sender = {};
sender.givenName ="SenderFirst";
sender.familyName = "SenderLastName";
sender.email = "jose@bevisible.soy";

let email = {};
email.sender = sender;
email.recipient = recipient;
email.about = "Subject line";
email.text = "This is the Mailer (AWS) text content"
email.messageAttachment = "<p style='color:green'> This is the Mailer (AWS) HTML content </p>"


describe("Mailer AWS", function() {
	it("#sendEmail", function(done) {
		mailer.sendEmail(email)
			.then(res  => { done(); })
			.catch(err => { done(err); })
	})
})
