---
layout: post
title: "Best Ngrok Alternatives"
description: ""
author: shoaiyb
image: assets/images/ngrok.svg
imageshadow: true
categories: [ Ngrok, Alternatives, Beginner, Guide ]
toc: true
---



## Ngrok

## LocalTunnel

![LocalTunnel](/assets/images/localtunnel.webp)       

Localtunnel is a free tunneling solution, to host your local web applications over the cloud and access the app from the publicly accessible web url.      
Localtunnel allows you to easily share a web service on your local development machine without messing with DNS and firewall settings.   

**Features**:     
- Secure https for all tunnels
- Show your work to anyone
- Use the API to test webhooks
- Test your UI in cloud browsers

**Pricing**:     
- Free

### Installation & Usage

Installation is simple as it’s a node package that could be installed globally or locally.

```npm
npm install -g localtunnel
```

Once the installation is complete, you can simply create a tunnel as shown below, for any port that will forward the request to the locally hosted and running application.

```npm
lt --port 3000
```

The above command will issue a web url as below and forward all the requests to that url to your locally hosted application.

your url is: `https://animate-rwise.localtunnel.me`
The above url can be simply accessed to view the locally hosted app on port 3000 (i.e. the port for which the tunnel was actually created).

Specifying a subdomain for your tunnel is also possible, through the subdomain flag.      
This will allow you to have a custom sub-domain which will be easy to remember.

```npm
lt --port 3000 --subdomain mynodejsapp
```

You will get the url for your subdomain as shown below (subject to the availability).
```url
https://mynodejsapp.localtunnel.me
```


## TunnelTo

![TunnelTo](/assets/images/tunnelto.webp)        

Expose your local web server to the internet with a public URL.    

**Features**:     
- Webhook Integrations
- Mobile Development


**Pricing**:    
- $2/month

### Installation & Usage

```brew
$ brew install agrinman/tap/tunnelto
```
Or      
```cargo
$ cargo install tunnelto
```

## LocalHost.run

![LocalHost.run](/assets/images/localhost.run.webp)       

**Features**:      
- No download or signup.
- Bring your own domain name.
- Secure.
- Instantly share urls.
- Advanced use cases.
- Forever free tier.


## Burrow.io

![Burrow.io](/assets/images/burrow.io.webp)       

The Simple, Stable Localhost Tunnel to expose localhost to the internet using a public URL.      

**Features**:      
- No downloads. Just paste a command to open a localhost tunnel.
- Uses ssh port forwarding under the hood - you know it works.
- Test your APIs on mobile devices using secure tunnels to localhost.
- Receive webhooks on localhost via http tunnel - SSL supported.
- Send any TCP traffic to your localhost.
- Expose your local dev server to the internet.
- HTTP(S) tunnels with password protection (HTTP auth).
- Custom domains for HTTP(S) tunnels with up to 5 URL's per tunnel.
- Secure TCP tunnels with firewall rules via Security Groups.
- Manage multiple Security Groups to allow/deny access to IPs or Networks.


**Pricing**:      
- Free for 5/mins
- $3.99/month on the Yearly plan,     
- $4.99/month on the Monthly plan.      


## PageKite

![PageKite](/assets/images/pagekite.webp)       

Pagekite is another tool that is similar to Ngrok and supports HTTP / HTTPS / TCP and SSH tunnels.

The advantage of using pagekite over Ngrok is its stable domain names which are fixed during the account setup itself. But, this also has a disadvantage, one can not start multiple tunnels simultaneously unlike Ngrok.

**Features**:     
- The ability to use CNAMEs from your own domain.


**Pricing**:      
- Free for 31 days & 2.5GB
- Pay What You Want

### Installation & Usage

It’s typically simple to use.    
A simple curl to get python-based executable is a one time process.

**Let’s see the steps below**;      

1. Get the python-based executable using curl.     

```curl
curl -O https://pagekite.net/pk/pagekite.py
```

2. Setup the pagekite account while starting the tunnel.     

```python
python pagekite.py 3000 {domain-name 
}.pagekite.me
```

3. While the above command gets executed, it will prompt to register the given domain name against an email id that the user needs to provide. Once an available domain name is found and registration is successful, the domain name is setup.     

Once the domain name setup is successful, the same domain name can be used for setting up the tunnel.

**For Example**: If the  domain name setup is foodomain, then you can start a tunnel to the localhost port 3000 using the command below:

```python
python pagekite.py 3000 foodomain.pagekite.me
```


## Conclusion
In this tutorial, we looked at the most popular Ngrok alternatives and explored a few other tools like Localtunnel, Serveo, Pagekite, and Teleconsole that can perform the same or similar functionality.

We also compared all the tools against various parameters. You can select the best tool for your requirements based on this comparison and review.    
In general, Ngrok is more widely used compared to other tools.
