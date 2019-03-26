'use strict'

const striptags = require('striptags');
const AWS = require('aws-sdk');

const AWSMailer = class AWSMailer {

  constructor(config){
		const provider = config.provider.toLowerCase();
		if(config.provider = 'aws'){
			let awsConfig = new AWS.Config();
			awsConfig.update({accessKeyId: config.accessKeyId});
			awsConfig.update({secretAccessKey: config.secretAccessKey});
			this.api = new AWS.SES(config);
		}
		else {
			console.error('Invalid configuration file for aws provider', config)
		}
  }


  sendEmail(message){
		return new Promise((resolve, reject) => {
			let email = this._transpose(message);
			this.api.sendEmail(email, function(err, data) {
				if(err) reject(err);
				else resolve(data);
			})
		})
  }

	_transpose(msg){
		let sender = msg.sender;
		let recipient = msg.recipient;
		return {
			Source: `${sender.givenName} ${sender.familyName} <${sender.email}>`,
			Destination: {
				ToAddresses: [ `${recipient.email}` ]
			},
			Message: {
				Subject: {
					Data: `${msg.about}`,
					Charset: 'UTF-8'
				},
				Body: {
					Html: {
						Data: `${msg.text}`,
						Charset: 'UTF-8'
					},
					Text: {
						Data: `${striptags(msg.text)}`,
						Charset: 'UTF-8'
					}
				}
			}
		};
	}
};

module.exports = AWSMailer;
