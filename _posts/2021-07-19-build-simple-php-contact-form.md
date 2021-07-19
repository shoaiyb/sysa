---
layout: post
title: "Build A Simple PHP Contact Form With Validation"
description: ""
author: shoaiyb
categories: [ PHP, Develope ]
toc: true
---






For this tutorial, we'll be creating a php contact form, A contact form is what your clients will use to contact you.       
We'll be using [PHP](/categories/#php), you'll also need a working mail server. If you don't have one installed on your server emails will not be sent to your inbox, I recommend Postfix if you're running Linux.



## Creating the Form Design
Let's create a basic form design our clients can use to send emails, create a file called `contact.php`.

### The HTML
To create a form we can use HTML, below is a basic form:

```html
<form method="post" action="contact.php" class="form">
	<input type="email" name="email" placeholder="Your Email Address" required>
	<input type="text" name="name" placeholder="Your Name" required>
	<input type="text" name="subject" placeholder="Subject" required>
	<textarea name="msg" placeholder="What would you like to talk about?" required></textarea>
	<input type="submit">
</form>
```



### The CSS

```css

```


## The Full Source

```php
<?php






?>
<!DICTYPE html>
<html>
<head>
</head>
<body>
<form class="contact" method="post" action="contact.php">
<input type="email" name="email" placeholder="Your Email Address" required>
<input type="text" name="name" placeholder="Your Name" required>
<input type="text" name="subject" placeholder="Subject" required>
<textarea name="msg" placeholder="What would you like to contact us about?" required></textarea>
<input type="submit">
</form>
</body>
</html>
```



## Conclusion
That's basically all you need to do to create a contact form, it's very easy and doesn't require you to write much code, PHP's built-in mail function makes it so simple to do.

If submitted emails are not being sent to your contact inbox remember to check your mail server. If your computer or server is not running a mail server emails will not be sent.

Remember to follow, share, and like my article if you find it useful.

Happy Coding!
