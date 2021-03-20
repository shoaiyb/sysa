---
layout: page
title: Image to Data URl
description: Image to data url converter, Is a simple tool that'll help you to turn images into data files.
permalink: /tools/image-to-data-url/
redirect_from:
  - /image-to-data-url
  - /image-to-data-url/
image: assets/images/logo.svg
imageshadow: true
comments: false
---





Image To Data URI Convertor. upload image convert data URI


<div class="btn btn-dark">Upload Image: <input name="image" type="file" class="btn btn-dark" id="choose" accept="image/*">
<div id="ldimg" style="display: none;">Loading...</div></div>
<div class="btn-blue">
<a href="#" class="btn blue-btn" id="generate"><span><i class="btn btn-dark"></i></span>Generate</a>
</div>
<div>
<div rows="8" class="form-control mb-3">HTML</div>
</div>
<!--div>
<a href="#" class="dwn_code" data-id="html" title="Download code"><i class="fa fa-download"></i></a>
<a href="#" class="copy_code" data-target="code_html" data-id="html" title="copy code"><i class="fa fa-copy"></i></a>
</div-->
<textarea class="form-control mb3" rows="8" class="form-control mb-3" style="height: 13em;" id="code_html" aria-label="HTML code"></textarea>
<button class="code_selectall" data-id="code_html" type="button">select all</button>
</div>
</div>
<div class="code-box-code">URL</div>
<!--div>
<a href="#" class="dwn_code" data-id="link" title="Download code"><i class="fa fa-download"></i></a>
<a href="#" class="copy_code" data-target="code_url" data-id="link" title="copy code"><i class="fa fa-copy"></i></a>
</div-->
<textarea rows="8" class="form-control mb-3" style="height: 13em;" id="code_url" aria-label="HTML Code"></textarea>
<button class="btn btn-dark select" data-id="code_url" type="button">select all</button>
</div>
</div>

<a href="#" id="code-dwnload" class="btn btn-dark">Download</a>




<script src="https://www.html-code-generator.com/js/hcg/jquery-3.5.1.js"></script>
<script src="https://www.html-code-generator.com/js/hcg/script-4.js?125"></script>
<script>
(function(d){"object"==typeof hcg&&d(hcg)})(function(d){function k(c){var e=c.offset(),f=$('<div class="copy-alert">Copied!</div>');$("body").append(f);var g=f.outerHeight(),h=f.outerWidth()/2;f.css({top:e.top-g+"px",left:e.left-h+"px",display:"block"});f.fadeOut(2E3,function(){$(this).remove()});$("#"+c.data("target")).effect("highlight",{color:"#0085ef"},200)}function l(c){var e=new FileReader,f=new Image;e.readAsDataURL(c);e.onload=function(g){f.src=g.target.result;f.onload=function(){var h=this.width,
m=this.height,n=c.type,p=c.name,q=~~(c.size/1024)+"KB";$("#img-ld-dv").html('<div class="img-ttl"> <div class="div-col"><div id="wfi_inptc"></div></div> <div class="div-col"> <div class="imgs-size-jq"> <div id="img-name" class="size-img"></div> <div id="img-height" class="size-img"></div> <div id="img-width" class="size-img"></div> <div id="img-size" class="size-img"></div> <div id="img-type" class="size-img"></div> </div> </div> </div>');$("#wfi_inptc").html('<img id="wfi_inptc" src="'+this.src+
'">');$("#img-height").html("Height : "+m);$("#img-width").html("Width : "+h);$("#img-name").html("Name : "+p);$("#img-type").html("Type : "+n);$("#img-size").html("Size : "+q);t=this.src;b=""==t?"":'<img src="'+t+'"/>';d.html=b;d.link=t;$("#ldimg").hide()};f.onerror=function(){d.alert("Invalid file type: "+c.type);$("#ldimg").hide()}}}$("#choose").change(function(){$("#ldimg").show();if((a=this.files)&&a[0])for(var c=0;c<a.length;c++)l(a[c])});$("#generate").click(function(c){c.preventDefault();
$("#code_html").val(d.getHtml());$("#code_url").val(d.getLink())});$("#code-dwnload").click(function(c){d.download("data-uri.html","text/html",d.getHtml());c.preventDefault()});$(".dwn_code").click(function(c){var e=$(c.currentTarget).data("id");"url"==e?d.download("link.txt","text/txt",d.link):"html"==e?d.download("link-html.html","text/html",d.html):"css"==e?d.download("link-css.css","text/css",d.css):"js"==e&&d.download("link-js.js","text/javascript",d.js);c.preventDefault()});$(".copy_code").click(function(c){c.preventDefault();
c=$(c.currentTarget);k(c);c=c.data("id");"link"==c?d.copy(d.link):"html"==c?d.copy(d.html):"css"==c?d.copy(d.css):"js"==c&&d.copy(d.js)});$(".code_selectall").click(function(c){d.selectAll(c)});$(document).ready(function(){d.load_cm()});$(document).on("focusin",".bc_bxbd",function(){$(this).closest(".bl_bx").addClass("fcsbx")});$(document).on("focusout",".bc_bxbd",function(){$(this).closest(".bl_bx").removeClass("fcsbx")});$(document).on("click",".bx_min",function(c){c.preventDefault();
var e=$(this).closest(".bl_bx");c=e.find(".bc_bxbd");var f=$(this);c.stop(!0,!0).slideToggle(function(){f.toggleClass("i-pls");e.toggleClass("dsbbx")})});$(".bl_bxhr").empty()});
</script><script>
   var adb = false;
   function dadb() {adb = true} 
</script>
