---
layout: post
title: "How To ByPass WordPress Admin Login"
author: shoaiyb
description: "Here is the solution to quickly log into your WordPress dashboard without knowing the username or the password."
image: assets/images/bypass-wordpress.webp
imageshadow: true
categories: [ WordPress, Beginner, Guide ]
---




We’ve all been there: You have a website that is running well for a while.     
Then you want to install some updates or change some text on the home page.     
But when you arrive at the WordPress `wp-login.php` page you cannot even remember the username of your WordPress admin account… So, here is the solution to quickly log into your WordPress dashboard without knowing the username or the password.

For now, we’ll have a look at two ways to login into your WordPress site: First one is to reset the users’ password via the Database; for this, you need access to your sites MySQL database (e.g. via phpMyAdmin).
For the second alternative, we add a small script via FTP to bypass the WordPress login mechanism.

## Reset Password via DATABASE
Even when you have access to your WordPress database, you can discover valid user names (and email addresses), but there’s no way to find out the users passwords.      
However, you can use the Database to insert a new password for a specific user.      
Note, that this approach will permanently reset the users password.

First, you need to create a Password-Hash that you can insert into the Database.      
You can use this online [tool to create an MD5 password hash](/tools/md5/).
For example, the password `{{ site.title }}` has an MD5 hash of `38f88f2d99a3737129d63361c0c8c9bf`.

You simply insert this value into the column `user_password` in your `wp_users` table for the user you want to log in with.     
A sample SQL query might look like this:

```sql
UPDATE wp_users 
SET user_password="38f88f2d99a3737129d63361c0c8c9bf" 
WHERE user_login="admin";
```

Note: This will reset the password of the user.      
You can now log in with the new password.     
However, all login cookies of this user will become invalid.
When you want to revert the password to the old value, simply reset the user_password field to the previous value (for example, when you need to make a quick change for a client without knowing his password)

## ByPass The WordPress Login Logic
This is a more elegant solution when you only need temporary access to the website, since it does not alter any details in the database.      
Clients can still log in with their password, while you can log in with a different password. Cool, right?

For this, you need access to the FTP account of the website.     
You have to upload the scripts into the `/wp-contents/mu-plugins` folder.     
When the folder does not exist, create it.

**Option 1**: Disable password check
The first script here will disable the password check.      
You only need to enter a valid user name and press the Login button.      
As this is highly insecure on production sites, you should use this script with great care!

```php
<?php
/**
*******************************************************************************
 * Log in with any password. You only need to know the username or email address.
 * 
 * How to use it:
 * 
 *  1. Save this code to wp-content/mu-plugins/auto-login.php
 *  2. Now go to wp-login.php and enter a valid username together with any 
 *     password. The password is not validated, only the username must exist.
 *  3. To disable this plugin again simply delete the file from mu-plugins.
*******************************************************************************
 */
add_filter( 'authenticate', 'nop_auto_login', 3, 10 );

function nop_auto_login( $user, $username, $password ) {
    if ( ! $user ) {
        $user = get_user_by( 'email', $username );
    }
    if ( ! $user ) {
        $user = get_user_by( 'login', $username );
    }

    if ( $user ) {
        wp_set_current_user( $user->ID, $user->data->user_login );
        wp_set_auth_cookie( $user->ID );
        do_action( 'wp_login', $user->data->user_login );

        wp_safe_redirect( admin_url() );
        exit;
    }
}
```

**Option 2**: Hardcoded master password
The second script here does a slightly different job: It requires a small change in wp-config.php where you define a custom login-name and password. The file also belongs into the “/wp-content/mu-plugins” folder. This enables you to use your hardcoded username and password to log in as the default sites administrator.

```php
<?php
/**
 *******************************************************************************
 * MAL: Maintenance Auto-Login.
*******************************************************************************
 * Automatically logs you in as the first admin user found in the WordPress 
 * database.
 * 
 * How to use it:
 * 
 *  1. Add the following 2 lines to wp-config.php - adjust the values
 *     define( 'MAL_SECRET_USER', 'admin:auto' );
 *     define( 'MAL_SECRET_PASS', '****' );
 *  2. Save this code to wp-content/mu-plugins/auto-login.php
 *  3. Now you can login to WordPress by using the SECRET_USER / SECRET_PASS 
 *     combination. When using these credentials you will end up as admin user.
 *  4. To disable this plugin again comment out the 2 lines in wp-config.php
 *******************************************************************************
 */
if ( ! defined( 'ABSPATH' ) ) { die(); }

if ( defined( 'MAL_SECRET_USER' ) 
	&& defined( 'MAL_SECRET_PASS' ) 
	&& MAL_SECRET_USER 
	&& MAL_SECRET_PASS 
) {
	add_filter( 'authenticate', 'mal_auto_login', 3, 10 );
}
function mal_auto_login( $user, $username, $password ) {
	if ( MAL_SECRET_USER == $username && MAL_SECRET_PASS == $password ) {
		// Find an admin user ID.
		$user_id = mal_get_admin_user_id();
		if ( ! $user_id ) {
			wp_die( 'No admin user found' );
		}

		// Log in as admin user automatically.
		$user = get_user_by( 'id', $user_id );
		wp_set_current_user( $user_id, $user->data->user_login );
		wp_set_auth_cookie( $user_id );
		do_action( 'wp_login', $user->data->user_login );

		wp_safe_redirect( admin_url() );
		exit;
	}
}

function mal_get_admin_user_id() {
	global $wpdb;
	$sql = "
	SELECT u.ID
	FROM {$wpdb->users} u
	INNER JOIN {$wpdb->usermeta} m ON m.user_id = u.ID
	WHERE
		(m.meta_key = '{$wpdb->prefix}user_level' AND m.meta_value = 10)
		OR
		(m.meta_key = '{$wpdb->prefix}capabilities' AND m.meta_value LIKE '%\"administrator\"%')
	";
	$res = intval( $wpdb->get_var( $sql ) );
	return $res;
}
```


