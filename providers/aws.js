'use strict'

const AWSMailer = class AWSMailer {

  constructor(config){
		//const nodemailer = require('nodemailer')
		const provider = config.provider.toLowerCase();
		if(config.provider = 'aws'){
			const AWS = require('aws-sdk');
			this.api = new AWS.SES(config);
		}
		else {
			console.error('Invalid configuration file for aws provider', config)
		}
  }


  sendEmail(message){
		return new Promise((resolve, reject) => {
			let sesEmail = this._convert(message);
			this.api.sendEmail(sesEmail, function(err, data) {
				if(err) reject(err);
				else resolve(data);
			})
		})
  }

	_convert(msg){
		return {
			/* required */
			Destination: {
				ToAddresses: [ `${msg.recipient.email}` ]
			},
			/* required */
			Message: {
				/* required */
				Body: {
					Html: {
						/* required */
						Data: `${msg.messageAttachment}`,
						Charset: 'UTF-8'
					},
					Text: {
						/* required */
						Data: `${msg.text}`,
						Charset: 'UTF-8'
					}
				},
				/* required */
				Subject: {
					/* required */
					Data: `${msg.about}`,
					Charset: 'UTF-8'
				}
			},
			/* required */
			Source: `${msg.sender.email}`
		};
	}

};

module.exports = AWSMailer;
