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

<h2>Upload Image</h2>
<a href="#" class="bx_min icn twe_icn i-min"></a>
</div>
<div class="bl_bxhr"><div class="loading-hcg sgif"></div></div>
</div>
<div class="bc_bxbd">
<div class="up-imgs">Upload Image: <input name="image" type="file" class="btn btn-dark" id="choose" accept="image/*"><div id="ldimg" style="display: none;">Loading...</div></div>
<div class="m-div">
<div id="img-ld-dv"></div>
</div>
</div>
</div>
<div class="btn-blue">
<a href="#" class="slkt blue-btn" id="generate"><span><i class="i-grw icn twe_icn"></i></span>Generate</a>
</div>
<div class="code-box">
<div class="code-box-hed">
<div><div class="code-box-code">HTML</div></div>
<div>
<a href="#" class="dwn_code" data-id="html" title="Download code"><i class="fa fa-download"></i></a>
<a href="#" class="copy_code" data-target="code_html" data-id="html" title="copy code"><i class="fa fa-copy"></i></a>
</div>
</div>
<div class="code-box-cnt">
<textarea class="form-control mb3" style="height: 13em;" id="code_html" aria-label="HTML code"></textarea>
<button class="code_selectall" data-id="code_html" type="button">select all</button>
</div>
</div>
<div class="code-box">
<div class="code-box-hed">
<div><div class="code-box-code">URL</div></div>
<div>
<a href="#" class="dwn_code" data-id="link" title="Download code"><i class="fa fa-download"></i></a>
<a href="#" class="copy_code" data-target="code_url" data-id="link" title="copy code"><i class="fa fa-copy"></i></a>
</div></div>
<div class="code-box-cnt">
<textarea class="form-control mb3" style="height: 13em;" id="code_url" aria-label="HTML code"></textarea>
<button class="code_selectall" data-id="code_url" type="button">select all</button>
</div>
</div>
<div class="opt_btns">
<a href="#" id="code-dwnload" class="btn btn-dark"><span class="btn btn-dark"></span>Download The Code</a></div>



<style>
.sgif{background-image:url(data:image/gif;base64,R0lGODlhEAALALMMAOXp8a2503CHtOrt9L3G2+Dl7vL0+J6sy4yew1Jvp/T2+e/y9v///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCwAMACwAAAAAEAALAAAEK5DJSau91KxlpObepinKIi2kyaAlq7pnCq9p3NZ0aW/47H4dBjAEwhiPlAgAIfkECQsADAAsAAAAAAQACwAABA9QpCQRmhbflPnu4HdJVAQAIfkECQsADAAsAAAAABAACwAABDKQySlSEnOGc4JMCJJk0kEQxxeOpImqIsm4KQPG7VnfbEbDvcnPtpINebJNByiTVS6yCAAh+QQJCwAMACwAAAAAEAALAAAEPpDJSaVISVQWzglSgiAJUBSAdBDEEY5JMQyFyrqMSMq03b67WY2x+uVgvGERp4sJfUyYCQUFJjadj3WzuWQiACH5BAkLAAwALAAAAAAQAAsAAAQ9kMlJq73hnGDWMhJQFIB0EMSxKMoiFcNQmKjKugws0+navrEZ49S7AXfDmg+nExIPnU9oVEqmLpXMBouNAAAh+QQFCwAMACwAAAAAEAALAAAEM5DJSau91KxlpOYSUBTAoiiLZKJSMQzFmjJy+8bnXDMuvO89HIuWs8E+HQYyNAJgntBKBAAh+QQFFAAMACwMAAIABAAHAAAEDNCsJZWaFt+V+ZVUBAA7);background-repeat:no-repeat}
.loading-hcg{width:20px;height:10px;display:inline-block;background-position:50% 50%}
.bl_bx{border:2px #076591 solid;border-top:0;margin-bottom:50px;box-shadow:0 20px 50px -25px rgba(0,0,0,0.81);border-top-left-radius:5px;border-top-right-radius:5px}
.bl_bxhd{position:relative;color:#FFF;text-align:center;box-shadow:inset 0 1px 1px 0 rgba(255,255,255,0.77);border-top:solid 1px #0C5870;border-bottom:solid 1px #045074;background:linear-gradient(to bottom,#067DB4,#09638F);background-color:#0F73A2;border-top-left-radius:5px;border-top-right-radius:5px;display:flex;justify-content:space-between;align-items:center}
.bl_bxhl{font-size:14px;display:inline-block;width:40px;padding:8px 0;border-right:solid 1px #035277;margin-left:1px;margin-top:1px;box-shadow:1px 0 0 0 rgba(255,255,255,0.34);background-color:#0F73A2;border-top-left-radius:4px;flex:0 0 40px;min-height:34px}
.bl_bxhc{flex:1 1 auto}
.bl_bxhr{display:inline-block;width:40px;padding:8px 0;margin-right:1px;margin-top:1px;background:#0F73A2;border-top-right-radius:4px;border-left:solid 1px #035277;box-shadow:-1px 0 0 0 rgba(255,255,255,0.34);flex:0 0 40px;min-height:37px}
.bc_bxbd{background-color:#ECECEC;position:relative;padding:20px}
.bl_bx.fcsbx{border-color:#098F59}
.fcsbx .bl_bxhd{background:linear-gradient(to bottom,#0CC070,#098F59);background-color:#0A9E5D;border-bottom:solid 1px #0C7031;border-top:solid 1px #219C4D}
.fcsbx .bl_bxhl{border-right:solid 1px #0A8335;background:#0A9E5D}
.fcsbx .bl_bxhr{border-left:solid 1px #0A8335;background:#0A9E5D}
.fcsbx .bc_bxbd{background-color:#FFFFC8}
a.bx_min{display:inline-block;position:absolute;top:10px;right:50px}
.i-min{background-position:-330px -29px}
.i-pls{background-position:-310px -31px}
.bl_bx.dsbbx{margin-bottom:5px;border-color:#888D8F}
.dsbbx .bl_bxhd{background:linear-gradient(to bottom,#ADB1B3,#888D8F);background-color:#888D8F;border-top:solid 1px #646C6E;border-bottom:solid 1px #6F7273}
.dsbbx .bl_bxhl{border-right:solid 1px #737475;background-color:#949da1}
.dsbbx .bl_bxhr{border-left:solid 1px #737475;background-color:#949da1}
.bc_bxbd{background-color:#ffffff}
h2{margin:0;font-size:15px;font-weight:normal}	
div#wfi_inptc img{max-width:100%;max-height:100%;display:inline-block}
.div-col{padding:20px}
div#wfi_inptc{max-width:100%;overflow:auto}
.imgs-size-jq{text-align:left;line-height:25px;font-size:14px}
textarea.code_textarea{white-space:inherit;overflow:inherit}
.opt_btns{background-color:#f9f9f9;padding:10px;margin-bottom:50px;text-align:center}
.bc_bxbd {text-align: center}
.code-box-hed {padding-right: 8px;}
</style>
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
