var config = require('../config/aws-secret.json')
var Mailer = require('../index.js');
var mailer = new Mailer(config);

let sender = {};
sender.givenName ="SenderFirst";
sender.familyName = "SenderLastName";
sender.email = "jose@bevisible.soy";

let recipient = {};
recipient.givenName = "RecipientFirst"
recipient.familyName = "RecipientLast"
recipient.email = "success@simulator.amazonses.com" // 200
//recipient.email = "bounce@simulator.amazonses.com"// 400
//recipient.email = "ooto@simulator.amazonses.com"// Out of office
//recipient.email = "complaint@simulator.amazonses.com"// Mark as Spam
//recipient.email = "suppressionlist@simulator.amazonses.com"

let email = {};
email.sender = sender;
email.recipient = recipient;
email.about = "Mailer AWS Test";
email.text = "<p style='color:green'> This is the Mailer (AWS) HTML content </p>"
email.description = "This is the Mailer (AWS) text content"


describe("Mailer AWS", function() {
	it("#sendEmail", function(done) {
		mailer.sendEmail(email)
			.then(res  => { done(); })
			.catch(err => { done(err); })
	}).timeout(10000)
})
