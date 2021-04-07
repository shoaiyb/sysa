---
layout: page
title: "YouTube Embed Code Generator"
description: ""
comments: false
---



<script type="javascript">
var pMODE = "";
var filler = "";
var player = "";

swal.setDefaults({
  confirmButtonColor: '#FF5F6E'
});

//%%%%%%%%%%%%%%%%%%% ASYNC PLAYER CHECK %%%%%%%%%%%%%%%%%%%%%%%%

async.onchange = function() {
  var val = (async.checked == true) ? 1 : 0;
  if (val == 1) {
    responsive.checked = true;
    thumbnail.disabled = false;
    playerType.disabled = autoplay.checked = true;
  } else if (val == 0) {
    thumbnail.disabled = true;
    playerType.disabled = autoplay.checked = false;
  }
}
autoplay.onchange = function() {
  if (async.checked == true && autoplay.checked == false) {
    swal("Autoplay=Disabled", "Disabling autoplay for ASYNC player would cause 'double click to play' behaviour", "warning");
  }
}

//$$$$$$$$$$$$$ HEIGHT & WIDTH FUNCTION $$$$$$$$$$$$$$$$$$
var timer;

function calcSize() {
  var height = document.getElementById("height").value;
  var width = document.getElementById("width").value;
  if (height != "") {
    document.getElementById("width").placeholder = "Autocalculate in 1.5s";
  } else if (width != "") {
    document.getElementById("height").placeholder = "Autocalculate in 1.5s";
  } else if (height == "" && width == "") {
    document.getElementById("width").placeholder = "Width (px)";
    document.getElementById("height").placeholder = "Height (px)";
  }
  clearTimeout(timer);
  timer = setTimeout(function validate() {
    if (height == "" && width != "") {
      clearTimeout(timer);
      document.getElementById("height").value = Math.round(width / 1.7);
    } else if (height != "" && width == "") {
      clearTimeout(timer);
      document.getElementById("width").value = Math.round(height * 1.7);
    }
  }, 1500);

} //$$$$$$$$$$$$$ HEIGHT & WIDTH FUNCTION END $$$$$$$$$$$$$$$$$$

