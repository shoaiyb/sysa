---
layout: post
title: "WordPress Maintenance Mode"
description: "There are different reasons why you might want to put your site into maintenance mode, Maintenance mode is primarily used to run updates, make changes to design, or fix a security issue, move WordPress site to root, but is not limited to this."
author: shoaiyb
image: assets/images/wordpress-maintenance-mode.webp
imageshadow: true
category: [ WordPress, Beginner, Guide ]
toc: true
---



## What is WordPress Maintenance Mode?
Maintenance mode makes your website temporarily unavailable to visitors.           
It replaces your website with a page that displays a message to the visitor that the site is under maintenance or temporarily unavailable.          

Maintenance mode is primarily used to run updates, make changes to design, or fix a security issue, move WordPress site to root, but is not limited to this.    

There are different reasons why you might want to put your site into maintenance mode.           
For example, you may have just [bought a domain](/buy-domain-name/) and [hosting plan](/best-wordpress-hosting/).         
While you build your website, you would like for visitors not to view an incomplete site.          
Such situations make maintenance mode a nifty little feature.          


## When To Use WordPress Maintenance Mode?
As much as I’d like zero downtime for my sites, there are times when it’s unavoidable and I need to enter into maintenance mode.          
But I have also witnessed WordPress users choosing maintenance mode and experiencing downtime when it could be avoided.        

So here, I address when it’s a good idea to put WordPress site in maintenance mode:         

- Bug:          
You’ve found a bug on your site and you need to fix it, especially if it’s affecting your site majorly.          

- Hacked:       
Your WordPress site is hacked and you need to fix it.          
While you restore your backup, you can activate maintenance mode so that your visitors will be blocked from accessing your site.           

- Under Construction:          
If you’re just starting out and building your website, you should put it in maintenance mode that displays ‘Coming Soon’ or ‘Under Construction’ to the visitor.    

- Updates:          
If you have missed updating a plugin/theme that has a vulnerability and you need to update your site, you should put it in maintenance mode.           
This way, your visitors will not be put at risk while you install the new version with the security patch.         


## How to Put Your WordPress Site in Maintenance Mode
There are various ways to implement maintenance mode on your website including a default setting in WordPress.         

If you like doing it the easy way, you can install one of the many plugins available in the WordPress repository.         
But if you prefer going the technical way, then you can proceed with the manual method.          

### With plugins
There are several plugins available to put your site into maintenance mode and they are very easy to use.          
However, with all plugins, they vary in features, pricing, and reliability.          
I’ve listed five plugins I think do a great job at setting up maintenance mode:         

#### Coming Soon          
This plugin is by far the most popular one among maintenance mode plugins.          
It enables you to create a simple page that mentions ‘Coming Soon’, ‘Under Construction’, or ‘Maintenance Mode’.          
It has over 1 million active installations and is available in 15 languages.        

**Pricing**:       
There’s a free version.         
The pro version starts at $29 per year.        

**Features**:       
- Compatible with any WordPress theme.       
- Customize the look and feel of the page      
- Supports Multisite       
- Easily add Custom CSS and HTML       

#### Maintenance

![maintenance](/assets/images/maintenance-wp-plugin.webp)         

This easy-to-use plugin is loved by over 400,000 active users.          
As a site admin, you can close your website and enable a temporary page to be displayed.         
Maintenance partnered with Weglot to offer the plugin in over 100 languages.         
Plus, you get access to Security Ninja to take care of your site’s security.          

**Pricing**:       
Free.      

**Features**:       
- Retina-ready layouts (Both in HTML and CSS).        
- Upload you own logo.        
- Customize content, fonts, icons, backgrounds, and color.         
- Supports Google Analytics.          
- Supports all popular caching plugins.         

#### CMP
The CMP plugin stands apart from the rest of the plugins because it offers premium features for free.         
It’s easy to set up a customized maintenance mode page and even add videos and images to it.        

**Pricing**:       
Free.       

**Features**:        
- 1-click activation of the maintenance page.         
- Readymade predefined layouts available.         
- Customizable logo, background, text, graphics, and content.         
- Add YouTube videos or Unsplash images.         
- Add subscriber form and social media icons.         
- Works with all themes.         
- Supports Google Analytics.         

