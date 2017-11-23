'use strict'


const SendGridMailer = class SendGridMailer {

  constructor(config){
		const provider = config.provider.toLowerCase();
		if(provider === "sendgrid"){
			this.api = require('@sendgrid/mail');
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
				text: message.text,
				html: message.messageAttachment,
			};

			this.api.send(msg);
			resolve(msg);
		})
  }

};

module.exports = SendGridMailer;
