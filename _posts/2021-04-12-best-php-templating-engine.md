---
layout: post
title: "Best PHP Templating Engine"
description: ""
author: shoaiyb
image: assets/images/php-templating.webp
imageshadow: true
categories: [ PHP, Beginner ]
toc: true
published: false
---




Yes, you can use PHP as a templating language.       
But why we do this if more reliable and more lightweight options are available.       

For example, for displaying the value of a variable in PHP, we write –

```php
<?php echo $var; ?>
```
But same can be done with lesser code in other templating languages like Twig, Django just by writing –       
```
{{ var }}
```

For printing a single it seems not much different but, when creating a website we have to print thousands of variables and opening and closing thousands of PHP tags is never a recommended way.       

PHP is best suited for writing business logic.       
It should not be mixed with the presentation layer.        
The business logic determines how data are being created, stored, processed and changed.      
While presentation layer determines how data are presented to the user in a certain format such as HTML, JSON, XML or some other.      
We can see a lot of changes and optimization in PHP from version 5 to 8.       
All these changes are around improving business logic.        
I can’t find any significant change in PHP as a templating language and that why I don’t consider it a templating language.      

For example, Django introduced template inheritance some years ago, as a way to mimic classes but for templates:       
```
 {% extends "base.html" %}

  {% block header%}
  {% endblock}
  
  {% block body%}
  {% endblock}

  {% block footer%}
  {% endblock}
```

It’s elegant, easy to understand, and really powerful.      
It’s so powerful that many template engines now support this feature out of the box.       

As we continue to develop complex web applications which are modeled after the MVC architecture, It is becoming more important to have a wall of separation between back-end logic and front-end logic so that back-end developers and front-end developers can collaborate on the same areas of the website without having to step around each other’s code.     

-----------------------------------------------------------------------------------------
Here I listed the most widely used templating engines based on the usages and popularity.       

## Twig
**Fast – Secure – Flexible**

![twig](





