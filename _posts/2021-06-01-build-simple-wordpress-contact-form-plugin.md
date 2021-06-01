---
layout: post
title: "Build A Simple WordPress Contact Form Plugin"
description: "Developing your own WordPress plugin helps you better understand how WordPress works ‘under the hood’ which can help you to become a more experienced web developer."
author: shoaiyb
image: assets/images/formtact.webp
imageshadow: true
categories: [ WordPress, Beginner, Develop ]
toc: true
---




Most websites are typically designed to comply with standard web practices by including a dedicated page where a contact form is located.       
This provides visitors with an easy way to reach out to the site owner.

In simple terms, a contact form has a set of questions and fields which are filled in by a visitor.      
The information is usually automatically sent via email to the site administrator or another nominated email account.       
It is worth noting that this email address isn’t displayed to visitors, so using a contact form typically reduces email spam from bots that harvest naked email addresses on the Internet.      
Contact forms play a very important role on a website, where they are used for collecting feedback, enquiries and other data from users.

If your website is powered by WordPress, there are numerous plugins that seamlessly integrate a contact form on your website.

In this article, I will provide a list of some free WordPress contact form plugins.       
I will also discuss why you should consider rolling your own contact form.      
Then, I will provide you with a short tutorial showing you how to build your own WordPress contact form plugin.      


## WordPress Contact Form Plugins
Before we get started, we’re going to go over a few of the popular free contact form plugins available in the WordPress Plugin Directory.       
These are great to use, but even better to learn from when you’re getting started building your own plugins.

Below are some of the most highly rated free contact form plugins for WordPress:

- Contact Form 7:       
This is the second most popular plugin with over 18 million downloads, it could almost be considered as the de facto contact form plugin for a WordPress website.      
Contact Form 7 can manage multiple contact forms and you can customize the form and the email contents with simple markup.      
The form features include Ajax-powered submission, CAPTCHA, Akismet spam filtering and lots more.

- Contact Form to Email:      
This plugin not only creates contact forms and sends the data to a specified email address it also saves the contact form data into a database, providing printable reports and the option to export the selected data to CSV/Excel file.

- FormGet Contact Form:       
An easy online drag and drop contact form builder tool.      
All you need to do is click on the fields that you want in your form, and within few seconds your contact form is ready.

- Bestwebsoft Contact Form:      
Allows you to implement a feedback form to a web page or a post effortlessly.      
It is extremely easy, and you won’t require any additional settings, even though there are some available to play with.


## Why Roll Your Own Contact Form Plugin?
### Becoming a Better Developer
Developing your own WordPress plugin helps you better understand how WordPress works ‘under the hood’ which can help you to become a more experienced web developer.       
While there are tens of thousands of plugins in the <a href="https://wordpress.org/plugins/" target="_blank" rel="nofollow noreferrer">WordPress Plugin Directory</a> to use, being able to modify and extend other plugins is a very useful skill.

### Building a Better Form
Many WordPress contact form plugins are bloated.      
They include many features that you may never use.      
Heavy usage of JavaScript and CSS files are also common in some of the standard contact form plugins.     
This increases the number of HTTP requests which adversely affects WordPress performance.


> 80% of the end-user response time is spent on the front-end.      
> Most of this time is tied up in downloading all the components in the page: images, stylesheets, scripts, Flash, etc.      
> Reducing the number of components in turn reduces the number of HTTP requests required to render the page.       
> This is the key to faster pages.
> -- According to <a href="http://developer.yahoo.com/performance/rules.html#num_http" target="_blank" rel="nofollow noreferrer">Yahoo’s performance rules</a>

If you are like me, and you desire a simple contact form plugin that just works, read on.      
I’ll guide you through the simple process of develop your own plugin so you can kiss goodbye bloated plugins.      
In this example no extra CSS and JavaScript files are required, the validation done using HTML5.

## Contact Form Plugin Development
In five minutes, you will learn how to develop a simple WordPress contact form, that’s a promise!

**Ready**? -> **Set**? -> **Go**!

