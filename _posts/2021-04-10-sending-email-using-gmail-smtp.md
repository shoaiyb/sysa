---
layout: post
title: "Sending Emails Using Gmail SMTP"
description: "It is possible to add any ImprovMX alias as a sending email on Gmail, Free and reliable. It only takes a minute to setup."
author: shoaiyb
image: assets/images/gmail-smtp.webp
imageshadow: true
categories: [ Beginner, Guide ]
toc: true
---




It is possible to add any ImprovMX alias as a sending email on Gmail, Free and reliable.
It only takes a minute to setup.       
Sending emails using Gmail SMTP        

## What is SMTP

![smtp](/assets/images/smtp.webp)       


## What is ImproveMX

![improvmx](/assets/images/improvmx.webp)        


**Note**: This feature is a relict of an old function Google use to provide.       
At some point, they could disable this functionality.       

## Make sure you have 2FA enabled
For this method to work, you need to have two factor authentification enabled for your Google account.        
If it’s not, follow <a href="https://www.google.com/landing/2step/" target="_blank" rel="nofollow noreferrer">this link and set it up.

## Create an App Password

![app password](/assets/images/app-password-google.gif)      

Google will verify your ownership with this app password.       
Select “Mail” under app, and “Mac” under device.        
Hit “Generate”, Copy and keep for later!       

## Add your email to Gmail
Go to `Gmail -> Settings -> Accounts` and Import.       
Then, select “Add another email address you own” under Aliases.       

## Fill in your sender’s information

![sender info](/assets/images/smtp-sender-info-gmail.gif)       

Set your forwarded email (your alias) and your sender’s name.        
Untick “treat as an alias”.       

## Fill in your email informations

![email info](/assets/images/smtp-gmail.gif)       

SMTP is smtp.gmail.com, port is right already.         
Username is your gmail address (incl. @gmail.com)       
Password is the password you generated on Step 2.        
Leave TLS enabled as is.        

## Confirm ownership
You will receive an email from GMail asking you to confirm ownership with a code.        
Fill in the code in the popup modal, and you are all set!       

## Send emails from your alias
Now you can just select your alias in the list when you compose a new message.        

