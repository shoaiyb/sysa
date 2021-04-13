---
layout: amp
permalink: /amp/create-your-own-url-shortener-in-blogspot-blog/
---
<html lang="en" amp="">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="generator" content="Jekyll v3.9.0">
	<meta property="og:title" content="Create Your Own Url Shortener In BlogSpot Blog">
	<meta name="author" content="shoaiyb">
	<meta property="og:locale" content="en_US">
	<meta name="description" content="Today in this article I will show you how to make your own URL shortener using only JavaScript in Blogger (blogspot).">
	<meta property="og:description" content="Today in this article I will show you how to make your own URL shortener using only JavaScript in Blogger (blogspot).">
	<meta property="og:url" content="http://sysa.ml/create-your-own-url-shortener-in-blogspot-blog/">
	<meta property="og:site_name" content="shoaiyb sysa">
	<meta property="og:image" content="http://sysa.ml/assets/images/bloggerjs.webp">
	<meta property="og:type" content="article">
	<meta property="article:published_time" content="2021-04-07T00:00:00+00:00">
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:image" content="http://sysa.ml/assets/images/bloggerjs.webp">
	<meta property="twitter:title" content="Create Your Own Url Shortener In BlogSpot Blog">
	<meta property="og:image" content="https://sysa.ml/assets/images/sysa.png">
	<meta property="twitter:image" content="https://sysa.ml/assets/images/sysa.png">
	<title>Create Your Own Url Shortener In BlogSpot Blog | shoaiyb sysa</title>
	<link rel="preconnect" href="https://cdn.ampproject.org">
	<link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
	<link rel="prefetch" href="https://c.disquscdn.com/next/embed/styles/lounge.c82b267b396dfbc10ae5113342115da8.css">
	<link rel="prefetch" href="https://c.disquscdn.com/next/embed/common.bundle.f485ba8b89bf2153fdb9f493ec342aed.js">
	<link rel="prefetch" href="https://c.disquscdn.com/next/embed/lounge.bundle.5c8cd56736a07a84352a4d37a862a762.js">
	<link rel="prefetch" href="https://disqus.com/next/config.js">
	<script async="" src="https://cdn.ampproject.org/v0.js"></script>
	<script src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js" async="" custom-template="amp-mustache"></script>
	<script src="https://cdn.ampproject.org/v0/amp-form-0.1.js" async="" custom-element="amp-form"></script>
	<style amp-custom="">
		code.a,pre.b{color:#000;background:0 0;text-shadow:#fff 0 1px;font-family:Consolas,Monaco,andale mono,ubuntu mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;overflow-wrap:normal;line-height:1.5;tab-size:4;hyphens:none}pre.c{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code.d,pre.e{background:#f5f2f0}:not(pre)>code.f{padding:.1em;border-radius:.3em;white-space:normal}.g.h{color:#708090}.g.i{color:#999}.g.j{color:#905}.g.k{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.g.l{color:#07a}.g.m{color:#dd4a68}div.n{position:relative}div.n>.o{position:absolute;top:.3em;right:.2em;transition:opacity .3s ease-in-out 0s;opacity:0}div.n:hover>.o{opacity:1}div.n>.o .p{display:inline-block}div.n>.o button{background:0 0;border:0;color:inherit;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch:inherit;font-size:inherit;font-family:inherit;line-height:normal;overflow:visible;padding:0;user-select:none}div.n>.o button,div.n>.o span{color:#bbb;font-size:.8em;padding:0 .5em;background:hsla(0,0%,87.8%,.2);box-shadow:0 2px 0 0 rgba(0,0,0,.2);border-radius:.5em}div.n>.o button:focus,div.n>.o button:hover,div.n>.o span:focus,div.n>.o span:hover{color:inherit;text-decoration:none}:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#40ffdc;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#40ffdc;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#111;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;text-size-adjust:100%;-webkit-tap-highlight-color:transparent}footer,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}h1,h2,h3,h4{margin-top:0;margin-bottom:.5rem}p,ul{margin-top:0;margin-bottom:1rem}b,strong{font-weight:bolder}a{color:#40ffdc;text-decoration:none;background-color:transparent}a:hover{color:#00f3c6;text-decoration:underline}code,pre{font-family:SFMono-Regular,Menlo,Monaco,Consolas,liberation mono,courier new,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}amp-img{vertical-align:middle;border-style:none}button{border-radius:0}button:focus{outline:5px auto -webkit-focus-ring-color}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;overflow:visible}button{text-transform:none}.q,button{appearance:button}.r:not(:disabled),button:not(:disabled){cursor:pointer}::-webkit-file-upload-button{font:inherit;appearance:button}template{display:none}.s,h1,h2,h3,h4{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.75rem}.s,h4{font-size:1.5rem}.t{font-size:1.25rem;font-weight:300}code{color:#e83e8c;overflow-wrap:break-word}code,pre{font-size:87.5%}pre{display:block;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.u{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.v{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.w,.x,.y,.z{position:relative;width:100%;padding-right:15px;padding-left:15px}.ab{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0;transition:border-color .15s ease-in-out 0s,box-shadow .15s ease-in-out 0s}@media (prefers-reduced-motion:reduce){.ab{transition:none 0s ease 0s}}.ab:focus{color:#495057;background-color:#fff;border-color:#c0fff3;outline:0;box-shadow:0 0 0 .2rem rgba(64,255,220,.25)}.ab::placeholder{color:#6c757d;opacity:1}.bb{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:0;transition:color .15s ease-in-out 0s,background-color .15s ease-in-out 0s,border-color .15s ease-in-out 0s,box-shadow .15s ease-in-out 0s}@media (prefers-reduced-motion:reduce){.bb{transition:none 0s ease 0s}}.bb:hover{color:#212529;text-decoration:none}.bb:focus{outline:0;box-shadow:0 0 0 .2rem rgba(64,255,220,.25)}.cb{color:#fff;background-color:#111;border-color:#111}.cb:focus,.cb:hover{color:#fff;background-color:#000;border-color:#000}.cb:focus{box-shadow:0 0 0 .2rem rgba(53,53,53,.5)}.cb:not(:disabled):not(.db):active{color:#fff;background-color:#000;border-color:#000}.cb:not(:disabled):not(.db):active:focus{box-shadow:0 0 0 .2rem rgba(53,53,53,.5)}.eb{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:0}.fb{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.fb:focus,.fb:hover{text-decoration:none}.gb{position:relative;display:flex;flex-direction:column;min-width:0;overflow-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(17,17,17,.125)}.hb{flex:1 1 auto;min-height:1px;padding:1.25rem}.ib{margin-bottom:.75rem}.jb:last-child{margin-bottom:0}.kb{padding:.75rem 1.25rem;background-color:rgba(17,17,17,.03);border-top:1px solid rgba(17,17,17,.125)}.lb{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;transition:color .15s ease-in-out 0s,background-color .15s ease-in-out 0s,border-color .15s ease-in-out 0s,box-shadow .15s ease-in-out 0s}@media (prefers-reduced-motion:reduce){.lb{transition:none 0s ease 0s}}a.lb:focus,a.lb:hover{text-decoration:none}.mb{color:#212529;background-color:#40ffdc}a.mb:focus,a.mb:hover{color:#212529;background-color:#0dffd3}a.mb:focus{outline:0;box-shadow:0 0 0 .2rem rgba(64,255,220,.5)}:root:not(#a):not(#a):not(#a) .nb{background-color:#fff}.ob:after{display:block;clear:both;content:""}:root:not(#a):not(#a):not(#a) .pb{display:block}:root:not(#a):not(#a):not(#a) .qb{display:flex}:root:not(#a):not(#a):not(#a) .rb{display:inline-flex}:root:not(#a):not(#a):not(#a) .sb{justify-content:center}:root:not(#a):not(#a):not(#a) .tb{align-items:center}:root:not(#a):not(#a):not(#a) .ub{height:100%}:root:not(#a):not(#a):not(#a) .vb{margin-right:.25rem}:root:not(#a):not(#a):not(#a) .wb{margin-left:.25rem}:root:not(#a):not(#a):not(#a) .xb{margin-top:.5rem}:root:not(#a):not(#a):not(#a) .yb{margin-left:1rem}:root:not(#a):not(#a):not(#a) .zb{margin-top:1.5rem}:root:not(#a):not(#a):not(#a) .ac{margin-right:1.5rem}:root:not(#a):not(#a):not(#a) .bc{margin-bottom:1.5rem}:root:not(#a):not(#a):not(#a) .cc{margin-left:auto}:root:not(#a):not(#a):not(#a) .dc{text-align:center}:root:not(#a):not(#a):not(#a) .ec{text-transform:capitalize}:root:not(#a):not(#a):not(#a) .fc{font-weight:700}:root:not(#a):not(#a):not(#a) .gc{color:#111}:root:not(#a):not(#a):not(#a) a.gc:focus,:root:not(#a):not(#a):not(#a) a.gc:hover{color:#000}body,button,input{font-family:Sen}body{line-height:1.7;background:#f4f4f4}a{color:#00c5a1}amp-img{max-width:100%;height:auto}h1,h2,h3,h4{font-weight:700}.hc{padding-top:50px}.ic{border-radius:40px}.bb{min-width:180px}#b,.gb,.gb:hover,.jc,.jc:after,.jc:before,.kc,.hc,a,a:hover,amp-img,amp-img:hover,body{transition:all .3s ease-in-out 0s}@keyframes a{0%{opacity:0;transform:translateY(20%)}to{opacity:1;transform:translateY(0)}}.lc{animation:a .7s ease-out 0s 1 normal forwards running}.fb amp-img{max-height:80px;margin-bottom:40px;margin-top:40px}.mc{position:fixed;left:0;top:0;width:80px;height:100%;border-right:1px solid rgba(0,0,0,.07);z-index:1022;background:#fff}.kc{position:fixed;left:15px;top:15px;width:50px;height:50px;cursor:pointer;border-radius:30px;z-index:1026}.kc .jc{width:18px;height:2px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:1px}.kc .jc:after,.kc .jc:before{content:"";position:absolute;width:18px;height:2px;background:#292c30;border-radius:1px}.kc .jc:before{transform:rotate(0deg) translateY(-5px)}.kc .jc:after{transform:rotate(0deg) translateY(5px)}.nc{display:block;width:100%;background:transparent;z-index:-1;animation:animate2 .3s ease 0s 1 normal none running}#b,.nc{position:fixed;top:0;left:0;height:100%}#b{width:420px;background:#fff;padding:0;margin:0;transform:translate(-100%);z-index:1022}#b ul{float:left;width:100%;padding:80px 30px 80px 100px}#b ul h3{margin-bottom:30px}#b ul li{list-style:none;width:100%}#b ul li a{width:100%;display:inline-block;padding:2vh 0;line-height:20px;text-decoration:none;color:#8e9aa7;font-weight:400;font-size:18px;position:relative}.oc{width:auto;margin:50px auto;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;gap:30px}.pc{color:#333;padding:0;display:flex;align-items:center}.pc .qc{width:40px;border-radius:50%;margin-right:7px}.pc .gb{border:0}.pc .gb:hover .ib a{background-size:100% 100%}.pc .ib{font-weight:700;font-size:22px;line-height:1.4}.pc .ib a{background-image:linear-gradient(transparent 89%,#40ffdc 0);background-repeat:no-repeat;background-size:0 100%;transition:background-size .6s ease 0s;position:relative}.pc .ib a:hover{text-decoration:none}.pc .jb{font-weight:400;font-size:16px;line-height:1.8;margin-top:15px}.pc .kb{font-size:14px;border-top:0;padding:1rem 1.25rem}.pc .kb a{color:inherit;font-weight:700}.pc .rc{float:right;margin-top:10px}.pc .sc{object-fit:cover;height:240px;width:100%;object-position:center top}.tc{margin-top:120px}.tc amp-img.uc{max-height:70px}.tc input{border:1px solid transparent}.tc .vc{border:1px solid;border-radius:2px;display:inline-block}.tc .vc input.wc{padding:4px 10px;min-width:250px}.tc .vc input.xc{color:#222;padding:4px 20px;margin-left:-5px;background:#40ffdc;border-left:1px solid;font-weight:700}.tc form{margin-top:30px}.yc,.zc,.bd,.cd{max-width:740px;padding-left:20px;padding-right:20px;margin-left:auto;margin-right:auto}.dd{font-size:50px;font-weight:700;line-height:1.2}.ed{width:940px;max-width:100%;text-align:center;margin:50px auto}.fd{box-shadow:0 7px 50px 0 rgba(84,110,122,.15)}.cd .qc{width:50px;border-radius:50%;margin-right:10px;border:2px solid #00d9b1;padding:2px}.zc{margin-top:50px;margin-bottom:50px}.zc .gd{font-size:16px}.zc .qc{width:70px;border-radius:50%;border:2px solid #00d9b1;padding:2px}.yc{font-size:18px}.yc p{margin-top:30px;margin-bottom:30px}.yc code{font-size:15px;color:#94918d}.yc code.hd,.yc pre.id{font-size:15px;margin-bottom:30px;background:#fff;color:inherit}.yc div.n>.o button,.yc div.n>.o span{margin-right:2px;margin-left:2px;box-shadow:0 1px 0 0 rgba(0,0,0,.1)}.bd{margin-top:30px;margin-bottom:60px}.bd #c{display:none;margin-top:60px}.jd{margin-top:120px}.jd .lb{font-size:15px;padding:5px 7px;display:inline-block;margin:0 3px}.kd{position:fixed;left:15px;bottom:40%;z-index:1026;text-align:center}.kd ul{list-style:none;padding-left:0}.kd ul li{margin:15px 0}.kd ul li a{color:#111}.ld{visibility:hidden;opacity:0;transition:opacity .5s linear 0s}.md{position:fixed;left:30px;bottom:25px;z-index:1026}.nd{margin-top:120px;padding:30px;border-top:1px solid #e9ecef;font-size:15px;background:#fff}@media (max-width:1024px){.u{width:90%;max-width:90%;padding-left:80px}.oc{grid-template-columns:1fr 1fr}.tc amp-img.uc{max-height:50px;float:left}}@media (max-width:768px){.dd{font-size:35px}.oc{grid-template-columns:1fr}.pc .sc{height:auto}.tc span.s{font-size:20px}.tc .vc input.od{padding:4px 10px;min-width:200px}.tc .vc input.pd{padding:4px 10px}}@media (max-width:600px){.kc,.kd,.mc,.md{position:relative}.u{padding-left:15px}.hc{padding-top:0}.ld{visibility:visible;opacity:1;transition:opacity .5s linear 0s}.md{right:25px;display:flex;left:unset;z-index:0}.kd{display:flex;align-items:center}.kd ul li{display:inline-block}:root:not(#a):not(#a):not(#a) .kd ul li{margin:10px 15px}#b ul{padding:80px 30px}.jd h2{font-size:1.4rem}}@media (max-width:480px){.tc .vc input.qd{min-width:170px;width:170px}.yc,.zc,.bd,.cd{padding-left:0;padding-right:0}.yc{font-size:15px}.md .ab{height:35px}}:root:not(#a):not(#a):not(#a):not(#a) .rd{display:inline-block}:root:not(#a):not(#a) .sd{border-bottom:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent}:root:not(#a):not(#a):not(#a):not(#a) .sd{display:inline-block}:root:not(#a):not(#a):not(#a):not(#a) amp-img>img{object-fit:inherit;object-position:inherit}:root:not(#a):not(#a):not(#a):not(#a) .td,[layout=fixed][width="0"][height="0"]{display:none}
	</style>
	<link rel="canonical" href="https://sysa.ml/create-your-own-url-shortener-in-blogspot-blog/">
	<script type="application/ld+json">
		{"image":"http://sysa.ml/assets/images/bloggerjs.webp","@type":"BlogPosting","publisher":{"@type":"Organization","logo":{"@type":"ImageObject","url":"http://sysa.ml/assets/images/logo.svg"},"name":"shoaiyb"},"headline":"Create Your Own Url Shortener In BlogSpot Blog","dateModified":"2021-04-07T00:00:00+00:00","datePublished":"2021-04-07T00:00:00+00:00","mainEntityOfPage":{"@type":"WebPage","@id":"http://sysa.ml/create-your-own-url-shortener-in-blogspot-blog/"},"author":{"@type":"Person","name":"shoaiyb"},"url":"http://sysa.ml/create-your-own-url-shortener-in-blogspot-blog/","description":"Today in this article I will show you how to make your own URL shortener using only JavaScript in Blogger (blogspot).","@context":"https://schema.org"}
	</script>
	<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="https://sysa.ml/assets/images/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://sysa.ml/assets/images/favicon-16x16.png">
	<link rel="icon" type="image/png" sizes="3500×3500" href="https://sysa.ml/assets/images/logo.png">
	<link rel="icon" type="image/svg+xml" sizes="any" href="https://sysa.ml/assets/images/logo.svg">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sen:400,700&amp;display=swap">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
	<style amp-boilerplate="">
		body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
	</style><noscript><style amp-boilerplate="">body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript></head>
<body class="">



	<div class="mc">
	</div>
	<div class="kc">
		<div class="jc"></div>
	</div>
	<div id="d" class="nc"></div>
	<nav id="b">
		<ul>
			<h3>Menu</h3>
			<li><a href="https://sysa.ml/">Home</a></li>
			<li><a href="https://sysa.ml/categories/#php">PHP</a></li>
			<li><a href="https://sysa.ml/categories/#WordPress">WordPress</a></li>

			<li><a href="https://sysa.ml/categories/#Blogging">Blogging</a></li>
			<li><a href="https://sysa.ml/categories/#Develop">Web Development</a></li>

			<li><a href="https://sysa.ml/tools/">Tools</a></li>
			<li><a href="https://sysa.ml/contact/">Contact Me</a></li>
			<li><a href="https://sysa.ml/policy/">Privacy Policy</a></li>
		</ul>
	</nav>
	<div class="md">
		<div class="qb tb cc">
			<i class="td"></i>
			<form class="ld yb" action="https://sysa.ml/create-your-own-url-shortener-in-blogspot-blog/" method="get" target="_top">
				<input type="text" class="ab ic" id="e" name="q" maxlength="255" value="" placeholder="Type and enter...">
				<div submit-error=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #F44336; clear: both;">Unable to submit Form</p></template></div>
				<div submit-success=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #009688; clear: both;">Form submitted successfully</p></template></div>
				<div submitting=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #607D8B; clear: both;">Submitting...</p></template></div>
			</form>
		</div>
	</div>
	<div id="f">
		<ul></ul>
	</div>


	<div class="hc">
		<div class="u">

			<a class="fb" href="https://sysa.ml/">
				<amp-img src="https://sysa.ml/assets/images/logo.svg" alt="shoaiyb sysa" width="80" height="80" layout="fixed" class="rd amp-wp-enforced-sizes"><noscript><img src="https://sysa.ml/assets/images/logo.svg" alt="shoaiyb sysa" width="80" height="80" class="rd"></noscript></amp-img>
			</a>


			<div class="">
				<div class="cd">

					<h1 class="dd">Create Your Own Url Shortener In BlogSpot Blog</h1>

					<div class="qb tb zb">
						<div>
							<amp-img class="qc sd amp-wp-enforced-sizes" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="50" height="50" layout="fixed"><noscript><img class="qc sd" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="50" height="50"></noscript></amp-img>
						</div>
						<div>
							Written by <a target="_blank" class="gc" href="https://sysa.ml/about/" rel="noopener noreferrer">sysa</a> on
							<span class="rc"><time class="rc" datetime="2021-04-07">07 Apr 2021</time></span>
						</div>
					</div>
				</div>


				<div class="ed">
					<amp-img class="lc fd rd amp-wp-enforced-sizes" src="https://sysa.ml/assets/images/bloggerjs.webp" alt="Create Your Own Url Shortener In BlogSpot Blog" width="1200" height="630" layout="intrinsic"><noscript><img class="lc fd rd" src="https://sysa.ml/assets/images/bloggerjs.webp" alt="Create Your Own Url Shortener In BlogSpot Blog" width="1200" height="630"></noscript></amp-img>
				</div>


				<div class="yc">

					<div class="zb bc t">
						<h3 class="fc">Summary</h3>
						<ul>
							<li><a href="#what-is-custom-url-shortener">What is Custom URL Shortener?</a></li>
							<li><a href="#how-custom-url-shortener-works">How Custom URL Shortener Works?</a></li>
							<li><a href="#how-to-make-your-own-url-shortener-with-javascript">How to Make Your Own URL Shortener with JavaScript?</a></li>
						</ul>
					</div>

					<h2 id="what-is-custom-url-shortener">What is Custom URL Shortener?</h2>
					<p>A custom URL shortener will allow you to create your own branded domain to redirect to different external pages as per your needs. <br> Today in this article, I will show you how to make your own URL shortener using only JavaScript in Blogger (blogspot).</p>
					<h2 id="how-custom-url-shortener-works">How Custom URL Shortener Works?</h2>
					<p>We will be using a script to create our own URL shortening service. <br> This script can also be termed as “Simple Redirects”. <br> Just like WordPress.org, you create links that will redirect you to external pages or domains. <br> Unlike Blogger Custom Redirects, which does not allows you to redirect to other domains, they only redirects to internal pages of your blog.</p>
					<p><strong>Example</strong>: <br> Default URL: https://sysa.ml/new-page/ <br> Custom Branded Short URL: https://sysa.ml/go/np or https://sysa.blogspot.com/go/np</p>
					<p>Take a look at the above example links to understand how this script will work. <br> If you will go to https://sysa.ml/go/np it will take you to the new page of shoaiyb sysa. <br> Similarly you can create unlimited short URLs and Redirects using this script.</p>
					<h2 id="how-to-make-your-own-url-shortener-with-javascript">How to Make Your Own URL Shortener with JavaScript?</h2>
					<p>Go to <code class="a d f hd">Blogger &gt;&gt; Template &gt;&gt; Edit HTML</code>. <br> Now in the template codes, search for <code class="a d f hd">&lt;/head&gt;</code> tag and just above it paste the following JavaScript code:</p>
					<div class="">
						<div class="">
							<div class="n"><pre class="b c e id"><code class="a hd"><span class="g k">&lt;</span>script language<span class="g k">=</span>’javascript’<span class="g k">&gt;</span>

<span class="g h">// @package SYSA.JS</span>
<span class="g h">// @author shoaiyb sysa</span>
<span class="g h">// @license SYSA License</span>

<span class="g h">//&lt;![CDATA[</span>
<span class="g l">var</span> key <span class="g k">=</span> window<span class="g i">.</span>location<span class="g i">.</span>href<span class="g i">.</span><span class="g m">split</span><span class="g i">(</span>“go<span class="g k">/</span>”<span class="g i">)</span><span class="g i">[</span><span class="g j">1</span><span class="g i">]</span><span class="g i">.</span><span class="g m">replace</span><span class="g i">(</span>“<span class="g k">/</span>”<span class="g i">,</span>””<span class="g i">)</span>
<span class="g l">var</span> urls<span class="g k">=</span><span class="g i">{</span>
‘fb’<span class="g k">:</span>’https<span class="g k">:</span><span class="g k">/</span><span class="g k">/</span>www<span class="g i">.</span>facebook<span class="g i">.</span>com<span class="g k">/</span>realshoaiyb’<span class="g i">,</span>
‘ig’<span class="g k">:</span>’https<span class="g k">:</span><span class="g k">/</span><span class="g k">/</span>www<span class="g i">.</span>instagram<span class="g i">.</span>com<span class="g k">/</span>sysa_shoaiyb’<span class="g i">,</span>
‘twitter’<span class="g k">:</span>”https<span class="g k">:</span><span class="g k">/</span><span class="g k">/</span>twitter<span class="g i">.</span>com<span class="g k">/</span>shoaiybsysa”<span class="g i">,</span>
<span class="g i">}</span>
<span class="g l">if</span><span class="g i">(</span>key<span class="g i">)</span><span class="g i">{</span>
<span class="g l">if</span><span class="g i">(</span>urls<span class="g i">[</span>key<span class="g i">]</span><span class="g i">)</span><span class="g i">{</span>
window<span class="g i">.</span>location<span class="g i">.</span>href<span class="g k">=</span>urls<span class="g i">[</span>key<span class="g i">]</span>
<span class="g i">}</span><span class="g l">else</span><span class="g i">{</span>
document<span class="g i">.</span><span class="g m">write</span><span class="g i">(</span>“‘”<span class="g k">+</span>key<span class="g k">+</span>”‘ not found <span class="g k">:</span><span class="g i">(</span>“<span class="g i">)</span><span class="g i">;</span>
<span class="g i">}</span>
<span class="g i">}</span>
<span class="g h">//]]&gt;</span>
<span class="g k">&lt;</span><span class="g k">/</span>script<span class="g k">&gt;</span>
</code></pre>
								<div class="o">
									<div class="p"><span>JavaScript</span></div>
									<div class="p"><button>Copy</button></div>
								</div>
							</div>
						</div>
					</div>
					<p><strong>Customization</strong>: <br> Now to create short URLs you can simple make changes to the above code. <br> For example, in the above code search for this:</p>
					<div class="">
						<div class="">
							<div class="n"><pre class="b c e id"><code class="a hd">‘fb’<span class="g k">:</span>’https<span class="g k">:</span><span class="g k">/</span><span class="g k">/</span>www<span class="g i">.</span>facebook<span class="g i">.</span>com<span class="g k">/</span>realshoaiyb’<span class="g i">,</span>
</code></pre>
								<div class="o">
									<div class="p"><span>JavaScript</span></div>
									<div class="p"><button>Copy</button></div>
								</div>
							</div>
						</div>
					</div>
					<p>In the above code <code class="a d f hd">fb</code> is the keyword and https://www.facebook.com/realshoaiyb is the targeted website or webpage. <br> If we translated the above code it means that when you’ll visit https://sysa.ml/go/fb it will take you to https://www.facebook.com/realshoaiyb.</p>
					<p>You can add more short URLs as well, for example if you want to create a short link for you Github profile then the above code will look like this:</p>
					<div class="">
						<div class="">
							<div class="n"><pre class="b c e id"><code class="a hd"><span class="g k">&lt;</span>script language<span class="g k">=</span>’javascript’<span class="g k">&gt;</span>

<span class="g h">// @package SYSA.JS</span>
<span class="g h">// @author shoaiyb sysa</span>
<span class="g h">// @license SYSA License</span>

<span class="g h">//&lt;![CDATA[</span>
<span class="g l">var</span> key <span class="g k">=</span> window<span class="g i">.</span>location<span class="g i">.</span>href<span class="g i">.</span><span class="g m">split</span><span class="g i">(</span>“go<span class="g k">/</span>”<span class="g i">)</span><span class="g i">[</span><span class="g j">1</span><span class="g i">]</span><span class="g i">.</span><span class="g m">replace</span><span class="g i">(</span>“<span class="g k">/</span>”<span class="g i">,</span>””<span class="g i">)</span>
<span class="g l">var</span> urls<span class="g k">=</span><span class="g i">{</span>
‘fb’<span class="g k">:</span>’https<span class="g k">:</span><span class="g k">/</span><span class="g k">/</span>www<span class="g i">.</span>facebook<span class="g i">.</span>com<span class="g k">/</span>realshoaiyb’<span class="g i">,</span>
‘ig’<span class="g k">:</span>’https<span class="g k">:</span><span class="g k">/</span><span class="g k">/</span>www<span class="g i">.</span>instagram<span class="g i">.</span>com<span class="g k">/</span>sysa_shoaiyb’<span class="g i">,</span>
‘twitter’<span class="g k">:</span>”https<span class="g k">:</span><span class="g k">/</span><span class="g k">/</span>twitter<span class="g i">.</span>com<span class="g k">/</span>shoaiybsysa”<span class="g i">,</span>
‘gh’<span class="g k">:</span>”https<span class="g k">:</span><span class="g k">/</span><span class="g k">/</span>github<span class="g i">.</span>com<span class="g k">/</span>shoaiyb”<span class="g i">,</span>
<span class="g i">}</span>
<span class="g l">if</span><span class="g i">(</span>key<span class="g i">)</span><span class="g i">{</span>
<span class="g l">if</span><span class="g i">(</span>urls<span class="g i">[</span>key<span class="g i">]</span><span class="g i">)</span><span class="g i">{</span>
window<span class="g i">.</span>location<span class="g i">.</span>href<span class="g k">=</span>urls<span class="g i">[</span>key<span class="g i">]</span>
<span class="g i">}</span><span class="g l">else</span><span class="g i">{</span>
document<span class="g i">.</span><span class="g m">write</span><span class="g i">(</span>“‘”<span class="g k">+</span>key<span class="g k">+</span>”‘ not found <span class="g k">:</span><span class="g i">(</span>“<span class="g i">)</span><span class="g i">;</span>
<span class="g i">}</span>
<span class="g i">}</span>
<span class="g h">//]]&gt;</span>
<span class="g k">&lt;</span><span class="g k">/</span>script<span class="g k">&gt;</span>
</code></pre>
								<div class="o">
									<div class="p"><span>JavaScript</span></div>
									<div class="p"><button>Copy</button></div>
								</div>
							</div>
						</div>
					</div>
					<p>After customizing the script as per your needs, press the “Save Template” button on the top of your screen.</p>
				</div>



				<div class="qb zc tb">
					<div class="w ac dc">
						<amp-img class="qc sd amp-wp-enforced-sizes" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="70" height="70" layout="fixed"><noscript><img class="qc sd" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="70" height="70"></noscript></amp-img>
					</div>
					<div class="y">
						<a target="_blank" class="gc s" href="https://sysa.ml/about/" rel="noopener noreferrer">About sysa</a> <a target="_blank" href="https://twitter.com/shoaiybsysa" class="eb" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
						<span class="gd pb xb">I'm shoaiyb sysa part time developer, blogger and a youtuber, I'm self taught backend and frontend developer, I'm here just to welcome and help those newbies on how they're going to get started in this online world.</span>
					</div>
				</div>


				<div class="bd">
					<button class="bb cb">Load Comments</button>
					<div id="c" class="td"></div>
				</div>

				<div class="kd">
					<p>
						Share
					</p>
					<ul>
						<li class="wb vb">
							<a target="_blank" href="https://twitter.com/intent/tweet?text=Create%20Your%20Own%20Url%20Shortener%20In%20BlogSpot%20Blog&amp;url=http://sysa.ml/create-your-own-url-shortener-in-blogspot-blog/" rel="noopener noreferrer">
								<i class="fab fa-twitter"></i>
							</a>
						</li>
						<li class="wb vb">
							<a target="_blank" href="https://facebook.com/sharer.php?u=http://sysa.ml/create-your-own-url-shortener-in-blogspot-blog/" rel="noopener noreferrer">
								<i class="fab fa-facebook-f"></i>
							</a>
						</li>
						<li class="wb vb">
							<a target="_blank" href="mailto:?subject=Create Your Own URL Shortener In Blogspot Blog&amp;body=http://sysa.ml/create-your-own-url-shortener-in-blogspot-blog/" onclick="window.open(this.href, 'width=550,height=435');return false;">
								<i class="fa fa-paper-plane"></i>
							</a>
						</li>
						<li class="wb vb">
							<a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://sysa.ml/create-your-own-url-shortener-in-blogspot-blog/" rel="noopener noreferrer">
								<i class="fab fa-linkedin-in"></i>
							</a>
						</li>

					</ul>
				</div>


				<div class="jd">
					<h2 class="dc bc">Explore more like this</h2>
					<div class="qb sb tb">

						<a class="lb mb ec" href="https://sysa.ml/categories#Blogspot">Blogspot</a>
						<a class="lb mb ec" href="https://sysa.ml/categories#JavaScript">JavaScript</a>

					</div>
					<div class="oc">

						<div class="pc">
							<div class="gb ub">
								<div class="">
									<a href="https://sysa.ml/best-free-amp-blogspot-templates/">
										<amp-img class="sc rd amp-wp-enforced-sizes" src="https://sysa.ml/assets/images/amp-blogspot.webp" alt="Best Free Amp Blogspot Templates 2022" width="1200" height="630" layout="intrinsic"><noscript><img class="sc rd" src="https://sysa.ml/assets/images/amp-blogspot.webp" alt="Best Free Amp Blogspot Templates 2022" width="1200" height="630"></noscript></amp-img>
									</a>
								</div>
								<div class="hb">
									<h2 class="ib">
<a class="gc" href="https://sysa.ml/best-free-amp-blogspot-templates/">Best Free Amp Blogspot Templates 2022</a>
</h2>
									<h4 class="jb">Vletters
</h4>
								</div>
								<div class="kb nb">
									<div class="">
										<span class="">
<amp-img class="qc rd amp-wp-enforced-sizes" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="40" height="40" layout="fixed"><noscript><img class="qc rd" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="40" height="40"></noscript></amp-img></span>
										<span class="">
<span class=""><a target="_blank" href="https://sysa.ml/about/" rel="noopener noreferrer">sysa</a></span>
										<span class="rc">04 Apr 2021</span>
										</span>
										<div class="ob"></div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>

			<div class="tc dc">
				<span class="s"><amp-img src="https://sysa.ml/assets/images/logo.svg" class="uc amp-wp-enforced-sizes" alt="shoaiyb sysa" width="50" height="50" layout="fixed"><noscript><img src="https://sysa.ml/assets/images/logo.svg" class="uc" alt="shoaiyb sysa" width="50" height="50"></noscript></amp-img>   Never miss a new <b>post</b>, subscribe to my newsletter</span>
				<form method="post" name="mc-embedded-subscribe-form" class="" target="_blank" novalidate="" action-xhr="https://sysa.us1.list-manage.com/subscribe/post?u=470d027d272e559f32772d979&amp;id=f08439ffdc&amp;_wp_amp_action_xhr_converted=1">
					<div class="vc rb">
						<input type="email" placeholder="Your e-mail" name="EMAIL" class="wc od qd" id="g" autocomplete="on" required=""><input type="submit" value="Subscribe" name="subscribe" class="q r xc pd"></div>
					<div submit-error=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #F44336; clear: both;">Unable to submit Form</p></template></div>
					<div submit-success=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #009688; clear: both;">Form submitted successfully</p></template></div>
					<div submitting=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #607D8B; clear: both;">Submitting...</p></template></div>
				</form>
			</div>
		</div>

		<footer class="nd">
			<div class="u">
				<div class="v">
					<div class="x z dc">
						© copyright 2021 | <a href="https://sysa.ml/">shoaiyb sysa</a>
					</div>
				</div>
			</div>
		</footer>
	</div>







	<div>


	</div>
</body>
</html>
