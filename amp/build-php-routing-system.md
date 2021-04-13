---
layout: amp
permalink: /amp/build-php-routing-system/
---
<html lang="en" amp="">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="generator" content="Jekyll v3.9.0">
	<meta property="og:title" content="Building A PHP Routing System">
	<meta name="author" content="shoaiyb">
	<meta property="og:locale" content="en_US">
	<meta name="description" content="Routing is the process of parsing a URI and determining the appropriate action to take.">
	<meta property="og:description" content="Routing is the process of parsing a URI and determining the appropriate action to take.">
	<meta property="og:url" content="http://sysa.ml/build-php-routing-system/">
	<meta property="og:site_name" content="shoaiyb sysa">
	<meta property="og:image" content="http://sysa.ml/assets/images/php-routing-system.webp">
	<meta property="og:type" content="article">
	<meta property="article:published_time" content="2021-03-25T00:00:00+00:00">
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:image" content="http://sysa.ml/assets/images/php-routing-system.webp">
	<meta property="twitter:title" content="Building A PHP Routing System">
	<meta property="og:image" content="https://sysa.ml/assets/images/sysa.png">
	<meta property="twitter:image" content="https://sysa.ml/assets/images/sysa.png">
	<title>Building A PHP Routing System | shoaiyb sysa</title>
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
		code.a,pre.b{color:#000;background:0 0;text-shadow:#fff 0 1px;font-family:Consolas,Monaco,andale mono,ubuntu mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;overflow-wrap:normal;line-height:1.5;tab-size:4;hyphens:none}pre.c{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code.d,pre.e{background:#f5f2f0}:not(pre)>code.f{padding:.1em;border-radius:.3em;white-space:normal}div.g{position:relative}div.g>.h{position:absolute;top:.3em;right:.2em;transition:opacity .3s ease-in-out 0s;opacity:0}div.g:hover>.h{opacity:1}div.g>.h .i{display:inline-block}div.g>.h button{background:0 0;border:0;color:inherit;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch:inherit;font-size:inherit;font-family:inherit;line-height:normal;overflow:visible;padding:0;user-select:none}div.g>.h button,div.g>.h span{color:#bbb;font-size:.8em;padding:0 .5em;background:hsla(0,0%,87.8%,.2);box-shadow:0 2px 0 0 rgba(0,0,0,.2);border-radius:.5em}div.g>.h button:focus,div.g>.h button:hover,div.g>.h span:focus,div.g>.h span:hover{color:inherit;text-decoration:none}:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#40ffdc;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#40ffdc;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#111;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;text-size-adjust:100%;-webkit-tap-highlight-color:transparent}footer,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}h1,h2,h3,h4{margin-top:0;margin-bottom:.5rem}ol,p,ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}b{font-weight:bolder}a{color:#40ffdc;text-decoration:none;background-color:transparent}a:hover{color:#00f3c6;text-decoration:underline}code,pre{font-family:SFMono-Regular,Menlo,Monaco,Consolas,liberation mono,courier new,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}amp-img{vertical-align:middle;border-style:none}button{border-radius:0}button:focus{outline:5px auto -webkit-focus-ring-color}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;overflow:visible}button{text-transform:none}.j,button{appearance:button}.k:not(:disabled),button:not(:disabled){cursor:pointer}::-webkit-file-upload-button{font:inherit;appearance:button}template{display:none}.l,h1,h2,h3,h4{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.75rem}.l,h4{font-size:1.5rem}.m{font-size:1.25rem;font-weight:300}code{color:#e83e8c;overflow-wrap:break-word}code,pre{font-size:87.5%}pre{display:block;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.n{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.o{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.p,.q,.r,.s{position:relative;width:100%;padding-right:15px;padding-left:15px}.t{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0;transition:border-color .15s ease-in-out 0s,box-shadow .15s ease-in-out 0s}@media (prefers-reduced-motion:reduce){.t{transition:none 0s ease 0s}}.t:focus{color:#495057;background-color:#fff;border-color:#c0fff3;outline:0;box-shadow:0 0 0 .2rem rgba(64,255,220,.25)}.t::placeholder{color:#6c757d;opacity:1}.u{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:0;transition:color .15s ease-in-out 0s,background-color .15s ease-in-out 0s,border-color .15s ease-in-out 0s,box-shadow .15s ease-in-out 0s}@media (prefers-reduced-motion:reduce){.u{transition:none 0s ease 0s}}.u:hover{color:#212529;text-decoration:none}.u:focus{outline:0;box-shadow:0 0 0 .2rem rgba(64,255,220,.25)}.v{color:#fff;background-color:#111;border-color:#111}.v:focus,.v:hover{color:#fff;background-color:#000;border-color:#000}.v:focus{box-shadow:0 0 0 .2rem rgba(53,53,53,.5)}.v:not(:disabled):not(.w):active{color:#fff;background-color:#000;border-color:#000}.v:not(:disabled):not(.w):active:focus{box-shadow:0 0 0 .2rem rgba(53,53,53,.5)}.x{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:0}.y{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.y:focus,.y:hover{text-decoration:none}.z{position:relative;display:flex;flex-direction:column;min-width:0;overflow-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(17,17,17,.125)}.ab{flex:1 1 auto;min-height:1px;padding:1.25rem}.bb{margin-bottom:.75rem}.cb:last-child{margin-bottom:0}.db{padding:.75rem 1.25rem;background-color:rgba(17,17,17,.03);border-top:1px solid rgba(17,17,17,.125)}.eb{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;transition:color .15s ease-in-out 0s,background-color .15s ease-in-out 0s,border-color .15s ease-in-out 0s,box-shadow .15s ease-in-out 0s}@media (prefers-reduced-motion:reduce){.eb{transition:none 0s ease 0s}}a.eb:focus,a.eb:hover{text-decoration:none}.fb{color:#212529;background-color:#40ffdc}a.fb:focus,a.fb:hover{color:#212529;background-color:#0dffd3}a.fb:focus{outline:0;box-shadow:0 0 0 .2rem rgba(64,255,220,.5)}:root:not(#a):not(#a):not(#a) .gb{background-color:#fff}.hb:after{display:block;clear:both;content:""}:root:not(#a):not(#a):not(#a) .ib{display:block}:root:not(#a):not(#a):not(#a) .jb{display:flex}:root:not(#a):not(#a):not(#a) .kb{display:inline-flex}:root:not(#a):not(#a):not(#a) .lb{justify-content:center}:root:not(#a):not(#a):not(#a) .mb{align-items:center}:root:not(#a):not(#a):not(#a) .nb{height:100%}:root:not(#a):not(#a):not(#a) .ob{margin-right:.25rem}:root:not(#a):not(#a):not(#a) .pb{margin-left:.25rem}:root:not(#a):not(#a):not(#a) .qb{margin-top:.5rem}:root:not(#a):not(#a):not(#a) .rb{margin-left:1rem}:root:not(#a):not(#a):not(#a) .sb{margin-top:1.5rem}:root:not(#a):not(#a):not(#a) .tb{margin-right:1.5rem}:root:not(#a):not(#a):not(#a) .ub{margin-bottom:1.5rem}:root:not(#a):not(#a):not(#a) .vb{margin-left:auto}:root:not(#a):not(#a):not(#a) .wb{text-align:center}:root:not(#a):not(#a):not(#a) .xb{text-transform:capitalize}:root:not(#a):not(#a):not(#a) .yb{font-weight:700}:root:not(#a):not(#a):not(#a) .zb{color:#111}:root:not(#a):not(#a):not(#a) a.zb:focus,:root:not(#a):not(#a):not(#a) a.zb:hover{color:#000}body,button,input{font-family:Sen}body{line-height:1.7;background:#f4f4f4}a{color:#00c5a1}amp-img{max-width:100%;height:auto}h1,h2,h3,h4{font-weight:700}.ac{padding-top:50px}.bc{border-radius:40px}.u{min-width:180px}#b,.z,.z:hover,.cc,.cc:after,.cc:before,.dc,.ac,a,a:hover,amp-img,amp-img:hover,body{transition:all .3s ease-in-out 0s}@keyframes a{0%{opacity:0;transform:translateY(20%)}to{opacity:1;transform:translateY(0)}}.ec{animation:a .7s ease-out 0s 1 normal forwards running}.y amp-img{max-height:80px;margin-bottom:40px;margin-top:40px}.fc{position:fixed;left:0;top:0;width:80px;height:100%;border-right:1px solid rgba(0,0,0,.07);z-index:1022;background:#fff}.dc{position:fixed;left:15px;top:15px;width:50px;height:50px;cursor:pointer;border-radius:30px;z-index:1026}.dc .cc{width:18px;height:2px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:1px}.dc .cc:after,.dc .cc:before{content:"";position:absolute;width:18px;height:2px;background:#292c30;border-radius:1px}.dc .cc:before{transform:rotate(0deg) translateY(-5px)}.dc .cc:after{transform:rotate(0deg) translateY(5px)}.gc{display:block;width:100%;background:transparent;z-index:-1;animation:animate2 .3s ease 0s 1 normal none running}#b,.gc{position:fixed;top:0;left:0;height:100%}#b{width:420px;background:#fff;padding:0;margin:0;transform:translate(-100%);z-index:1022}#b ul{float:left;width:100%;padding:80px 30px 80px 100px}#b ul h3{margin-bottom:30px}#b ul li{list-style:none;width:100%}#b ul li a{width:100%;display:inline-block;padding:2vh 0;line-height:20px;text-decoration:none;color:#8e9aa7;font-weight:400;font-size:18px;position:relative}.hc{width:auto;margin:50px auto;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;gap:30px}.ic{color:#333;padding:0;display:flex;align-items:center}.ic .jc{width:40px;border-radius:50%;margin-right:7px}.ic .z{border:0}.ic .z:hover .bb a{background-size:100% 100%}.ic .bb{font-weight:700;font-size:22px;line-height:1.4}.ic .bb a{background-image:linear-gradient(transparent 89%,#40ffdc 0);background-repeat:no-repeat;background-size:0 100%;transition:background-size .6s ease 0s;position:relative}.ic .bb a:hover{text-decoration:none}.ic .cb{font-weight:400;font-size:16px;line-height:1.8;margin-top:15px}.ic .db{font-size:14px;border-top:0;padding:1rem 1.25rem}.ic .db a{color:inherit;font-weight:700}.ic .kc{float:right;margin-top:10px}.ic .lc{object-fit:cover;height:240px;width:100%;object-position:center top}.mc{margin-top:120px}.mc amp-img.nc{max-height:70px}.mc input{border:1px solid transparent}.mc .oc{border:1px solid;border-radius:2px;display:inline-block}.mc .oc input.pc{padding:4px 10px;min-width:250px}.mc .oc input.qc{color:#222;padding:4px 20px;margin-left:-5px;background:#40ffdc;border-left:1px solid;font-weight:700}.mc form{margin-top:30px}.rc,.sc,.tc,.uc{max-width:740px;padding-left:20px;padding-right:20px;margin-left:auto;margin-right:auto}.vc{font-size:50px;font-weight:700;line-height:1.2}.wc{width:940px;max-width:100%;text-align:center;margin:50px auto}.xc{box-shadow:0 7px 50px 0 rgba(84,110,122,.15)}.uc .jc{width:50px;border-radius:50%;margin-right:10px;border:2px solid #00d9b1;padding:2px}.sc{margin-top:50px;margin-bottom:50px}.sc .yc{font-size:16px}.sc .jc{width:70px;border-radius:50%;border:2px solid #00d9b1;padding:2px}.rc{font-size:18px}.rc p{margin-top:30px;margin-bottom:30px}.rc code{font-size:15px;color:#94918d}.rc code.zc,.rc pre.bd{font-size:15px;margin-bottom:30px;background:#fff;color:inherit}.rc div.g>.h button,.rc div.g>.h span{margin-right:2px;margin-left:2px;box-shadow:0 1px 0 0 rgba(0,0,0,.1)}.tc{margin-top:30px;margin-bottom:60px}.tc #c{display:none;margin-top:60px}.cd{margin-top:120px}.cd .eb{font-size:15px;padding:5px 7px;display:inline-block;margin:0 3px}.dd{position:fixed;left:15px;bottom:40%;z-index:1026;text-align:center}.dd ul{list-style:none;padding-left:0}.dd ul li{margin:15px 0}.dd ul li a{color:#111}.ed{visibility:hidden;opacity:0;transition:opacity .5s linear 0s}.fd{position:fixed;left:30px;bottom:25px;z-index:1026}.gd{margin-top:120px;padding:30px;border-top:1px solid #e9ecef;font-size:15px;background:#fff}@media (max-width:1024px){.n{width:90%;max-width:90%;padding-left:80px}.hc{grid-template-columns:1fr 1fr}.mc amp-img.nc{max-height:50px;float:left}}@media (max-width:768px){.vc{font-size:35px}.hc{grid-template-columns:1fr}.ic .lc{height:auto}.mc span.l{font-size:20px}.mc .oc input.hd{padding:4px 10px;min-width:200px}.mc .oc input.id{padding:4px 10px}}@media (max-width:600px){.dc,.dd,.fc,.fd{position:relative}.n{padding-left:15px}.ac{padding-top:0}.ed{visibility:visible;opacity:1;transition:opacity .5s linear 0s}.fd{right:25px;display:flex;left:unset;z-index:0}.dd{display:flex;align-items:center}.dd ul li{display:inline-block}:root:not(#a):not(#a):not(#a) .dd ul li{margin:10px 15px}#b ul{padding:80px 30px}.cd h2{font-size:1.4rem}}@media (max-width:480px){.mc .oc input.jd{min-width:170px;width:170px}.rc,.sc,.tc,.uc{padding-left:0;padding-right:0}.rc{font-size:15px}.fd .t{height:35px}}:root:not(#a):not(#a):not(#a):not(#a) .kd{display:inline-block}:root:not(#a):not(#a) .ld{border-bottom:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent}:root:not(#a):not(#a):not(#a):not(#a) .ld{display:inline-block}:root:not(#a):not(#a):not(#a):not(#a) amp-img>img{object-fit:inherit;object-position:inherit}:root:not(#a):not(#a):not(#a):not(#a) .md,[layout=fixed][width="0"][height="0"]{display:none}
	</style>
	<link rel="canonical" href="https://sysa.ml/build-php-routing-system/">
	<script type="application/ld+json">
		{"image":"http://sysa.ml/assets/images/php-routing-system.webp","@type":"BlogPosting","publisher":{"@type":"Organization","logo":{"@type":"ImageObject","url":"http://sysa.ml/assets/images/logo.svg"},"name":"shoaiyb"},"headline":"Building A PHP Routing System","dateModified":"2021-03-25T00:00:00+00:00","datePublished":"2021-03-25T00:00:00+00:00","mainEntityOfPage":{"@type":"WebPage","@id":"http://sysa.ml/build-php-routing-system/"},"author":{"@type":"Person","name":"shoaiyb"},"url":"http://sysa.ml/build-php-routing-system/","description":"Routing is the process of parsing a URI and determining the appropriate action to take.","@context":"https://schema.org"}
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



	<div class="fc">
	</div>
	<div class="dc">
		<div class="cc"></div>
	</div>
	<div id="d" class="gc"></div>
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
	<div class="fd">
		<div class="jb mb vb">
			<i class="md"></i>
			<form class="ed rb" action="https://sysa.ml/build-php-routing-system/" method="get" target="_top">
				<input type="text" class="t bc" id="e" name="q" maxlength="255" value="" placeholder="Type and enter...">
				<div submit-error=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #F44336; clear: both;">Unable to submit Form</p></template></div>
				<div submit-success=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #009688; clear: both;">Form submitted successfully</p></template></div>
				<div submitting=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #607D8B; clear: both;">Submitting...</p></template></div>
			</form>
		</div>
	</div>
	<div id="f">
		<ul></ul>
	</div>


	<div class="ac">
		<div class="n">

			<a class="y" href="https://sysa.ml/">
				<amp-img src="https://sysa.ml/assets/images/logo.svg" alt="shoaiyb sysa" width="80" height="80" layout="fixed" class="kd amp-wp-enforced-sizes"><noscript><img src="https://sysa.ml/assets/images/logo.svg" alt="shoaiyb sysa" width="80" height="80" class="kd"></noscript></amp-img>
			</a>


			<div class="">
				<div class="uc">

					<h1 class="vc">Building A PHP Routing System</h1>

					<div class="jb mb sb">
						<div>
							<amp-img class="jc ld amp-wp-enforced-sizes" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="50" height="50" layout="fixed"><noscript><img class="jc ld" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="50" height="50"></noscript></amp-img>
						</div>
						<div>
							Written by <a target="_blank" class="zb" href="https://sysa.ml/about/" rel="noopener noreferrer">sysa</a> on
							<span class="kc"><time class="kc" datetime="2021-03-25">25 Mar 2021</time></span>
						</div>
					</div>
				</div>


				<div class="wc">
					<amp-img class="ec xc kd amp-wp-enforced-sizes" src="https://sysa.ml/assets/images/php-routing-system.webp" alt="Building A PHP Routing System" width="500" height="333" layout="intrinsic"><noscript><img class="ec xc kd" src="https://sysa.ml/assets/images/php-routing-system.webp" alt="Building A PHP Routing System" width="500" height="333"></noscript></amp-img>
				</div>


				<div class="rc">

					<div class="sb ub m">
						<h3 class="yb">Summary</h3>
						<ul>
							<li><a href="#what-is-routing">What is Routing?</a></li>
							<li><a href="#example-from-laravel">Example from Laravel</a></li>
							<li><a href="#how-routers-work">How Routers Work</a></li>
							<li>
								<a href="#a-very-simple-php-router">A Very Simple PHP Router</a>
								<ul>
									<li><a href="#run-the-code">Run The Code</a></li>
								</ul>
							</li>
							<li><a href="#conclusion">Conclusion</a></li>
						</ul>
					</div>

					<h2 id="what-is-routing">What is Routing?</h2>
					<p>Routing is the process of parsing a URI and determining the appropriate action to take.</p>
					<p>For example, consider the following URI: <br><code class="a d f zc">http://example.com/login</code></p>
					<p>How does a request like the one above result in a response to the user? <br> Let’s break it down:</p>
					<ol>
						<li>The request is received by the application.</li>
						<li>The application breaks down the request into its components. <br> Things like: the method (ex: GET), host, path, etc.</li>
						<li>The application looks for a defined route that matches this request.</li>
						<li>Once found, it takes the defined action and returns a response.</li>
					</ol>
					<h2 id="example-from-laravel">Example from Laravel</h2>
					<p>For a real-world example, here’s one way the above example could be implemented in Laravel.</p>
					<div class="">
						<div class="">
							<div class="g"><pre class="b c e bd"><code class="a zc">Route::get('/login', function() {
    return view('login');
});
</code></pre>
								<div class="h">
									<div class="i"><span>PHP</span></div>
									<div class="i"><button>Copy</button></div>
								</div>
							</div>
						</div>
					</div>
					<p>We define a GET route for the /login URI. <br> When that route is requested we return a response – in this case, HTML for the login page.</p>
					<h2 id="how-routers-work">How Routers Work</h2>
					<p>There are a number of routers in the PHP ecosystem. <br> They range from the more simplistic to feature-packed behemoths. <br> Although they differ in size and complexity, they generally employ the same fundamental steps: parse the request, match the pattern, run some code, return a response.</p>
					<p>The <a href="https://github.com/symfony/routing" target="_blank" rel="nofollow noreferrer">Symfony router</a> (probably the most widely used PHP router) does this.</p>
					<p>As does <a href="https://github.com/bramus/router" target="_blank" rel="nofollow noreferrer">this one</a>.</p>
					<p>And <a href="https://github.com/nikic/FastRoute" target="_blank" rel="nofollow noreferrer">this one</a>.</p>
					<h2 id="a-very-simple-php-router">A Very Simple PHP Router</h2>
					<p>To demonstrate these concepts let’s create a stupid simple, not at all useful, PHP router.</p>
					<div class="">
						<div class="">
							<div class="g"><pre class="b c e bd"><code class="a zc">&lt;?php
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
        $this-&gt;request = basename($request['REQUEST_URI']);
    }
 
    /**
     * Add a route and callback to our $routes array.
     *
     * @param string   $uri
     * @param Callable $fn
     */
    public function addRoute(string $uri, \Closure $fn) : void
    {
        $this-&gt;routes[$uri] = $fn;
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
        return array_key_exists($uri, $this-&gt;routes);
    }
 
    /**
     * Run the router.
     *
     * @return mixed
     */
    public function run()
    {
        if($this-&gt;hasRoute($this-&gt;request)) {
            $this-&gt;routes[$this-&gt;request]-&gt;call($this);
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
$router-&gt;addRoute('hello', function() {
    echo 'Well, hello there!!';
});
 
/**
 * Run it!
 */
$router-&gt;run();
</code></pre>
								<div class="h">
									<div class="i"><span>PHP</span></div>
									<div class="i"><button>Copy</button></div>
								</div>
							</div>
						</div>
					</div>
					<h3 id="run-the-code">Run The Code</h3>
					<ol>
						<li>Save this code locally as index.php.</li>
						<li>In your terminal navigate to the directory where you saved the script.</li>
						<li>Start the built-in PHP web server: php -S localhost:1234</li>
						<li>In your browser go to: <code class="a d f zc">http://localhost:1234/hello</code>
						</li>
					</ol>
					<h2 id="conclusion">Conclusion</h2>
					<p>I’ve touched on the very basics of routing, shared some routing examples from the PHP world, and built a extremely simple router.</p>
					<p>One last thing, be sure to signup for my newsletter! Each month I’ll send you a great email filled with updates, great links, tips &amp; tricks, and other non-dev randomness.</p>
				</div>



				<div class="jb sc mb">
					<div class="p tb wb">
						<amp-img class="jc ld amp-wp-enforced-sizes" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="70" height="70" layout="fixed"><noscript><img class="jc ld" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="70" height="70"></noscript></amp-img>
					</div>
					<div class="r">
						<a target="_blank" class="zb l" href="https://sysa.ml/about/" rel="noopener noreferrer">About sysa</a> <a target="_blank" href="https://twitter.com/shoaiybsysa" class="x" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
						<span class="yc ib qb">I'm shoaiyb sysa part time developer, blogger and a youtuber, I'm self taught backend and frontend developer, I'm here just to welcome and help those newbies on how they're going to get started in this online world.</span>
					</div>
				</div>


				<div class="tc">
					<button class="u v">Load Comments</button>
					<div id="c" class="md"></div>
				</div>

				<div class="dd">
					<p>
						Share
					</p>
					<ul>
						<li class="pb ob">
							<a target="_blank" href="https://twitter.com/intent/tweet?text=Building%20A%20PHP%20Routing%20System&amp;url=http://sysa.ml/build-php-routing-system/" rel="noopener noreferrer">
								<i class="fab fa-twitter"></i>
							</a>
						</li>
						<li class="pb ob">
							<a target="_blank" href="https://facebook.com/sharer.php?u=http://sysa.ml/build-php-routing-system/" rel="noopener noreferrer">
								<i class="fab fa-facebook-f"></i>
							</a>
						</li>
						<li class="pb ob">
							<a target="_blank" href="mailto:?subject=Building A PHP Routing System&amp;body=http://sysa.ml/build-php-routing-system/" onclick="window.open(this.href, 'width=550,height=435');return false;">
								<i class="fa fa-paper-plane"></i>
							</a>
						</li>
						<li class="pb ob">
							<a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://sysa.ml/build-php-routing-system/" rel="noopener noreferrer">
								<i class="fab fa-linkedin-in"></i>
							</a>
						</li>

					</ul>
				</div>


				<div class="cd">
					<h2 class="wb ub">Explore more like this</h2>
					<div class="jb lb mb">

						<a class="eb fb xb" href="https://sysa.ml/categories#Beginner">Beginner</a>
						<a class="eb fb xb" href="https://sysa.ml/categories#Develop">Develop</a>
						<a class="eb fb xb" href="https://sysa.ml/categories#PHP">PHP</a>

					</div>
					<div class="hc">

						<div class="ic">
							<div class="z nb">
								<div class="">
									<a href="https://sysa.ml/sending-email-using-gmail-smtp/">
										<amp-img class="lc kd amp-wp-enforced-sizes" src="https://sysa.ml/assets/images/gmail-smtp.webp" alt="Sending Emails Using Gmail SMTP" width="1280" height="768" layout="intrinsic"><noscript><img class="lc kd" src="https://sysa.ml/assets/images/gmail-smtp.webp" alt="Sending Emails Using Gmail SMTP" width="1280" height="768"></noscript></amp-img>
									</a>
								</div>
								<div class="ab">
									<h2 class="bb">
<a class="zb" href="https://sysa.ml/sending-email-using-gmail-smtp/">Sending Emails Using Gmail SMTP</a>
</h2>
									<h4 class="cb">It is possible to add any ImprovMX alias as a sending email on Gmail, Free and reliable.
It only takes a minute to setup.
Sending emails using Gmail SMTP
</h4>
								</div>
								<div class="db gb">
									<div class="">
										<span class="">
<amp-img class="jc kd amp-wp-enforced-sizes" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="40" height="40" layout="fixed"><noscript><img class="jc kd" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="40" height="40"></noscript></amp-img></span>
										<span class="">
<span class=""><a target="_blank" href="https://sysa.ml/about/" rel="noopener noreferrer">sysa</a></span>
										<span class="kc">10 Apr 2021</span>
										</span>
										<div class="hb"></div>
									</div>
								</div>
							</div>
						</div>


						<div class="ic">
							<div class="z nb">
								<div class="">
									<a href="https://sysa.ml/increase-wordpress-speed/">
										<amp-img class="lc kd amp-wp-enforced-sizes" src="https://sysa.ml/assets/images/wordpress-seo.webp" alt="Increase WordPress Speed" width="1280" height="720" layout="intrinsic"><noscript><img class="lc kd" src="https://sysa.ml/assets/images/wordpress-seo.webp" alt="Increase WordPress Speed" width="1280" height="720"></noscript></amp-img>
									</a>
								</div>
								<div class="ab">
									<h2 class="bb">
<a class="zb" href="https://sysa.ml/increase-wordpress-speed/">Increase WordPress Speed</a>
</h2>
									<h4 class="cb">Speed is an aspect of a website’s performance that Google truly values. So much so that it ranks websites with faster site speeds over slower ones.
</h4>
								</div>
								<div class="db gb">
									<div class="">
										<span class="">
<amp-img class="jc kd amp-wp-enforced-sizes" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="40" height="40" layout="fixed"><noscript><img class="jc kd" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="40" height="40"></noscript></amp-img></span>
										<span class="">
<span class=""><a target="_blank" href="https://sysa.ml/about/" rel="noopener noreferrer">sysa</a></span>
										<span class="kc">09 Apr 2021</span>
										</span>
										<div class="hb"></div>
									</div>
								</div>
							</div>
						</div>


						<div class="ic">
							<div class="z nb">
								<div class="">
									<a href="https://sysa.ml/buy-domain-name/">
										<amp-img class="lc kd amp-wp-enforced-sizes" src="https://sysa.ml/assets/images/buy-domain.webp" alt="How To Buy Domain Name" width="640" height="416" layout="intrinsic"><noscript><img class="lc kd" src="https://sysa.ml/assets/images/buy-domain.webp" alt="How To Buy Domain Name" width="640" height="416"></noscript></amp-img>
									</a>
								</div>
								<div class="ab">
									<h2 class="bb">
<a class="zb" href="https://sysa.ml/buy-domain-name/">How To Buy Domain Name</a>
</h2>
									<h4 class="cb">Are you looking to register a domain name, but don’t know where to start?
Part of building a website, is buying a domain name that has to be unique.
</h4>
								</div>
								<div class="db gb">
									<div class="">
										<span class="">
<amp-img class="jc kd amp-wp-enforced-sizes" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="40" height="40" layout="fixed"><noscript><img class="jc kd" src="https://www.gravatar.com/avatar/811ff8ad49ea8211408f775e1d941851?s=250&amp;d=mm&amp;r=x" alt="sysa" width="40" height="40"></noscript></amp-img></span>
										<span class="">
<span class=""><a target="_blank" href="https://sysa.ml/about/" rel="noopener noreferrer">sysa</a></span>
										<span class="kc">08 Apr 2021</span>
										</span>
										<div class="hb"></div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>

			<div class="mc wb">
				<span class="l"><amp-img src="https://sysa.ml/assets/images/logo.svg" class="nc amp-wp-enforced-sizes" alt="shoaiyb sysa" width="50" height="50" layout="fixed"><noscript><img src="https://sysa.ml/assets/images/logo.svg" class="nc" alt="shoaiyb sysa" width="50" height="50"></noscript></amp-img>   Never miss a new <b>post</b>, subscribe to my newsletter</span>
				<form method="post" name="mc-embedded-subscribe-form" class="" target="_blank" novalidate="" action-xhr="https://sysa.us1.list-manage.com/subscribe/post?u=470d027d272e559f32772d979&amp;id=f08439ffdc&amp;_wp_amp_action_xhr_converted=1">
					<div class="oc kb">
						<input type="email" placeholder="Your e-mail" name="EMAIL" class="pc hd jd" id="g" autocomplete="on" required=""><input type="submit" value="Subscribe" name="subscribe" class="j k qc id"></div>
					<div submit-error=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #F44336; clear: both;">Unable to submit Form</p></template></div>
					<div submit-success=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #009688; clear: both;">Form submitted successfully</p></template></div>
					<div submitting=""><template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #607D8B; clear: both;">Submitting...</p></template></div>
				</form>
			</div>
		</div>

		<footer class="gd">
			<div class="n">
				<div class="o">
					<div class="q s wb">
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
