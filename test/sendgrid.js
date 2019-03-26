const appInfo = require('../../config-oplab/application.json')
var config = require('../../config-oplab/sendgrid.json')
const EmailMessage = require('dc-email-message');
var mailer = require('../index.js');
var mailer = new mailer(config);

const emailMessage = new EmailMessage();
emailMessage.sender = config.sender;
emailMessage.recipient = appInfo.administrator;
emailMessage.about = "Mailer Sendgrid Test";
emailMessage.text = "<p style='color:green'> This is the Mailer (Sendgrid) HTML content </p>"

describe("mailer sendgrid", function() {
  it("#sendemail", function(done) {
    mailer.sendEmail(emailMessage)
      .then(res  => { done(); })
      .catch(err => { done(err); })
  })
})