All WordPress pluigns are PHP files, located in the `/wp-content/plugins/` directory.      
In our example, the file will be called `formtact.php`.      
I assume you’re comfortable with connecting to your server using `FTP/SFTP/SCP` or `SSH`.

If you want to follow along, simply create a file called formtact.php (the final complete example will be available at the end of the article):

```php
<?php
/*
Plugin Name: FormTact
Plugin URI: https://sysa.ml/build-simple-wordpress-contact-form-plugin/
Description: Simple non-bloated WordPress Contact Form
Version: 1.0
Author: shoaiyb sysa
Author URI: https://sysa.ml
*/
    //
    // the plugin code will go here..
    //
?>
```

Next, we add the `function formtact_html()` that contains the contact form HTML:

```php
function formtact_html() {
    echo '<form action="' . esc_url( $_SERVER['REQUEST_URI'] ) . '" method="post">';
    echo '<p>';
    echo 'Your Name (required) <br />';
    echo '<input type="text" name="ft-name" pattern="[a-zA-Z0-9 ]+" value="' . ( isset( $_POST["cf-name"] ) ? esc_attr( $_POST["cf-name"] ) : '' ) . '" size="40" />';
    echo '</p>';
    echo '<p>';
    echo 'Your Email (required) <br />';
    echo '<input type="email" name="ft-email" value="' . ( isset( $_POST["cf-email"] ) ? esc_attr( $_POST["cf-email"] ) : '' ) . '" size="40" />';
    echo '</p>';
    echo '<p>';
    echo 'Subject (required) <br />';
    echo '<input type="text" name="ft-subject" pattern="[a-zA-Z ]+" value="' . ( isset( $_POST["cf-subject"] ) ? esc_attr( $_POST["cf-subject"] ) : '' ) . '" size="40" />';
    echo '</p>';
    echo '<p>';
    echo 'Your Message (required) <br />';
    echo '<textarea rows="10" cols="35" name="cf-message">' . ( isset( $_POST["cf-message"] ) ? esc_attr( $_POST["cf-message"] ) : '' ) . '</textarea>';
    echo '</p>';
    echo '<p><input type="submit" name="ft-submit" value="Send"/></p>';
    echo '</form>';
}
```

Basic validation was added to the form via the pattern input attribute.

The RegEX in the contact form does the following field validation:

- [a-zA-Z0-9 ]: only letters, spaces and numbers allowed in the name field; special symbols are deemed invalid.

- [a-zA-Z ]: only letters and spaces are allowed in the subject field.

- The `email` form control validates the email field hence there is no need for a pattern attribute.


### Hurry Up!
Okay, how many minutes do we have left? Four minutes! We still have time to get this over with.

The function deliver_mail() sanitizes the form data and sends the mail to the WordPress administrator’s email address.

```php
function deliver_mail() {

    // if the submit button is clicked, send the email
    if ( isset( $_POST['ft-submit'] ) ) {

        // sanitize form values
        $name    = sanitize_text_field( $_POST["ft-name"] );
        $email   = sanitize_email( $_POST["ft-email"] );
        $subject = sanitize_text_field( $_POST["ft-subject"] );
        $message = esc_textarea( $_POST["ft-message"] );

        // get the blog administrator's email address
        $to = get_option( 'admin_email' );

        $headers = "From: $name <$email>" . "\r\n";

        // If email has been process for sending, display a success message
        if ( wp_mail( $to, $subject, $message, $headers ) ) {
            echo '<div>';
            echo '<p>Thanks for contacting me, expect a response soon.</p>';
            echo '</div>';
        } else {
            echo 'An unexpected error occurred';
        }
    }
}
```

The sanitation of the form data is done by the following WordPress internal functions:

- `sanitize_text_field()`: Sanitize the data from user input.

- `sanitize_email()`: Strips out all characters that are not allowable in an email.

- `esc_textarea()`: Escape the message text area values.

The code `get_option( 'admin_email' )` programmatically retrieves the WordPress administrator’s email address from the database where the email will be delivered to.

Don’t want the contact form to send the mail to admin? Simply set the variable `$to` to the desired email address.

If the email has successfully been processed without any errors by the `function wp_mail()`, the text Thanks for contacting me, expect a response soon will be shown, otherwise An unexpected error occurred is displayed.


