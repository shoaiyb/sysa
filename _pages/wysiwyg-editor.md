---
layout: page
title: WYSIWYG Editor
permalink: /tools/wysiwyg-editor/
redirect_from:
  - /wysiwyg-editor
  - /wysiwyg-editor/
image: assets/images/logo.svg
imageshadow: true
comments: false
---



<link href='https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css' rel='stylesheet' type='text/css'> 
<link href='https://fonts.googleapis.com/css?family=Euphoria+Script' rel='stylesheet' type='text/css'>
<style>
  #editor {
  resize:vertical;
  overflow:auto;
  border:1px solid silver;
  border-radius:5px;
  min-height:100px;
  box-shadow: inset 0 0 10px silver;
  padding:1em;
  background: white;
  margin: 0 auto;
  width: 90%;
  }
  .content {
  margin: 50px auto 0;
}
</style>
<body>
  <div class="content">
     <h1 id="head">Simple wysiwyg editor</h1>
        <div id="editparent">
          <div id='editControls' style='text-align:center; padding:5px;'>
            <div class='btn-group'>
              <a class='btn' data-role='undo' href='#'><i class='icon-undo'></i></a>
              <a class='btn' data-role='redo' href='#'><i class='icon-repeat'></i></a>
            </div>
            <div class='btn-group'>
              <a class='btn' data-role='bold' href='#'><b>Bold</b></a>
              <a class='btn' data-role='italic' href='#'><em>Italic</em></a>
              <a class='btn' data-role='underline' href='#'><u><b>U</b></u></a>
              <a class='btn' data-role='strikeThrough' href='#'><strike>abc</strike></a>
            </div>
            <div class='btn-group'>
              <a class='btn' data-role='justifyLeft' href='#'><i class='icon-align-left'></i></a>
              <a class='btn' data-role='justifyCenter' href='#'><i class='icon-align-center'></i></a>
              <a class='btn' data-role='justifyRight' href='#'><i class='icon-align-right'></i></a>
              <a class='btn' data-role='justifyFull' href='#'><i class='icon-align-justify'></i></a>
            </div>
            <div class='btn-group'>
              <a class='btn' data-role='indent' href='#'><i class='icon-indent-right'></i></a>
              <a class='btn' data-role='outdent' href='#'><i class='icon-indent-left'></i></a>
            </div>
            <div class='btn-group'>
              <a class='btn' data-role='insertUnorderedList' href='#'><i class='icon-list-ul'></i></a>
              <a class='btn' data-role='insertOrderedList' href='#'><i class='icon-list-ol'></i></a>
            </div>
            <div class='btn-group'>
              <a class='btn' data-role='h1' href='#'>h<sup>1</sup></a>
              <a class='btn' data-role='h2' href='#'>h<sup>2</sup></a>
              <a class='btn' data-role='p' href='#'>p</a>
            </div>
            <div class='btn-group'>
              <a class='btn' data-role='subscript' href='#'><i class='icon-subscript'></i></a>
              <a class='btn' data-role='superscript' href='#'><i class='icon-superscript'></i></a>
            </div>
          </div>
          <div id='editor' style='' contenteditable>
<p><b>Lorem</b> <i>ipsum</i> <u>dolor</u> <strike>sit</strike> amet, consectetur adipisicing elit. Necessitatibus natus vero voluptatem aliquam molestias dicta aperiam dignissimos laudantium accusamus saepe!</p>
          </div>
    </div>
  </div>
<script>
  $(function() {
  $('#editControls a').click(function(e) {
    switch($(this).data('role')) {
      case 'h1':
      case 'h2':
      case 'p':
        document.execCommand('formatBlock', false, $(this).data('role'));
        break;
      default:
        document.execCommand($(this).data('role'), false, null);
        break;
    }
  });
});
</script>
