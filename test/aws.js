const appInfo = require('../../config-oplab/application.json')
const config = require('../../config-oplab/aws.json')
const Mailer = require('../index.js');
const mailer = new Mailer(config);

//const recipient = {};
//recipient.email = "success@simulator.amazonses.com" // 200
//recipient.email = "bounce@simulator.amazonses.com"// 400
//recipient.email = "ooto@simulator.amazonses.com"// Out of office
//recipient.email = "complaint@simulator.amazonses.com"// Mark as Spam
//recipient.email = "suppressionlist@simulator.amazonses.com"

const email = {};
email.sender = config.sender;
email.recipient = appInfo.administrator;
email.about = "Mailer AWS Test";
email.text = "<p style='color:green'> This is the Mailer (AWS) HTML content </p>"

describe("Mailer AWS", function() {
	it("#sendEmail", function(done) {
		mailer.sendEmail(email)
			.then(res  => { done(); })
			.catch(err => { done(err); })
	}).timeout(10000)
})
