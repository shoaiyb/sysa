---
layout: post
title: "Build Static Blog With Jekyll For Free On Github Pages"
description: "To understand GitHub, you must first have an understanding of Git."
author: shoaiyb
image: assets/images/build-with-jekyll.webp
imageshadow: true
toc: true
category: [ Jekyll, Beginner, Develop ]
---



## What is Github?
To understand GitHub, you must first have an understanding of Git.     

### What is Git?
Git is an open-source version control system that was started by Linus Torvalds—the same person who created Linux. Git is similar to other version control systems—Subversion, CVS, and Mercurial to name a few.    
So, Git is a version control system, but what does that mean? When developers create something (an app, for example), they make constant changes to the code, releasing new versions up to and after the first official (non-beta) release.     
Version control systems keep these revisions straight, storing the modifications in a central repository. This allows developers to easily collaborate, as they can download a new version of the software, make changes, and upload the newest revision. Every developer can see these new changes, download them, and contribute      
Similarly, people who have nothing to do with the development of a project can still download the files and use them. Most Linux users should be familiar with this process, as using Git, Subversion, or some other similar method is pretty common for downloading needed files—especially in preparation for compiling a program from source code (a rather common practice for Linux geeks).     
Git is the preferred version control system of most developers, since it has multiple advantages over the other systems available. It stores file changes more efficiently and ensures file integrity better. If you’re interested in knowing the details, the [Git Basics page](http://git-scm.com/book/en/Getting-Started-Git-Basics) has a thorough explanation on how Git works.     

### The 'Hub' in Github
We’ve established that Git is a version control system, similar but better than the many alternatives available.    
So, what makes GitHub so special? Git is a command-line tool, but the center around which all things involving Git revolve is the hub—GitHub.com where developers store their projects and network with like minded people.    
Let’s go over a few of the main reasons that geeks like to use GitHub, and learn some terminology along the way.     

### Repository
A repository (usually abbreviated to “repo”) is a location where all the files for a particular project are stored.    
Each project has its own repo, and you can access it with a unique URL.    

### Forking a Repo
“Forking” is when you create a new project based off of another project that already exists.    
This is an amazing feature that vastly encourages the further development of programs and other projects.    
If you find a project on GitHub that you’d like to contribute to, you can fork the repo, make the changes you’d like, and release the revised project as a new repo. If the original repository that you forked to create your new project gets updated, you can easily add those updates to your current fork.     

### Pull Requests
You’ve forked a repository, made a great revision to the project, and want it to be recognized by the original developers—maybe even included in the official project/repository. You can do so by creating a pull request. The authors of the original repository can see your work, and then choose whether or not to accept it into the official project.    
Whenever you issue a pull request, GitHub provides a perfect medium for you and the main project’s maintainer to communicate.    
### Social networking
The social networking aspect of GitHub is probably its most powerful feature, allowing projects to grow more than just about any of the other features offered.     
Each user on GitHub has their own profile that acts like a resume of sorts, showing your past work and contributions to other projects via pull requests.    
Project revisions can be discussed publicly, so a mass of experts can contribute knowledge and collaborate to advance a project forward. Before the advent of GitHub, developers interested in contributing to a project would usually need to find some means of contacting the authors—probably by email—and then convince them that they can be trusted and their contribution is legit.    

### Changelogs
When multiple people collaborate on a project, it’s hard to keep track revisions—who changed what, when, and where those files are stored.    
GitHub takes care of this problem by keeping track of all the changes that have been pushed to the repository.    

### GitHub Isn’t Just for Developers
All this talk about how GitHub is ideal for programmers may have you believing that they are the only ones who will find it useful. Although it’s a lot less common, you can actually use GitHub for any types of files. If you have a team that is constantly making changes to a word document, for example,  you could use GitHub as your version control system. This practice isn’t common, since there are better alternatives in most cases, but it’s something to keep in mind.     
Now that you know what GitHub is all about, and you're ready to get to the next step. and be sure to check out their.     

## What is Github Pages
[GitHub Pages](https://pages.github.com) is a free place to store the files that run a website and host that website for people to visit (it only works for particular types of website, like basic HTML sites or Jekyll sites, and does not host databases).    

## What is Jekyll?
Jekyll is a website generator that’s designed for building minimal, static blogs to be hosted on GitHub Pages.    
It is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more.     
Jekyll takes your content written in Markdown, passes it through your templates and spits it out as a complete static website, ready to be served. GitHub Pages conveniently serves the website directly from your GitHub repository so that you don’t have to deal with any hosting.     
Here are some websites that were created with Jekyll:     
- [{{ site.name }}]({{ base.url }}/) (this website)     
- [Jekyll](https://jekyllrb.com)    

### Purpose of Jekyll
[Tom Preston-Werner](https://tom.preston-werner.com) created Jekyll to enable people to blog using a simple static HTML website, with all of the content hosted and version-controlled on Git repository.     
The goal was to eliminate the complexity of other blogging platforms by creating a workflow that allows you to blog like a hacker.     

> On Sunday, October 19th, I sat down in my San Francisco apartment with a glass of apple cider and a clear mind. After a period of reflection, I had an idea. While I’m not specifically trained as an author of prose, I am trained as an author of code. What would happen if I approached blogging from a software development perspective? What would that look like?     
>
> Over the last month I’ve brought these concepts to fruition and I’m pleased to announce [Jekyll](https://github.com/mojombo/jekyll).        
> -- Tom Preston-Werner       

## Reminder
Here’s a quick reminder of what you need to know about this option:    
- Price: FREE
- Difficulty: Medium
- Knowledge: Git, Markdown
- Required Tools: GitHub account, Internet Browser

## Pros
1. Totally Free    
2. No database    
3. No CMS     
4. Security    
5. Design control    
6. Super fast (only static files)    
7. Easy to make changes (edit, commit & push)    

## Cons
1. A bit of tech knowledge is required    
2. Need to pay for a domain name (to avoid the url myname.github.io)    
3. Have to use Disqus for comments    

