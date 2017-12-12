'use strict'

const AWSMailer = require('./providers/aws.js');
const SendGridMailer = require('./providers/sendgrid.js');

var Mailer = class Mailer {

  constructor(config){

		const provider = config.provider.toLowerCase();

		switch(provider){

			case "sendgrid":
				this.api = new SendGridMailer(config);
				break;

			case "aws":
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
