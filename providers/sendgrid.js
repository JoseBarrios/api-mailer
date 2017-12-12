'use strict'

const SendGrid = require('@sendgrid/mail');

const SendGridMailer = class SendGridMailer {

  constructor(config){
		const provider = config.provider.toLowerCase();
		if(provider === "sendgrid"){
			this.api = SendGrid;
			this.api.setApiKey(config.key);
		}
		//Wrong config
		else {
			console.log('error: invalid config file for provider sendgrid', config);
		}
  }

  sendEmail(message){
		return new Promise((resolve, reject) => {
			const msg = {
				to: message.recipient.email,
				from: message.sender.email,
				subject: message.about,
				text: message.description,
				html: message.text,
			};

			this.api.send(msg);
			resolve(msg);
		})
  }

};

module.exports = SendGridMailer;
