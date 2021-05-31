// The following comments are settings for various linters
// Not sure if a reported error matters? Look it up at http://linterrors.com/js
/*global console: false, window: false, document: false*/

/*jslint es5: true */
/*jslint node: false*/
/*jslint browser: true*/
/*jslint devel: true*/
/*jslint plusplus: true */

/*jshint es5: true */
/*jshint globalstrict: true*/
/*jshint jquery: false*/
/*jshint node: false*/
/*jshint browser: true*/
/*jshint devel: true*/

/*eslint-env jquery: false*/
/*eslint-env browser*/
/*eslint no-console: 0*/

/*
 * TODO: Make sure you read this entire file and 
 * these Web pages BEFORE you start working!:
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
 * The "HTML Audio/Video Events" section at: 
 * http://www.w3schools.com/tags/ref_av_dom.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
 * Then start below with the "TODO: DO THIS FIRST" section.
 *
 * Complete the code for this file, following the hints in the comments.
 * Start with the "TODO: DO THIS FIRST: section in the MIDDLE of this file!
 * Do complete the code marked by "TODO" comments, 
 * but do NOT re-write function/method signatures 
 * (a method's signature is its name, parameters, 
 * and the order of the parameters).
 */
window.onload = function () {
    "use strict";
    // Getting the media elements
    var mediaElement1 = document.getElementById('mediaElement1');
    var mediaElement2 = document.getElementById('mediaElement2');
    var mediaElement3 = document.getElementById('mediaElement3');
    var mediaElement4 = document.getElementById('mediaElement4');
    // Getting the buttons
    var playOrPauseButton1 = document
        .getElementById("playOrPauseButton1");
    var playOrPauseButton2 = document
        .getElementById("playOrPauseButton2");
    var playOrPauseButton3 = document
        .getElementById("playOrPauseButton3");
    var playOrPauseButton4 = document
        .getElementById("playOrPauseButton4");
    var stopButton1 = document.getElementById("stopButton1");
    var stopButton2 = document.getElementById("stopButton2");
    var stopButton3 = document.getElementById("stopButton3");
    var stopButton4 = document.getElementById("stopButton4");
    var increaseVolumeButton1 = document
        .getElementById("increaseVolumeButton1");
    var increaseVolumeButton2 = document
        .getElementById("increaseVolumeButton2");
    var increaseVolumeButton3 = document
        .getElementById("increaseVolumeButton3");
    var increaseVolumeButton4 = document
        .getElementById("increaseVolumeButton4");
    var decreaseVolumeButton1 = document
        .getElementById("decreaseVolumeButton1");
    var decreaseVolumeButton2 = document
        .getElementById("decreaseVolumeButton2");
    var decreaseVolumeButton3 = document
        .getElementById("decreaseVolumeButton3");
    var decreaseVolumeButton4 = document
        .getElementById("decreaseVolumeButton4");

    var playOrPauseButtonEventHandler = function (event) {
        var playOrPauseButton = event.target;
        var mediaElement;
        /*
        TODO: After completing the binding code below this function:
        Use the playOrPauseButton.id to find its matching media element 
        and set the mediaElement variable to that element. 
        Use === instead of == to avoid type conversions.        
        */


        // TODO: Add your code here to play or pause the mediaElement


        /*
        NOTE: The playOrPauseButton's display will be automatically updated since you already completed 
        the mediaEventHandler function below and bound it to be called in reaction to 'play' and 'pause' events.
        */
    };

    /*
    TODO: Use addEventListener to bind all of the play or pause buttons to call our
    playOrPauseButtonEventHandler(event) function in reaction to 'click' events.
    Set addEventListener's 3rd arugment to false to indicate in a browser compatible way that you 
    want the playOrPauseButtonEventHandler function to be executed in the bubbling phase and NOT in the
    capturing phase.
    The playOrPauseButtonEventHandler function is defined above, so we don't need to worry about 
    function hoisting.
    */



    var stopButtonEventHandler = function (event) {
        var stopButton = event.target;
        var mediaElement;
        /*
        TODO: Use the stopButton.id to find its matching media element 
        and set the mediaElement variable to that element. 
        Use === instead of == to avoid type conversions.        
        */


        /*
        TODO: Add your code here to stop the mediaElement See:
        https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs#Stopping_the_video
        */


        /*
        NOTE: The related play or pause button's display will be automatically updated since you already completed 
        the mediaEventHandler function below and bound it to be called in reaction to 'pause' events.
        */
    };

    /*
    TODO: Use addEventListener to bind all of the stop buttons to call our
    stopButtonEventHandler(event) function in reaction to 'click' events.
    Set addEventListener's 3rd arugment to false to indicate in a browser compatible way that you 
    want the stopButtonEventHandler function to be executed in the bubbling phase and NOT in the
    capturing phase.
    The stopButtonEventHandler function is defined above, so we don't need to worry about 
    function hoisting.
    */



    var mediaEventHandler = function (event) {
        /*
         TODO: DO THIS SECOND (after completing the binding code below this function): 
         Now that a media element has just played, paused, or stopped, you
         need to set the mediaElement variable to that media element.
         Remember both the keyword 'this' and the 'event.target' object refer to
         whatever HTML media element called this mediaEventHandler
         function when a playing, pause, or an ended event was fired.
         */
        var mediaElement; // = ?;
        var button;
        console.log("mediaEventHandler called with event:", event);
        console.log("mediaEventHandler called with event.target:", event.target);
        console.log("mediaEventHandler called with event.currentTarget:", event.currentTarget);
        console.log("mediaEventHandler called with this:", this);
        /*
        TODO: Use the mediaElement.id to find its matching play or pause button element 
        and set the button variable to that element. It is best to use === instead of == to avoid type conversions.        
         */


        /*
        TODO: Set the button's innerHTML to 'Pause' or 'Play' depending on if
        the media element is paused or not by using the boolean value of mediaElement.paused.
         */


        /*
        DONE: If the media element just ended, mark it as watched.
        If the media element has been watched, add a check mark to the beginning of the button's display.
        */
        if (event.type === "ended") {
            mediaElement.watched = true;
        }
        if (mediaElement.watched) {
            button.innerHTML = "✅" + button.innerHTML;
        }
    };

    /*
    TODO: DO THIS FIRST (after reading the instructions at the top of this
    file). Use addEventListener to bind all of the video and audio media elements to call our
    mediaEventHandler(event) function in reaction to 'playing', 'pause', and 'ended' events.
    Set addEventListener's 3rd arugment to false to indicate in a browser compatible way that you 
    want the mediaEventHandler function to be executed in the bubbling phase and NOT in the
    capturing phase.
    The mediaEventHandler function is defined above, so we don't need to worry about 
    function hoisting.
    */



    var increaseVolume = function (mediaElement) {
        /*
        TODO: Increase the volume property of the media element ONLY when it
        is safe (don't go higher than a volume of 1.0 because that will cause
        an error) and set the volume to 1.0 if the current volume is too
        close to 1.0
        */


    };

    increaseVolumeButton1.onclick = function (event) {
        increaseVolume(mediaElement1);
    };
    increaseVolumeButton2.onclick = function (event) {
        increaseVolume(mediaElement2);
    };
    increaseVolumeButton3.onclick = function (event) {
        increaseVolume(mediaElement3);
    };
    increaseVolumeButton4.onclick = function (event) {
        increaseVolume(mediaElement4);
    };

    var decreaseVolume = function (mediaElement) {
        /*
        TODO: Decrease the volume property of the media element ONLY when it
        is safe (don't go lower than a volume of 0.0 because that will cause
        an error) and set the volume to 0.0 if the current volume is too
        close to 0.0
        */


    };

    decreaseVolumeButton1.onclick = function (event) {
        decreaseVolume(mediaElement1);
    };
    decreaseVolumeButton2.onclick = function (event) {
        decreaseVolume(mediaElement2);
    };
    decreaseVolumeButton3.onclick = function (event) {
        decreaseVolume(mediaElement3);
    };
    decreaseVolumeButton4.onclick = function (event) {
        decreaseVolume(mediaElement4);
    };
};
