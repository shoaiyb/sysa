---
layout: post
title: "Build A Simple PHP Blog"
description: "I've wanted for a long time to create a simple way of blogging that eschews basically all bells and whistles, I wanted to use plain text files, but some formatting is nice Markdown was the obvious solution for this. That's really all there is to it 'simple PHP-based templating, and Markdown-formatted plain text content'."
author: shoaiyb
image: assets/images/simple-php-blog.webp
imageshadow: true
categories: [ PHP, Develop, Beginner, Guide ]
toc: true
published: false
---



I've wanted for a long time to create a simple way of blogging that eschews basically all bells and whistles.       
Many "flat file" Content Management Systems exist already, as well as "static site generators", but none of these that I looked at were simple enough for my liking.

I don't want to have to install Ruby, or Python, or Composer, or whatever else on a server to run a blog.       
On the other hand, installing [WordPress](/why-wordpress/) or one of the other popular PHP-based CMSes for this use case is like hammering in a nail with a sledgehammer.

Many people dislike PHP, and while it has its warts, I like it.       
I like using (vanilla) PHP simply because it is nearly ubiquitous.      
Having to install or configure it is often unnecessary because it is usually **already** installed, configured, and running.

I wanted to use plain text files, but some formatting is nice -- Markdown was the obvious solution for this, since it offers quite a lot of options in terms of text formatting, without sacrificing the readability of the plain text itself.      
I was not keen on adding dependencies but I found [Parsedown](http://parsedown.org) which offers Markdown parsing by including a single PHP file. I can deal with that.

That's really all there is to it 'simple PHP-based templating, and Markdown-formatted plain text content'.

I know I'm probably forgetting about a million edge cases, but I want to keep it simple.       
So, we'll roll with this for now and add features as they become necessary in the next version.       

## The posts
Posts will be named in the following pattern: `the-post.md` and they will be stored in the `contents/` folder.       
The first part is the date of the post (you can optionally include a time as well if you have more than one post for that day), followed by an underscore, and the title of the post.      
The underscore is used by the system to separate the title from the date.       
This convention also has the benefit that posts can easily be sorted by publication date.       
When displayed on your blog, this post will have an URL like http://example.com/url-of-the-post

Each post will be in the markdown format (hence the extension).       
The only requirement is that the first line of the markdown document is formatted as a H1 heading. For example:

```markdown
# The title of the blog post
*31 May, 2021*

Body of the blog post.
```

This will make the first line a H1 heading.     
If this is the first time you've seen markdown, the next section is for you.     

## What is markdown
Markdown is a lightweight format for writing text.      
It has a minimal and intuitive syntax, which is transformed into HTML.      
This makes it perfect for our simple blog system, as it won't have an admin panel nor database - all the posts will be stored in a folder as files.

We can't simply display the raw markdown directly, first we have to transform it into HTML.      
There are a number of libraries that can do this (in every major language), but for this tutorial I chose the Parsedown library.      

## The PHP code
Here is our main PHP files:

### The config
```php
<?php
return array(
// Blog Title
'title' => 'Simple PHP Blog',

// Blog Description
'description' => 'Build A Simple PHP Blog',

// Blog URL
'url' => 'http://localhost:8080',

// Blog Email
'email' => 'mail@localhost:8080'

);
?>
```

### The index
```php
<?php
/**
 * @package Simple PHP Blog
 * @author Shoaiyb Sysa
 * @see https://sysa.ml
 * @license MIT
 */

$config = require 'config.php';



?>
```

## The htaccess
```apacheconf
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.+)$ index.php?page=$1 [QSA,L]
```

## It's a wrap!
Continue with the next part, where we are going to create new themes with responsive CSS design and some plugins that could make the blog easier to setup.


