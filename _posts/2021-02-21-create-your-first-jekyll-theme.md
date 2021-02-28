---
layout: post
title:  "Create Your First Jekyll Theme"
description: Create your first jekyll theme from scratch never been easier, but with me you'll find it much easier.
author: shoaiyb
image: assets/images/create-jekyll-theme.webp
imageshadow: true
toc: true
category: jekyll, develop
---

#### Getting Started

#### Requirements
- html
- css

If you really want to develop your own jekyll theme you need at least `html` and `css` knowledge, So happy to hear that there are many `css` frameworks out there.

#### Create Config
The config accessible from `_config` is the main head branch, Which contains the main info of the theme like (name, permalink, description and so on...)    
The config file here will be used as it's use on every jekyll theme.    
Let's put somethings here.
```config
# Site Info
name: "shoaiyb sysa"
title: "shoaiyb sysa"
description: "Get free blogging ideas, tips & tricks, And learn how to develop some simple scripts as a beginner."
logo: 'assets/images/logo.png'
favicon: 'favicon.ico'
baseurl: /
permalink: /:title/
google_analytics: 'UA-187607202-1'
email: contact@sysa.ml

# Site Plugins
plugins:
  - jekyll-sitemap
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-redirect-from
```
We've done creating `_config` file now let get to `Gemfile`.    

#### Create Gemfile
As the `_config` file is set, Let's talk about `Gemfile`,   
Gemfile is where you manage which Jekyll version is that is used to run.    
When you want to use a different version, change it below,    
Save the file and run `bundle install`. Run Jekyll with `bundle exec`, like so: bundle exec jekyll serve

```Gemfile
source "https://rubygems.org"

gem 'wdm', '>= 0.1.0' if Gem.win_platform?
group :jekyll_plugins do
    gem 'jekyll-feed'
    gem 'jekyll-sitemap'
    gem 'jekyll-seo-tag'
    gem 'jekyll-redirect-from'
    gem 'bootstrap', '~> 4.4.1'
end
```
#### Create Layouts
Well, `Gemfile` have been created successfully, Let's dive into layouts,     
Layouts are the html scripts for the whole theme, it consists all the html templates.   
`_layouts` are going to be created as:    
- _layouts
-- default.html
-- post.html

#### Create Includes
Includes is similarly the same to layouts,   
The only difference is that `_includes` consists of included files, Like Adsense ads.     
The `_includes` file is going to the same as `_layouts` structure.    
- _includes
-- social-share.html
-- adsense.html
#### Create index.html

```html
---
layout: default
title: Home
---
<!-- Posts View -->
<div class="blog-grid-container">
    {% for post in paginator.posts %}
        {% include postbox.html %}
    {% endfor %}
</div>

```
#### Create 404.html

#### Create Posts

#### Create Pages

#### Test