//############ MAIN FUNCTION START ##########################
function youtubeEmbedCode() {

  var videoID = document.getElementById("videoID").value;
  var height = document.getElementById("height").value;
  var width = document.getElementById("width").value;
  var responsive = document.getElementById("responsive");
  var playerType = document.getElementById("playerType").value;
  var theme = "&theme=" + document.getElementById("theme").value;
  var barColor = document.getElementById("color");
  var autoplay = document.getElementById("autoplay");
  var keyboard = document.getElementById("disablekb");
  var autohide = "&autohide=" + document.getElementById("autohide").value;
  var captions = document.getElementById("showcc");
  var logo = document.getElementById("logo");
  var fullscreen = document.getElementById("fullscreen");
  var playlist = document.getElementById("playlist");
  var showinfo = document.getElementById("showinfo");
  var related = document.getElementById("relatedvideo");
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var annotation = document.getElementById("annotation");
  var thumbnail = document.getElementById("thumbnail");
  var border = document.getElementById("border");
  var preview = document.getElementById('preview');
  var txtOutput = document.getElementById('txtOutput');
  var responsiveCode, divClose, code, params;

  videoID = extractVideoID(videoID);

  if (height == "" && width == "") {
    height = 294;
    width = 500;
  }

  //Responsive Code 
  if (responsive.checked != true) {
    responsiveCode = divClose = "";
  } else {
    responsiveCode = "<style>.codegena{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.codegena iframe{position:absolute;top:0;left:0;width:100%;height:100%;}/*Youtube Embed Code : Created with Codegena.com */</style><div class=\"codegena\">";
    divClose = "</div>";
  }
  //Condtional Assignments   
  autoplay = (autoplay.checked == true) ? "&autoplay=1" : "";
  keyboard = (keyboard.checked == true) ? "&keyboard=1" : "";
  captions = (captions.checked == true) ? "&cc_load_policy=1" : "";
  logo = (logo.checked == true) ? "&modestbranding=1" : "";
  border = (border.checked == true) ? "frameborder=\"1\"" : "frameborder=\"0\"";
  fullscreen = (fullscreen.checked == true) ? "&fs=0" : "";
  showinfo = (showinfo.checked == true) ? "&showinfo=0" : "";
  related = (related.checked == true) ? "&rel=0" : "";
  playlist = (playlist.value != "") ? "&playlist=" + playlist.value : "";
  barColor = (barColor.value != "red") ? "&color=white" : "";
  start = (start.value != "") ? "&start=" + timeInS(start.value) : "";
  stop = (stop.value != "") ? "&end=" + timeInS(stop.value) : "";
  annotation = (annotation.value != 1) ? "&iv_load_policy=" + annotation.value : "";
  thumbnail = (thumbnail.value != "") ? " src='" + thumbnail.value + "'" : getThumb(videoID);
  params = "data-params='" + filler + theme + autoplay + barColor + autohide + keyboard + captions + logo + fullscreen + showinfo + related + playlist + start + stop + annotation + "'";

  var async = document.getElementById('async');
  if (async.checked == true) {
    code = "<div class='youtube' id='" + pMODE + videoID + "' " + params + thumbnail + "style='width:" + width + "; height:" + height + ";'></div>" + "<script src='https://codegena.com/assets/js/youtube-embed.js'></script" + ">";
  } else {
    code = responsiveCode + "<iframe width='" + width + "' height='" + height + "' src=\"https://www.youtube.com/" + playerType + "/" + pMODE + videoID + filler + theme + barColor + autoplay + keyboard + autohide + captions + logo + fullscreen + playlist + showinfo + related + start + stop + annotation + "\"" + border + "></iframe>" + divClose;
  }
  //Backlink Code  
  code += "<div style='font-size: 0.8em'><a href='https://codegena.com/generator/Youtube-Embed-Code-Generator.html'>Create customized YouTube embed code</a></div>";

  //Prints "no preview " message for ajax and flash players
  if (playerType == 'v' || async.checked == true) {
    preview.innerHTML = "<p>Preview may not work with flash player & Async Player!</p><br/>";
    preview.innerHTML += code;
  } else {
    preview.innerHTML = code;
  }
  txtOutput.innerHTML = code;

} // Main Function Close

//############ EXTRACT VIDEO/PLAYLIST ID ################

function extractVideoID(vidID) {
  if (vidID == "" || vidID.length < 11) {
    sweetAlert("Error", "No video ID detected.Please enter a video/playlist URL. Placeholder video is used.", "error");
    pMODE = "";
    return "ffiJNSy8CBA?";
  }
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = vidID.match(regExp);
  var list = vidID.match("list=([a-zA-Z0-9\-\_]+)&?");
  list = list ? list[1] : "";
  if (match && match[7].length == 11) {
    pMODE = "";
    filler = "?";
    return (match[7]);
  } else if (list != "") {
    pMODE = "videoseries?list=";
    filler = "";
    return list;
  } else {
    swal("Oops..", "Could not extract video/playlist ID", "error");
    return "VIDEO_ID";
  }
}

function getThumb(vidID) {
  if (vidID.length == 11 || vidID.length < 14) {
    return " src='http://i.ytimg.com/vi/" + vidID + "/hqdefault.jpg'";
  } else {
    return " src='https://codegena.com/assets/images/no_image_available.jpg'";
  }
}

function timeInS(str) {
  var p = str.split(':'),
    s = 0,
    m = 1;
  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }
  return s;
}

//############SELECT ALLt#########################
function SelectAll(txtOutput) {
  document.getElementById(txtOutput).focus();
  document.getElementById(txtOutput).select();
}

//############ RESET ##########################
function refresh() {
  var allChildNodes = document.getElementById("optionals").getElementsByTagName('*');
  for (var i = 0; i < allChildNodes.length; i++) {
    allChildNodes[i].disabled = false;
  }
  document.getElementsByTagName("form")[0].reset();
  document.getElementById("preview").innerHTML = "You will see preview here";

}

//Load Disqus on click with jquery
$(document).ready(function() {
    $('.show-comments').on('click', function(){
      $("#disqus_thread").css({"background-color": "white", "padding": "24px","border-radius":"5px","width":"50%","min-width":"200px"});
          var disqus_shortname = 'codegena'; // Replace this value with *your* username.

          // ajax request to load the disqus javascript
          $.ajax({
                  type: "GET",
                  url: "//" + disqus_shortname + ".disqus.com/embed.js",
                  dataType: "script",
                  cache: true
          });
          // hide the button once comments load
          $(this).fadeOut();
    });
});

