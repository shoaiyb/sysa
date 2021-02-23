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


<style>
/* WYSIWYG Editor */
.editor {
  width: 40rem;
  min-height: 18rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  border-top: 6px solid #4a4a4a;
  border-radius: 3px;
  margin: 2rem;
  
  .toolbar {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    .line {
      display: flex;
      border-bottom: 1px solid #e2e2e2; 
      &:last-child {
        border-bottom: none;
      } 
      .box {
        display: flex;
        border-left: 1px solid #e2e2e2;  
        .btn {
          display: block;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: .2s ease all;
          &:hover, &.active {
            background-color: #e1e1e1;
            cursor: pointer;
          }
          &.icon img {
            width: 15px;
            padding: 10px;
          }
          &.icon.smaller img {
            width: 12px;
          }
          &.has-submenu {
            width: 20px;
            padding: 0 10px;  
            &::after {
              content: '';
              width: 6px;
              height: 6px;
              position: absolute;
              background-image: url(https://image.flaticon.com/icons/svg/25/25243.svg);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              right: 4px;
            }
            .submenu {
              display: none;
              position: absolute;
              top: 36px;
              left: -1px;
              z-index: 10;
              background-color: #FFF;
              border: 1px solid #b5b5b5;
              border-top: none;
              .btn {
                width: 39px;
              }
              &:hover {
                display: block;
              }
            } 
            &:hover .submenu {
              display: block;
            }
          }
        }  
      }
    }
  }
  
  .content-area {
    padding: 15px 12px;
    line-height: 1.5;
    .visuell-view {
      outline: none;
      } 
    }
    .html-view {
      outline: none;
      display: none;
      width: 100%;
      height: 200px;
      border: none;
      resize: none;
    }
  }
}