#### Minimal Coming Soon
This plugin is a simple plugin that works with any WordPress theme or plugin.          
It’s easy to integrate it with the MailChimp API so you can collect emails from visitors.         
It’s packed with features and is used by over 80,000 WordPress sites.           

**Pricing**:        
There’s a free version.          
The premium starts at $39.        

**Features**:         
- Collect leads and subscribers through the maintenance page.          
- Compatible with all WordPress themes and plugins.         
- Completely customizable.        
- Drag and drop to rearrange page elements.        
- Supports Google Analytics.         


Now, we know there are instances where a plugin may not be your first choice.          
In this case, you can insert a snippet of code into your WordPress files.          

We show you how to do it the manual way next.          


### Manually
Enabling maintenance mode isn’t too technical and anyone should be able to handle the process.          
However, anytime you make manual changes to the backend of your WordPress site, there’s a risk of breaking your site.          
Any small error can cause major problems.          

I recommend taking a complete backup of your site.         
Once you have a backup in place, you can move on to the steps of enabling maintenance mode on your own.          

#### Enable
There are four ways you can enable maintenance mode on your WordPress site:                 

- Using .maintenance file:          
**Step 1**:         
Log into your hosting account.          
Access `cPanel > File Manager > public_html`.        
**Step 2**:         
Click on New File and name it `.maintenance` (ensure you add the period (.) before the word).         
Click on Create New File.         

**Step 3**:        
Select the .maintenance file, right-click and select Edit.         
In case you cannot see the .maintenance file, click on Settings and select Show hidden files.          

**Step 4**:         
Enter the following snippet of code in the file:          

```php
<?php

 $upgrading = time();

?>
```

Now check your site, it should display the following prompt:        

![prompt](/assets/images/promt.jpg)          

This code won’t allow anyone to access the front end of the site till you remove the .maintenance file.          

- Using the function.php file of your theme        
You can add customized messages to your maintenance mode page using the functions.php file.          

**Step 1**:         
Log into your hosting account.          
Access `cPanel > File Manager > public_html`.         

**Step 2**:         
Go to `wp-content > Themes` and select your active theme’s folder.        

**Step 3**:        
Right-click on the functions.php file and select Edit.         

**Step 4**:         
Add this snippet of code to the end of the file:        

```php
// Activate WordPress Maintenance Mode

function wp_maintenance_mode() {

if (!current_user_can(‘edit_themes’) || !is_user_logged_in()) {

wp_die(‘<h1>Under Maintenance</h1><br />Website under planned maintenance. Please check back later.’);

}

}

add_action(‘get_header’, ‘wp_maintenance_mode’);
```

**Step 5**:        
Save Changes and close the file.        
You can visit your site in Incognito mode and you’ll see the following prompt:         


#### Disable
To disable maintenance mode, you simply need to delete the .maintenance file.           
If you want to activate maintenance mode on a regular basis, you can keep the file and rename it to .maintenance-disabled.          
When you want to activate maintenance mode, simply rename this file back to .maintenance.          

If you used the functions.php method, to deactivate maintenance mode, simply remove the code snippet from the functions.php file.            


### Default Maintenance Mode
WordPress has a default maintenance mode enabled on every WordPress site.         
When you run updates, WordPress automatically makes your site temporarily unavailable until the update is complete.            

It enables and disables automatically when you run an update.

And that’s the different ways you can implement maintenance mode on your WordPress site.          
Now that you know the methods, it’s important to also understand if it’s the right option to use on your site.          
Next, we discuss disadvantages that come along with maintenance mode and the common problems that users incur.        


### Disadvantages Of Maintenance Mode
Maintenance mode is great because you can make changes without visitors privately.          
But there are a few disadvantages:         

1. When you use maintenance mode, your site will experience downtime.           
This means you lose visitors and revenue for the duration you keep your site in maintenance mode.        

2. Sometimes, you may not anticipate how long changes are going to take and this can result in prolonged downtime.          

3. Sometimes, maintenance mode deactivates SSL.         
This can jeopardize the safety of your website.          

Added to this, there are a couple of problems that arise frequently when you use maintenance mode.        

### Common Problems That Arise When Using Maintenance Mode
WordPress support forums and other popular forums have a long list of problems under ‘maintenance mode’.          
This is not to say maintenance mode is not a good option.          
We don’t discourage you from using it.          
But we want you to be fully aware of problems that ensue so that you can be fully prepared for them.          