</script>
<fieldset>
        <br />
        <!--Video ID,Width,Height-->
        <label>Required Parameters</label>
        <br />
        <br />
        <input placeholder="Video URL / Playlist URL" type="url" id="videoID" />
        <br />
<div class="section group">
          <div class="col span_1_of_2">
            <input placeholder="Width (px)" type="number" id="width" onkeyup="calcSize()" min="200" />
          </div>
          <div class="col span_1_of_2">
            <input placeholder="Height (px)" type="number" id="height" onkeyup="calcSize()" min="200" />
            </div>
        </div>
        <br/>

        <label>Codegena Special Parameters</label>
        <br/>
        <br/>
        <!--ASYNC-->
        <div class="section group">
          <div class="col span_1_of_2">
          <h2 title="Check this option to load youtube player that loads on clicking thumbnail.">Load Async Player:</h2>
          </div>
          <div class="col span_1_of_2">
            <input id="async" value="1" type="checkbox" hidden="hidden" />
            <label for="async" class="switch"></label>
          </div>
          </div>
        <div class="section group">
          <div class="col span_1_of_2">
            <h2 title="Set your thumbnail image for the async player here">Youtube Embed Thumbnail:<br/><small>Async Player only</small></h2>
          </div>
          <div class="col span_1_of_2">
            <input placeholder="Image URL" type="url" id="thumbnail" disabled />
            </div>
        </div>
        <br/>

        <div id="optionals">
          <!--Responsive-->
          <div class="section group">
            <div class="col span_1_of_2">
              <h2 title="Check this option to make the embed player responsive. ">Responsive Video Player:</h2>
              </div>
            <div class="col span_1_of_2">
              <input id="responsive" value="1" type="checkbox" hidden="hidden" />
              <label for="responsive" class="switch"></label>
            </div>
          </div>
          <label>Advanced Parameters</label>
          <div class="section group">
            <div class="col span_1_of_2">
              <h2 title="Select the type of player: html5 or flash.">Player Technology:</h2>
            </div>
            <div class="col span_1_of_2">
              <select id="playerType">
                <option value="embed" selected>HTML 5</option>
                <option value="v">Flash</option>
                </select>
            </div>
          </div>
          <!--Theme-->
          <div class="section group">
            <div class="col span_1_of_2">
              <h2 title="Choose your youtube player theme if you selected flash player."> Player Theme:<br/><small>Works only for flash player</small></h2>
            </div>
            <div class="col span_1_of_2">
              <select id="theme">
                <option value="dark" selected>Dark</option>
                <option value="light">Light</option>

              </select>
            </div>
          </div>
          <div class="section group">
            <div class="col span_1_of_2">
              <h2>Progress Bar Color:</h2>
            </div>
            <div class="col span_1_of_2">
              <select id="color">
                <option value="red" selected>Red</option>
                <option value="white">White</option>
                </select>
            </div>
          </div>
          <br/>

          <!--Autoplay-->
          <div class="section group">
            <div class="col span_1_of_2">
              <h2>Youtube Autoplay:</h2>
            </div>
            <div class="col span_1_of_2">
            <input id="autoplay" value="1" type="checkbox" hidden="hidden" />
              <label for="autoplay" class="switch"></label>
            </div>
          </div>

          <!--Disable Keyboard-->
          <div class="section group">
            <div class="col span_1_of_2">
            <h2 title="Check this option to disable the keyboard controls for the youtube video.">Disable Keyboard:</h2>
            </div>
            <div class="col span_1_of_2">
              <input id="disablekb" value="1" type="checkbox" hidden="hidden" />
              <label for="disablekb" class="switch"></label>
            </div>
            </div>
          <br/>

          <!--Hide Video Controls-->
          <div class="section group">
            <div class="col span_1_of_2">
              <h2>Hide Youtube Controls:</h2>
            </div>
            <div class="col span_1_of_2">
              <select id="autohide">
              <option value="2" selected>Auto</option>
                <option value="1">Hide</option>
                <option value="0">Visible Throughout</option>

              </select>
            </div>
          </div>
          <br/>
          <div class="section group">
            <div class="col span_1_of_2">
              <h2 title="Enable this if you want to load the captions for that video. Works only if user uploaded captions are available">Show Youtube Captions:<br/><small>Doesn't work for auto generated captions</small></h2>
            </div>
            <div class="col span_1_of_2">
            <input id="showcc" value="1" type="checkbox" hidden="hidden" />
              <label for="showcc" class="switch"></label>
            </div>
          </div>

          <!--Hide Youtube Logo-->
          <div class="section group">
            <div class="col span_1_of_2">
            <input id="logo" value="1" type="checkbox" hidden="hidden" />
              <label for="logo" class="switch"></label>
            </div>
          </div>

          <!--Hide Fullscreen Button-->
          <div class="section group">
            <div class="col span_1_of_2">
            <h2>Hide Fullscreen Button:</h2>
            </div>
            <div class="col span_1_of_2">
              <input id="fullscreen" value="0" type="checkbox" hidden="hidden" />
              <label for="fullscreen" class="switch"></label>
            </div>
          </div>
          <div class="section group">
            <div class="col span_1_of_2">
              <h2 title="Check this option to show border around the video player">Show Border:</h2>
            </div>
            <div class="col span_1_of_2">
              <input id="border" type="checkbox" hidden="hidden" />
              <label for="border" class="switch"></label>
            </div>
            </div>


          <!--Hide Top bar-->
          <div class="section group">
            <div class="col span_1_of_2">
              <h2 title="Check this option to hide the title bar">Hide Top Bar:</h2>
            </div>
            <div class="col span_1_of_2">
            <input id="showinfo" value="0" type="checkbox" hidden="hidden" />
              <label for="showinfo" class="switch"></label>
            </div>
          </div>

          <!--Related Video at End-->
          <div class="section group">
            <div class="col span_1_of_2">
            <h2>Hide Related Video at End:</h2>
            </div>
            <div class="col span_1_of_2">
              <input id="relatedvideo" value="0" type="checkbox" hidden="hidden" />
              <label for="relatedvideo" class="switch"></label>
            </div>
          </div>
          <br/>
          <div class="section group">
            <div class="col span_1_of_2">
              <h2 title="Enter the list of video IDs seperated by comma to create a new playlist">Create New Youtube Playlist: <br/><small> (Enter video ID's seperated by comma)</small></h2>
            </div>
            <div class="col span_1_of_2">
              <input placeholder="ID_1,ID_2,ID_3" type="text" id="playlist" />
              </div>
            <br />


            <!--Start Time -->
            <div class="section group">
              <div class="col span_1_of_2">
                <h2 title="Enter the video start time here in the time string format.">Youtube Start Time:</h2>
              </div>
              <div class="col span_1_of_2">
                <input placeholder="hh:mm:ss" type="text" id="start" min="0" />
              </div>
            </div>
            <br/>
            <!--Stop Time -->

            <div class="section group">
            <div class="col span_1_of_2">
                <h2 title="Enter the video end time here in the time string format.">Youtube End Time:</h2>
              </div>
              <div class="col span_1_of_2">
                <input placeholder="hh:mm:ss" type="text" id="stop" min="0" />
              </div>
              </div>
            <br/>

            <!--Annotation Defaults-->
            <div class="section group">
              <div class="col span_1_of_2">
                <h2>Show Youtube Annotations:</h2>
              </div>
              <div class="col span_1_of_2">
              <select id="annotation">
                  <option value="1" selected>Show by default</option>
                  <option value="3">Hide by default</option>

                </select>
              </div>
            </div>
            <br/>
          </div>
        </div>
        <center>
          <input type="button" class="btn" id="generatebtn" value="Generate Code" onclick="youtubeEmbedCode()" />
          <input type="button" class="btn" value="Clear" onClick="refresh()" />
        </center>
        <br />
        <textarea readonly onfocus="SelectAll('txtOutput');" id="txtOutput"  cols="40" rows="5">Generated Code</textarea>

        <!--Preview Area-->
        <center>
          <div id="preview">
            <p>You will see preview here</p>
          </div>
          
