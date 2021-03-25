---
layout: post
title: Building A PHP Routing Framework
description: ""
image: assets/images/php-routing.jpg
imageshadow: true
category: [ PHP, DEVELOP ]
toc: true
---





## What is Routing?
Routing is the process of parsing a URI and determining the appropriate action to take.          

For example, consider the following URI:         
```url
http://example.com/login
```

How does a request like the one above result in a response to the user?          
Let’s break it down:         

1. The request is received by the application.         
2. The application breaks down the request into its components.          
Things like: the method (ex: GET), host, path, etc.           
3. The application looks for a defined route that matches this request.             
4. Once found, it takes the defined action and returns a response.           


## Example from Laravel
For a real-world example, here’s one way the above example could be implemented in Laravel.          

```php
Route::get('/login', function() {
    return view('login');
});
```

We define a GET route for the /login URI.          
When that route is requested we return a response – in this case, HTML for the login page.         

## How Routers Work
There are a number of routers in the PHP ecosystem.         
They range from the more simplistic to feature-packed behemoths.          
Although they differ in size and complexity, they generally employ the same fundamental steps: parse the request, match the pattern, run some code, return a response.     

The <a href="https://github.com/symfony/routing" target="_blank" rel="nofollow noreferrer">Symfony router</a> (probably the most widely used PHP router) does this.

As does < ahref="https://github.com/bramus/router" target="_blank" rel="nofollow noreferrer">this one</a>.

And <a href="https://github.com/nikic/FastRoute" target="_blank" rel="nofollow noreferrer">this one</a>.