/* Modal */
.modal {
  z-index: 40;
  display: none;
  
  .modal-wrapper {
    background-color: #FFF;
    padding: 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    min-height: 10rem;
    z-index: 41;
    .modal-content {
      display: none;
      flex-direction: column;
      h3 {
        margin-top: 0;
      }  
      input {
        margin: 1rem 0;
        padding: .5rem;
      }
      .row {  
        label {
          margin-left: .5rem;
        }
      }
      button {
        background-color: #D2434F;
        border: 0;
        color: #FFF;
        padding: .5rem;
        cursor: pointer;
      } 
    }
  }
  
  .modal-bg {
    position: fixed;
    background-color: rgba(0, 0, 0, .3);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
}

</style>
<div class="editor">
  <div class="toolbar">
    <div class="line">
      <div class="box">
        <span class="btn icon smaller" data-action="bold" title="Bold">
          <img src="https://image.flaticon.com/icons/svg/25/25432.svg">
        </span>
        <span class="btn icon smaller" data-action="italic" title="Italic">
          <img src="https://image.flaticon.com/icons/svg/25/25392.svg">
        </span>
        <span class="btn icon smaller" data-action="underline" title="Underline">
          <img src="https://image.flaticon.com/icons/svg/25/25433.svg">
        </span>
        <span class="btn icon smaller" data-action="strikeThrough" title="Strike through">
          <img src="https://image.flaticon.com/icons/svg/25/25626.svg">
        </span>
      </div>
      <div class="box">
        <span class="btn icon has-submenu">
          <img src="https://image.flaticon.com/icons/svg/25/25351.svg">
          <div class="submenu">
            <span class="btn icon" data-action="justifyLeft" title="Justify left">
              <img src="https://image.flaticon.com/icons/svg/25/25351.svg">  
            </span>
            <span class="btn icon" data-action="justifyCenter" title="Justify center">
              <img src="https://image.flaticon.com/icons/svg/25/25440.svg">  
            </span>
            <span class="btn icon" data-action="justifyRight" title="Justify right">
              <img src="https://image.flaticon.com/icons/svg/25/25288.svg">  
            </span>
            <span class="btn icon" data-action="formatBlock" title="Justify block">
              <img src="https://image.flaticon.com/icons/svg/25/25181.svg">  
            </span>
          </div>
        </span>
        <span class="btn icon" data-action="insertOrderedList" title="Insert ordered list">
          <img src="https://image.flaticon.com/icons/svg/25/25242.svg">  
        </span>
        <span class="btn icon" data-action="insertUnorderedList" title="Insert unordered list">
          <img src="https://image.flaticon.com/icons/svg/25/25648.svg">  
        </span>
        <span class="btn icon" data-action="outdent" title="Outdent">
          <img src="https://image.flaticon.com/icons/svg/25/25410.svg">  
        </span>
        <span class="btn icon" data-action="indent" title="Indent">
          <img src="https://image.flaticon.com/icons/svg/25/25233.svg">  
        </span>
      </div>
      <div class="box">
        <span class="btn icon" data-action="insertHorizontalRule" title="Insert horizontal rule">
          <img src="https://image.flaticon.com/icons/svg/25/25232.svg">  
        </span>
      </div>
    </div>
    <div class="line">
      <div class="box">
        <span class="btn icon smaller" data-action="undo" title="Undo">
          <img src="https://image.flaticon.com/icons/svg/25/25249.svg">
        </span>
        <span class="btn icon" data-action="removeFormat" title="Remove format">
          <img src="https://image.flaticon.com/icons/svg/25/25454.svg">  
        </span>
      </div>
      <div class="box">
        <span class="btn icon smaller" data-action="createLink" title="Insert Link">
          <img src="https://image.flaticon.com/icons/svg/25/25385.svg">
        </span>
        <span class="btn icon smaller" data-action="unlink" title="Unlink">
          <img src="https://image.flaticon.com/icons/svg/25/25341.svg">
        </span>
      </div>
      <div class="box">
        <span class="btn icon" data-action="code" title="Show HTML-Code">
          <img src="https://image.flaticon.com/icons/svg/25/25185.svg">
        </span>
      </div>
    </div>
  </div>
  <div class="content-area">
    <div class="visuell-view" contenteditable>
      <p style="text-align: center;">Welcome to my <b>WYSIWYG</b> Editor <i>(What you see is what you get)</i>!</p>
      <p style="text-align: center;">It's only made of <u>HTML5</u>, <i><u>CSS3</u> </i>and pure <u>JavaScript</u>, <strike>no framework</strike>!</p>
      <hr>
      <p style="text-align: center;"><b>See for yourself! 😃</b></p>
      <p style="text-align: center;"><b>Tutorial available <a href="https://webdeasy.de/en/program-your-own-wysiwyg-editor-in-10-minutes/?referer=cp-YoVmBx">here</a>! 😋</b></p>
    </div>
    <textarea class="html-view"></textarea>
  </div>
</div>

<div class="modal">
  <div class="modal-bg"></div>
  <div class="modal-wrapper">
    <div class="modal-content" id="modalCreateLink">
      <h3>Insert Link</h3>
      <input type="text" id="linkValue" placeholder="Link (example: https://webdeasy.de/)">
      <div class="row">
        <input type="checkbox" id="new-tab">
        <label for="new-tab">Open in new Tab?</label>
      </div>
      <button class="done">Done</button>
    </div>
  </div>
</div>


<footer>
  <p>coded with ❤️ by <a href="https://webdeasy.de/?referer=cp-YoVmBx" target="_blank">WebDEasy</a></p>
  <p>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
</footer>
<script>
const editor = document.getElementsByClassName('editor')[0];
const toolbar = editor.getElementsByClassName('toolbar')[0];
const buttons = toolbar.querySelectorAll('.btn:not(.has-submenu)');

for(let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  
  button.addEventListener('click', function(e) {
    let action = this.dataset.action;
    switch(action) {
      case 'code':
        execCodeAction(this, editor);
        break;
      case 'createLink':
        execLinkAction();
        break;
      default:
        execDefaultAction(action);
    }
    
  });
}

function execCodeAction(button, editor) {
  const contentArea = editor.getElementsByClassName('content-area')[0];
  const visuellView = contentArea.getElementsByClassName('visuell-view')[0];
  const htmlView = contentArea.getElementsByClassName('html-view')[0];

  if(button.classList.contains('active')) { // show visuell view
    visuellView.innerHTML = htmlView.value;
    htmlView.style.display = 'none';
    visuellView.style.display = 'block';
    button.classList.remove('active');     
  } else {  // show html view
    htmlView.innerText = visuellView.innerHTML;
    visuellView.style.display = 'none';
    htmlView.style.display = 'block';
    button.classList.add('active'); 
  }
}

function execLinkAction() {
  let linkValue = prompt('Link (e.g. https://webdeasy.de/)');
  document.execCommand('createLink', false, linkValue);
}

function execDefaultAction(action) {
  document.execCommand(action, false);
}
</script>