### 1 Minute and 30 Seconds Left
The `function ft_shortcode()` is the callback function that is called when the contact form shortcode [formtact] is active.

```php
function ft_shortcode() {
    ob_start();
    deliver_mail();
    formtact_html();

    return ob_get_clean();
}
```

The above functions calls the `formtact_html()` and `deliver_mail()` functions to display the contact form HTML form and validate the form data respectively.

Finally, the shortcode [formtact] is registered to WordPress. So simply add:

```php
add_shortcode( 'formtact', 'ft_shortcode' );
```


## 3, 2, 1… Time’s Up!
Congratulations, we have successfully developed our own WordPress contact form plugin and I have fulfilled my earlier promise.

Now, to use this plugin on your website, simply activate it in under the ‘Plugins’ section of your WordPress dashboard, then create a post or page and then simply add the shortcode where you want the form to appear [formtact].

If you then preview the page and you should see the contact form displayed as shown below.

![preview](/assets/images/formtact-preview.webp)       

## Conclusion
To further understand how the plugin was built and how to implement it on your WordPress site, copy the code below, paste in a file and upload it to your `/wp-content/plugins/` directory.

Here’s the entire plugin example:     
```php
<?php
/*
Plugin Name: FormTact
Plugin URI: https://sysa.ml/build-simple-wordpress-contact-form-plugin/
Description: Simple non-bloated WordPress Contact Form
Version: 1.0
Author: shoaiyb sysa
Author URI: https://sysa.ml
*/

function formtact_html() {
	echo '<form action="' . esc_url( $_SERVER['REQUEST_URI'] ) . '" method="post">';
	echo '<p>';
	echo 'Your Name (required) <br/>';
	echo '<input type="text" name="ft-name" pattern="[a-zA-Z0-9 ]+" value="' . ( isset( $_POST["ft-name"] ) ? esc_attr( $_POST["ft-name"] ) : '' ) . '" size="40" />';
	echo '</p>';
	echo '<p>';
	echo 'Your Email (required) <br/>';
	echo '<input type="email" name="ft-email" value="' . ( isset( $_POST["ft-email"] ) ? esc_attr( $_POST["ft-email"] ) : '' ) . '" size="40" />';
	echo '</p>';
	echo '<p>';
	echo 'Subject (required) <br/>';
	echo '<input type="text" name="ft-subject" pattern="[a-zA-Z ]+" value="' . ( isset( $_POST["ft-subject"] ) ? esc_attr( $_POST["ft-subject"] ) : '' ) . '" size="40" />';
	echo '</p>';
	echo '<p>';
	echo 'Your Message (required) <br/>';
	echo '<textarea rows="10" cols="35" name="ft-message">' . ( isset( $_POST["ft-message"] ) ? esc_attr( $_POST["ft-message"] ) : '' ) . '</textarea>';
	echo '</p>';
	echo '<p><input type="submit" name="ft-submit" value="Send"></p>';
	echo '</form>';
}

function deliver_mail() {

	// if the submit button is clicked, send the email
	if ( isset( $_POST['ft-submit'] ) ) {

		// sanitize form values
		$name    = sanitize_text_field( $_POST["ft-name"] );
		$email   = sanitize_email( $_POST["ft-email"] );
		$subject = sanitize_text_field( $_POST["ft-subject"] );
		$message = esc_textarea( $_POST["ft-message"] );

		// get the blog administrator's email address
		$to = get_option( 'admin_email' );

		$headers = "From: $name <$email>" . "\r\n";

		// If email has been process for sending, display a success message
		if ( wp_mail( $to, $subject, $message, $headers ) ) {
			echo '<div>';
			echo '<p>Thanks for contacting me, expect a response soon.</p>';
			echo '</div>';
		} else {
			echo 'An unexpected error occurred';
		}
	}
}

function ft_shortcode() {
	ob_start();
	deliver_mail();
	html_form_code();

	return ob_get_clean();
}

add_shortcode( 'formtact', 'ft_shortcode' );

?>
```

Let me know your thoughts and questions in the comments.
