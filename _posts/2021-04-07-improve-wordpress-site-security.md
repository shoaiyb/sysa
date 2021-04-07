---
layout: post
title: "Improve WordPress Site Security"
description: ""
author: shoaiyb
image: assets/images/improve-wordpress-security.webp
imageshadow: true
categories: [ WordPress ]
toc: true
---




WordPress is the most [popular Content Management System (CMS)](/best-blogging-platform/) and powers more than 30% websites.       
However as it grows, hackers have taken note and are beginning to specifically target WordPress sites.        
No matter what types of content your site provides, you are not an exception.        
If you don’t take certain precautions you could get hacked.        
Like everything technology related, you need to check your website security.       
In this tutorial, I will share my [Best Tips](/category/#WordPress) to keep your WordPress website secure.        

## Choose a Good Hosting Company
The simplest way to keep your site secure is to go with a hosting provider who provides multiple layers of security.       
It may seem tempting to go with a cheap hosting provider, after all saving money on your website hosting means you can spend it elsewhere within your organization.        
However, don’t be tempted by this route. It can, and often does cause nightmares down the road.       
Your data could be completely erased and your url could begin redirecting somewhere else.       
Paying a little bit more for a quality hosting company means additional layers of security are automatically attributed to your website.        
An additional benefit, by using a [good WordPress hosting](/best-wordpress-hosting/), you can significantly [speed up your WordPress site](/improve-wordpress-speed/).       
While there are many hosting companies out there I recommend [Bluehost](/go/bluehost/).        
They provide many security features, including daily malware scans and access to support 24/7, 365 days a year.        
To put icing on the cake their price is also reasonable.      

![img1](https://miro.medium.com/max/1050/0*CTudkdUR8JgHFEv7.jpg)         

## Don’t Use Nulled Themes
[WordPress premium themes](/wordpress-premium-themes/) look more professional and have more customizable options than a free theme.       
But one could argue you get what you pay for.        
Premium themes are coded by highly skilled developers and are tested to pass multiple WordPress checks right out of the box.        
There are no restrictions on customizing your theme, and you will get full support if something does go wrong on your site.        
Most of all you will get regular theme updates.        
But, there are a few sites that provide nulled or cracked themes.         
A nulled or cracked theme is a hacked version of a premium theme, available via illegal means.        
They are also very dangerous for your site.        
Those themes contain hidden malicious codes, which could destroy your website and database or log your admin credentials.        
While it may be tempting to save a few bucks, always avoid nulled themes.       

## Install a WordPress Security Plugin
It’s a time-consuming work to regularly check your website security for malware and unless you regularly update your knowledge of coding practices you may not even realize you’re looking at a piece of malware written into the code.       
Luckily other’s have realized that not everyone is a developer and have put out WordPress security plugins to help.        
A security plugin takes care your site security, scans for malware and monitors your site 24/7 to regularly check what is happening on your site.       
Sucuri.net is a great WordPress security plugin.       
They offer security activity auditing, file integrity monitoring, remote malware scanning, blacklist monitoring, effective security hardening, post-hack security actions, security notifications, and even website firewall (for a premium).      

## Use a Strong Password
Passwords are a very important part of website security and unfortunately often overlooked.       
If you are using a plain password i.e. ‘123456, abc123, password’, you need to immediately change your password.        
While this password may be easy to remember it is also extremely easy to guess.        
An advanced user can easily crack your password and get in without much hassle.        
It’s important you use a complex password, or better yet, one that is auto-generated with a variety of numbers, nonsensical letter combinations and special characters like % or ^.       

## Disable File Editing
When you are setting up your WordPress site there is a code editor function in your dashboard which allows you to edit your theme and plugin.        
It can be accessed by going to `Appearance>Editor`.        
Another way you can find the plugin editor is by going under `Plugins>Editor`.       
Once your site is live we recommend that you disable this feature.         
If any hackers gain access to your WordPress admin panel, they can inject subtle, malicious code to your theme and plugin.        
Often times the code will be so subtle you may not notice anything is amiss until it is too late.        
To disable the ability to edit plugins and the theme file, simply paste the following code in your 'wp-config.php' file.       

```php
define(‘DISALLOW_FILE_EDIT’, true);
```

![img2](https://miro.medium.com/max/705/0*YTCPTDzsE_ag6LvV.png)         

## Install SSL Certificate
Nowadays Single Sockets Layer (SSL), is beneficial for all kinds of websites.       
Initially SSL was needed in order to make a site secure for specific transactions, like to process payments.       
Today, however, Google has recognized it’s importance and provides sites with an SSL certificate a more weighted place within its search results.       
SSL is mandatory for any sites that process sensitive information, i.e. passwords, or credit card details.        
Without an SSL certificate all of the data between the user’s web browser and your web server are delivered in plain text.        
This can be readable by hackers.        
By using an SSL, the sensitive information is encrypted before it is transferred between their browser and your server, making it more difficult to read and making your site more secure.       
For websites that accept sensitive information an average SSL price is around $70-$199 per year.         
If you don’t accept any sensitive information you don’t need to pay for SSL certificate.         
Almost every hosting company offers a free Let’s Encrypt SSL certificate which you can install on your site.        

## Change your wp-login URL
By default, to login to WordPress the address is “yoursite.com/wp-admin/”.       
By leaving it as default you may be targeted for a brute force attack to crack your username/password combination.         
If you accept users to register for subscription accounts you may also get a lot of spam registrations.        
To prevent this, you can change the admin login URL or add a security question to the registration and login page.        

**Pro Tip**:        
You can further protect your login page by adding a 2-factor authentication plugin to your WordPress.        
When you try to login, you will need to provide an additional authentication in order to gain access your site — for example, it can be your password and an email (or text).         
This is an enhanced security feature to prevent hackers from accessing your site.        

**Pro Tip 2**:        
You can also check which IPs have the most failed login attempts, then you can block those IP addresses.       

## Limit Login Attempts
By default, WordPress allows users to try to login as many time as they want.        
While this may help if you frequently forget what letters are capital, it also opens you to brute force attacks.       
By limiting the number login attempts, users can try a limited number of times until they are temporarily blocked.          
The limits your chance of a brute force attempt as the hacker gets locked out before they can finish their attack.        
You can enable this easily with a WordPress login limit attempts plugin.        
After you’ve installed the plugin you can change the number of login attempts via `Settings> Login Limit Attempts`.        
If you wish to enable login attempts without a plugin you can also do so.        
The full tutorial is here.       

![img3](https://miro.medium.com/max/681/0*a5d6LyH_cOB2UiMg.png)        

## Hide wp-config.php and .htaccess files
While this is an advanced process for improving your site’s security, if you’re serious about your security it’s a good practice to hide your site’s .htaccess and wp-config.php files to prevent hackers from accessing them.       
I strongly recommend this option to be implemented by experienced developers, as it’s imperative to first take a backup of your site and then proceed with caution.        
Any mistake might make your site inaccessible.        
To hide the files, after your backup, there are two things you need to do:        
First, go to your wp-config.php file and add the following code,

```php
<Files wp-config.php>
order allow,deny
deny from all
</Files>
```

In a similar method, you will add the following code to your .htaccess file,

```.htacess
<Files .htaccess>
order allow,deny
deny from all
</Files>
```

Although the process itself is very easy it’s important to ensure you have the backup before beginning in case anything goes wrong in the process.        

## Update your WordPress version
Keeping your WordPress up to date is a good practice to keeping your website secure.        
With every update, developers make a few changes, often times including updates to security features.        
By staying updated with the latest version you are helping protect yourself against being a target for pre-identified loopholes and exploits hackers can use to gain access to your site.       
It is also important to update your plugins and themes for the same reasons.        
By default, WordPress automatically downloads minor updates.        
For major updates, however, you will need to update it directly from your WordPress admin dashboard.       

![img4](https://miro.medium.com/max/1050/0*Ni1yHYGACngqOS1S.png)       


### Conclusion
WordPress security is one of the crucial parts of a website.        
If you don’t maintain your WordPress security, hackers can easily attack your site.         
Maintaining your website security isn’t hard and can be done without spending a penny.        
Some of these solutions are for advanced users but if you have any questions {{site.name}} is right around the digital corner.        
[Message me](/contact/) or [tweet me](https://twitter.com/shoaiybsysa/).        
