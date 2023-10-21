// Replace these URLs with the paths to your videos

let videoPaths = [
    // "instagram/insta2.mp4",
    // "instagram/insta1.mp4",
    // "/home/abhishek/Downloads/Andrew Tate _ Official Trailer Movie (2023).mp4",
    // Add more video paths here
];
numberOfIterations = 12;
for (let i = 1; i <= numberOfIterations; i++) {
    videoPaths.push(`instagram/insta${i}.mp4`);
}

console.log(videoPaths);

let currentVideoIndex = 0;
let playingVideo = null;

function play_Next(){
    console.log("clicked");
    currentVideoIndex++;
    loadAndPlayVideo(currentVideoIndex);

}
function play_Prev(){
    console.log("clicked");
    currentVideoIndex--;
    loadAndPlayVideo(currentVideoIndex);
}

function loadAndPlayVideo(videoIndex) {
    if (playingVideo) {
        playingVideo.pause();
    }

    const video = $("#video-container video")[0];
    const source = $("#video-container source");
    if (videoIndex < videoPaths.length) {
        source.prop("src", videoPaths[videoIndex]);
        video.load();
        video.play();
        playingVideo = video;

        video.onended = function () {
            // Play the next video when the current video ends
            currentVideoIndex++;
            loadAndPlayVideo(currentVideoIndex);
        };
    }
}

$(document).ready(function () {
    loadAndPlayVideo(currentVideoIndex);

});