'use strict'

//var pug = require('pug');
let aws = require('aws-sdk');
var nodemailer = require('nodemailer')

var Mailer = class Mailer {

  constructor(configFile){
    if(!configFile){ console.error('Mailer could not find a configuration file')}
    this.transporter = nodemailer.createTransport({SES: new aws.SES(configFile)})
  }

  sendEmail(email, sender, recipient){
    return new Promise((resolve, reject) => {
      //var html = pug.renderFile(`${__dirname}/views/${email}.pug`);
      //var cssPath = `${__dirname}/views/stylesheets/${email}.css`
      //var inlined = juice.inlineContent(html,css);
      var data = {};
      data.from = `${sender.givenName} ${sender.familyName} <${sender.email}>`;
      data.to = `${recipient.givenName} ${recipient.familyName} <${recipient.email}>`
      data.subject = `${email.subject}`
      data.text = `${email.textContent}`;
      data.html = `${email.htmlContent}`;
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
