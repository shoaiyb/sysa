---
layout: page
title: XML Parser
permalink: /tools/xml-parser/
redirect_from:
  - /xml-parser
  - /xml-parser/
image: /assets/images/logo.svg
---

This XML parser or converter tool will help you to convert or parse HTML to XML, JavaScript to XML for your Blogger so that this code won't be executed. It will help you in syntax highlighting, parsing Google adsense code for blogger.    
<div style="text-align: center;">Enter Your Code</div>
<textarea class="form-control" onchange="sysa_parsed(this)" onkeyup="sysa_parsed(this)" style="font-family: monospace; height: 13em;"></textarea>  <div align="center"> </div><div style="text-align: center;">Your Parsed Code Here</div>
<textarea class="form-control" id="dst" onclick="this.select()" onfocus="this.select()" readonly="readonly" style="font-family: monospace; height: 13em;"></textarea>
**How to use**: To use this XML parser just paste your code in first text area and automatically it will show parsed result on next text area. Then copy the code and paste where you want. For next using, you can bookmark this tool. Happy parsing.  
<script type="text/javascript">// <![CDATA[
function $(id){ return document.getElementById(id) } var char2entity = { "'" : '&#39;', '"' : '&quot;',  '<' : '&lt;', '>' : '&gt;',  '&#038;' : '&amp;'}; function encode_entities(str) {   var rv = '';  for (var i = 0; i < str.length; i++) {    var ch = str.charAt(i);    rv += char2entity[ch] || ch;  }   return rv;} function compromath_parsed(e){  $('dst').value = encode_entities(e.value)}
// ]]&gt;</script></div>