I’ve listed common problems faced while using maintenance mode along with their solutions:          

#### Unable to deactivate maintenance mode
Many users face this issue where they are unable to bring their sites out of maintenance mode both when using a plugin or the manual method.            
The solution to this is quite simple.          
This is usually a caching issue which means older content is being served.           
You simply need to clear your cache.        
Refresh your page and try again.          

Alternatively, use Incognito mode to check if your website is being displayed correctly to visitors.             

If the problem persists, you need to contact the plugin developer or seek help in WordPress forums.            

Read my comprehensive guide on solving [WordPress Stuck in Maintenance Mode](/wordpress-stuck-in-maintenance-mode/) issues.           

#### Maintenance Mode page is different than what you set up
Users also complain that they have set up a maintenance page but a different one is being displayed.          
This could be an issue that is specific to the plugin being used.          
You can contact the developer to get guidance on how to fix it.         

#### Google still showing maintenance mode in SERPs
Another very common issue is that after maintenance mode is deactivated, it still shows up on Google search results.             

Google crawls and indexes your website’s pages regularly.           
You would just need to wait for Google to crawl your website again.           

If you’re in a hurry, you can request for reindexing using Google Webmasters.          

#### Unable to access wp-admin page in maintenance mode
There have been instances where users have been locked out of their website after activating maintenance mode.            

They aren’t able to access the frontend of their site nor the wp-admin login page.         

The solution to this issue is to use wp-login page.          
Some plugins create a new page called wp-login instead of wp-admin. For example, to access your site you would need to use https://yourdomain.com/wp-login.         

If this doesn’t work, you’ll need to manually disable the plugin.          
Go to your hosting `account -> cPanel -> File Manager > public_html` folder.         

Look for a folder named wp-content and inside access the plugins folder.          
Find the maintenance mode plugin folder.             
Rename this folder to nameofplugin_disable.           

Now go back to yourdomain.com/wp-admin.           
You should be able to log back in.          

For all other miscellaneous problems related to maintenance mode, it’s best to contact the developer directly or ask for help on the WordPress support forum.           
WordPress has a very active community that’s ever ready to help a fellow WordPress user.          

That brings us to the end of our guide to WordPress maintenance mode.           
We’re confident that you are now equipped to use maintenance mode with ease on your site.          
Before we leave you, we want to give you one more tip on an alternative to maintenance mode that you can use in certain cases.          


### An Alternative To Maintenance Mode: WordPress Staging 
Maintenance mode is great because you can hide your site while you make changes.           
But there are some circumstances where you don’t need maintenance mode at all.           
You can make your changes without experiencing any downtime.           
And this is made possible through staging environments.         

Here’s when I recommend you use a staging site instead of maintenance mode:          

1. When you want to change your WordPress theme and test out different themes.          
You’ll need to make sure the theme looks and functions the way you want to before you make it live.            
Using maintenance mode for this can mean extended downtime that can stretch into days or weeks.           

2. When you want to install a new plugin but you want to test its compatibility and functionality.         

3. For any unscheduled changes such as finding content errors on your site.        

4. When you want to test and run updates that are available on your site.         

5. When there’s an error on your site and you need to troubleshoot.          
You can create a staging site to troubleshoot the issue there.            
In the meantime, you can restore your backup to get your site back to normal for your visitors.           

Under all these circumstances and more, a staging site comes in handy.          
It acts as a WordPress testing environment that enables you to experiment with your site and test out changes.           
Only once you’re confident that the changes are working for you, then you can make the changes on your live site.          

The best part is you don’t have to replicate your work all over again.          
You can use a feature called Merge to Live.          
This feature is available with all popular plugins like BlogVault and even with some hosting providers.          
It pushes the changes you made on the staging site to your live site.          


### Final Thoughts
No matter how well we run our websites, there are times when we need to use maintenance mode.          
It’s something that’s unavoidable and it’s best to be prepared.            

**Remember**:         
Always take a backup of your site before installing a plugin, running updates, or making major changes to your site.            
Use a staging site when you don’t want downtime.         
Keep maintenance mode reserved for unavoidable circumstances.         

I hope this guide answers all your pressing queries and doubts about maintenance mode.          
You can bookmark this guide and come back to it when you need to.         
And make sure you follow me on Twitter @shoaiybsysa and sign up to my newsletter.        
