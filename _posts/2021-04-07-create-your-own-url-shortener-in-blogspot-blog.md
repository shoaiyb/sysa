---
layout: post
title: "Create Your Own Url Shortener In BlogSpot Blog"
description: "Today in this article I will show you how to make your own URL shortener using only JavaScript in Blogger (blogspot)."
author: shoaiyb
image: assets/images/bloggerjs.webp
imageshadow: true
categories: [ Blogspot, JavaScript ]
toc: true
---




## What is Custom URL Shortener?
A custom URL shortener will allow you to create your own branded domain to redirect to different external pages as per your needs.        
Today in this article, I will show you how to make your own URL shortener using only JavaScript in Blogger (blogspot).       

## How Custom URL Shortener Works?
We will be using a script to create our own URL shortening service.        
This script can also be termed as “Simple Redirects”.        
Just like WordPress.org, you create links that will redirect you to external pages or domains.         
Unlike Blogger Custom Redirects, which does not allows you to redirect to other domains, they only redirects to internal pages of your blog.     

**Example**:       
Default URL: https://sysa.ml/new-page/         
Custom Branded Short URL: https://sysa.ml/go/np or https://sysa.blogspot.com/go/np       

Take a look at the above example links to understand how this script will work.        
If you will go to https://sysa.ml/go/np it will take you to the new page of {{site.name}}.        
Similarly you can create unlimited short URLs and Redirects using this script.        

## How to Make Your Own URL Shortener with JavaScript?
Go to `Blogger >> Template >> Edit HTML`.       
Now in the template codes, search for `</head>` tag and just above it paste the following JavaScript code:         

```js
<script language=’javascript’>

// @package SYSA.JS
// @author shoaiyb sysa
// @license SYSA License

//<![CDATA[
var key = window.location.href.split(“go/”)[1].replace(“/”,””)
var urls={
‘fb’:’https://www.facebook.com/realshoaiyb’,
‘ig’:’https://www.instagram.com/sysa_shoaiyb’,
‘twitter’:”https://twitter.com/shoaiybsysa”,
}
if(key){
if(urls[key]){
window.location.href=urls[key]
}else{
document.write(“‘”+key+”‘ not found :(“);
}
}
//]]>
</script>
```

**Customization**:        
Now to create short URLs you can simple make changes to the above code.        
For example, in the above code search for this:       

```js
‘fb’:’https://www.facebook.com/realshoaiyb’,
```

In the above code `fb` is the keyword and https://www.facebook.com/realshoaiyb is the targeted website or webpage.       
If we translated the above code it means that when you’ll visit https://sysa.ml/go/fb it will take you to https://www.facebook.com/realshoaiyb.       

You can add more short URLs as well, for example if you want to create a short link for you Github profile then the above code will look like this:      

```js
<script language=’javascript’>

// @package SYSA.JS
// @author shoaiyb sysa
// @license SYSA License

//<![CDATA[
var key = window.location.href.split(“go/”)[1].replace(“/”,””)
var urls={
‘fb’:’https://www.facebook.com/realshoaiyb’,
‘ig’:’https://www.instagram.com/sysa_shoaiyb’,
‘twitter’:”https://twitter.com/shoaiybsysa”,
‘gh’:”https://github.com/shoaiyb”,
}
if(key){
if(urls[key]){
window.location.href=urls[key]
}else{
document.write(“‘”+key+”‘ not found :(“);
}
}
//]]>
</script>
```

After customizing the script as per your needs, press the “Save Template” button on the top of your screen.       
