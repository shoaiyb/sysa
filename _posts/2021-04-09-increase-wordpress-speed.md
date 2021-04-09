---
layout: post
title: "Increase WordPress Speed"
description: "Speed is an aspect of a website’s performance that Google truly values. So much so that it ranks websites with faster site speeds over slower ones."
author: shoaiyb
image: assets/images/wordpress-seo.webp
imageshadow: true
categories: [ WordPress, Beginner ]
toc: true
---




Speed is an aspect of a website’s performance that Google truly values. So much so that it ranks websites with faster site speeds over slower ones.       

Site speed isn’t just important for search engines but visitors also. According to Google, 70% of users on websites that load within 5 seconds stay on for longer sessions. At the same time, 53% of mobile users tend to abandon a website if it takes longer than 3 seconds to load. Which means you need to make sure that both your desktop and mobile sites have a fast load time. By fast, we mean 3 seconds or under.


While 3 seconds or under may seem impossible, there are many different aspects of a WordPress website you can tweak to improve its speed which you can read more on here.       
This will help you rank better and also improve the bounce or abandon rate of your website.      

## Use a theme optimized for speed
It all starts with the theme of your website.       
Picking a theme can be hard, depending on what you go with, there are various elements on the website from sliders, icons, and widgets among others.       
While these elements may be appealing, are they all truly necessary?       
The more elements the theme has the heavier it will be, which means slower load time.       

You want to make sure that the theme you select for your website is optimized for speed, and has all the necessary elements, all while keeping it lightweight and attractive for visitors.        
TheFour is a prime example of an elegant theme for businesses, which is optimized for speed.       
It’s easy to set up and features a design that is light and mobile-friendly, ensuring that the theme won’t weigh your website speed down.       

## Minimize or combine CSS and JS files
To decide whether you need to work on the JS and CSS files within your website, you can use Google PageSpeed Insight tool.      
The tool will let you know of changes you can make on your website to make it faster.       
JS and CSS file sizes impact how fast a page loads up, so by minimizing, combining files, or removing unused CSS and JS files, you can cut the size of these files.       

For those who are aware of the technicalities of websites and familiar with its language, Google has given a guideline on how you can minimize the files on your own.      
For those that aren’t familiar with the technicalities, there are plugins such as Autoptimize and WP Rocket that can help you with the minimizing process.        

## Use Content Delivery Networks (CDN) on your website
Most businesses have visitors from various locations of the world.       
You may not be aware but the site speed for those located far away varies and is usually slower.       
It is important that you make sure your website caters to users, no matter where they are accessing it from.       
CDN can help you do that.        
A copy of your website is stored in data centers in various locations around the world.        
So when it is accessed, the website loads from the closest data center ensuring it loads up in a timely manner.       

If you use Jetpack plugin, it already has Assets CDN for images and CSS, JavaScript files.        

## Manage post revisions
WordPress has a feature that saves any content changes known as a post revision without deleting previous revisions made to the website.        
Now, for someone who is constantly updating the content on their website, post revisions can eventually take up a lot of space in the database.       
Which of course prompts the website to load much slower.        

You can limit post revisions on your website to make sure that revisions aren’t automatically saved once made.        
You need to get access to the root folder of WordPress and open the `wp-config.php` file.        
Furthermore, you will notice a code,        

```php
require_once(ABSPATH . 'wp-settings.php').
```

Before it, enter the following code to disable post revisions:          

```php
define('WP_POST_REVISIONS', false)
```
Or to limit it you can enter:         

```php
define('WP_POST_REVISIONS', 2)
```

Note that the number you put in determines the number of post revisions that would be saved.        
So if you put 2, it would save only two revisions.        

## Maintain your website on a regular basis
Your website, like a hard disk, needs regular maintenance to make sure it performs well.        
It has many files that, when not maintained, can bog it down.        
Chances are you also have installed plugins on your website, some you don’t even need or use any longer, which take up space.         
By performing maintenance you can make sure that unwanted files are removed from the website database so it is lean and fast.        
Cleaning up tools such as WP-Optimize can help you maintain your website.        
From post revisions to unwanted files, it can take care of everything so your website loads as quickly as possible.        

## Host videos elsewhere
Videos are a great marketing tool.       
However, they can be heavy in size, especially since HD content has been introduced.        
Rather than hosting videos on your website, you can host them elsewhere and embed them on your website.        
You can start a YouTube channel with all your videos and embed the YouTube link to your website.         
This will make sure that when your site loads up, the video won’t factor into the load time.        

## Optimize your images for the website
To make your website more appealing, it is obvious that you want to use high-quality images.         
The number of images and the higher quality they are, the more time added to the load speed.        
But that doesn’t mean you have to limit the images you use.        
There is a way to optimize the images so, while the quality is slightly altered, the size decreases.         
You can use Adobe Photoshop or plugins such as WP Smush to help you optimize the image.         
These allow you to fiddle around with the size, alignment, quality, and numerous aspects of the picture.        
You can play around to find the best combination of settings, which will reduce file size while protecting the quality of the image.        

## Conclusion
WordPress has definitely made it easier for individuals and businesses to establish a website.        
However, it doesn’t mean that the website is optimized for search engines.       
Site speed is one aspect website owners need to focus on to enhance user experience and rank higher on search engines.         
