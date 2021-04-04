---
layout: page
title: XML Parser
description: "This xml parser and a converter is a tool that will help you to convert and/or parse html and javascript to xml."
permalink: /tools/xml-parser/
redirect_from:
  - /xml-parser
  - /xml-parser/
image: assets/images/logo.svg
imageshadow: true
comments: false
---

This xml parser and a converter is a tool that will help you to convert and/or parse HTML and JavaScript to XML for your websites so that this code won't be executed. It will help you in syntax highlighting, parsing Google adsense code for blogger.    

<!--div class="form-group row">
<div class="col-md-6"-->
<div class="form-control" style="text-align: center;">Enter Your Code Here</div>
<textarea class="form-control" onchange="sysa_parsed(this)" onkeyup="sysa_parsed(this)" style="height: 13em;"></textarea>
<!--/div-->          
  
<div class="form-control" style="text-align: center;">Your Parsed Code Here</div>
<textarea class="form-control" id="dst" onclick="this.select()" onfocus="this.select()" readonly="readonly" style="height: 13em;"></textarea>         

### How to use?
To use this XML parser just paste your code in first text area and automatically it will show parsed result on next text area. Then copy the code and use it every where you want. For next using, you can bookmark this tool. Happy parsing.  

<style type="text/css">
    height: 16em;
    width: 100%;}
</style>
<script type="text/javascript">
function $(id){ return document.getElementById(id) } var char2entity = { "'" : '&#39;', '"' : '&quot;',  '<' : '&lt;', '>' : '&gt;',  '&#038;' : '&amp;'}; function encode_entities(str) {   var rv = '';  for (var i = 0; i < str.length; i++) {    var ch = str.charAt(i);    rv += char2entity[ch] || ch;  }   return rv;} function sysa_parsed(e){  $('dst').value = encode_entities(e.value)}
</script>
