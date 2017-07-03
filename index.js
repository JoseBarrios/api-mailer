'use strict'

//var pug = require('pug');
let aws = require('aws-sdk');
var nodemailer = require('nodemailer')

var Mailer = class Mailer {

  constructor(configFile){
    if(!configFile){ console.error('Mailer could not find a configuration file')}
    this.transporter = nodemailer.createTransport({SES: new aws.SES(configFile)})
  }

  sendEmail(email){
    return new Promise((resolve, reject) => {
      var data = {};
      data.from = `${email.sender.givenName} ${email.sender.familyName} <${email.sender.email}>`;
      data.to = `${email.recipient.givenName} ${email.recipient.familyName} <${email.recipient.email}>`
      data.subject = `${email.about}`
      data.text = `${email.text}`;
      data.html = `${email.HTML}`;
      this.transporter.sendMail(data, (err, info) =>{
        if(err){ reject(err) }
        else { resolve(info); }
      })
    })
  }

  success(response){
    console.log('SUCESS', response);
  }

  error(errorMsg){
    console.log('ERROR', errorMsg);
  }

};

module.exports = Mailer;
