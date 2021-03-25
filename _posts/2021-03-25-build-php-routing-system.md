---
layout: post
title: Building A PHP Routing System
description: "Routing is the process of parsing a URI and determining the appropriate action to take."
author: shoaiyb
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

As does <a href="https://github.com/bramus/router" target="_blank" rel="nofollow noreferrer">this one</a>.

And <a href="https://github.com/nikic/FastRoute" target="_blank" rel="nofollow noreferrer">this one</a>.

## A Very Simple PHP Router
To demonstrate these concepts let’s create a stupid simple, not at all useful, PHP router.            

```php
<?php
/**
 * First, let's define our Router object.
 */
class Router
{
    /**
     * The request we're working with.
     *
     * @var string
     */
    public $request;
 
    /**
     * The $routes array will contain our URI's and callbacks.
     * @var array
     */
    public $routes = [];
 
    /**
     * For this example, the constructor will be responsible
     * for parsing the request.
     *
     * @param array $request
     */
    public function __construct(array $request)
    {
        /**
         * This is a very (VERY) simple example of parsing
         * the request. We use the $_SERVER superglobal to
         * grab the URI.
         */
        $this->request = basename($request['REQUEST_URI']);
    }
 
    /**
     * Add a route and callback to our $routes array.
     *
     * @param string   $uri
     * @param Callable $fn
     */
    public function addRoute(string $uri, \Closure $fn) : void
    {
        $this->routes[$uri] = $fn;
    }
 
    /**
     * Determine is the requested route exists in our
     * routes array.
     *
     * @param  string  $uri
     * @return boolean
     */
    public function hasRoute(string $uri) : bool
    {
        return array_key_exists($uri, $this->routes);
    }
 
    /**
     * Run the router.
     *
     * @return mixed
     */
    public function run()
    {
        if($this->hasRoute($this->request)) {
            $this->routes[$this->request]->call($this);
        }
    }
}
 
/**
 * Create a new router instance.
 */
$router = new Router($_SERVER);
 
/**
 * Add a "hello" route that prints to the screen.
 */
$router->addRoute('hello', function() {
    echo 'Well, hello there!!';
});
 
/**
 * Run it!
 */
$router->run();
```

### Run The Code
1. Save this code locally as index.php.         
2. In your terminal navigate to the directory where you saved the script.          
3. Start the built-in PHP web server: php -S localhost:1234          
4. In your browser go to: `http://localhost:1234/hello`           

## Conclusion
I’ve touched on the very basics of routing, shared some routing examples from the PHP world, and built a extremely simple router.          

One last thing, be sure to signup for my newsletter! Each week I’ll send you a great email filled with updates, great links, tips & tricks, and other non-dev randomness.         
