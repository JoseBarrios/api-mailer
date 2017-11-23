'use strict'

var Mailer = class Mailer {

  constructor(config){

		const provider = config.provider.toLowerCase();
		switch(provider){
			case "sendgrid":
				const SendGridMailer = require('./providers/sendgrid.js');
				this.api = new SendGridMailer(config);
				break;
			case "aws":
				const AWSMailer = require('./providers/aws.js');
				this.api = new AWSMailer(config);
				break;
			default:
				console.log('error: service not supported', service);
		}
  }

  sendEmail(email){
		return new Promise((resolve, reject) => {
			this.api.sendEmail(email)
				.then(resolve)
				.catch(reject)
		})
  }
};

module.exports = Mailer;
