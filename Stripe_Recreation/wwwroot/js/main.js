const heroTitle = document.querySelector(".hero-title");
const heroTitleOverlay = document.querySelector(".hero-title[data-overlay]");

heroTitleOverlay.innerText = heroTitle.textContent;


// following these from https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbldQVXlDb0lQZ19fVnZpSVZyMkl3RkpZZnh6QXxBQ3Jtc0tuZDlxQ2lGdE9pcGdYMnBrX1MydW5PTGFNWjgwVW5sdlNwMzNNZUZWUHRnV2FFMjZKQWZteFpsNVVrR2E4TkhJUk92YnRIaTduVkl0MkpzT1NpcC1OU2FBQ0tZSHkxeUwwVFNxaWVGMXVzRGRwa1RWSQ&q=https%3A%2F%2Fcodepen.io%2FtmrDevelops%2Fpen%2FvOPZBv&v=neD6rV70Mlk


var c = document.getElementById('canv');
var $ = c.getContext('2d');


var col = function (x, y, r, g, b) {
    $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    $.fillRect(x, y, 1, 1);
}
var R = function (x, y, t) {
    return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
}

var G = function (x, y, t) {
    return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
}

var B = function (x, y, t) {
    return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
}

var t = 0;
var x;
var y;

var run = function () {
    for (x = 0; x <= 35; x++) {
        for (y = 0; y <= 35; y++) {
            col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
    }
    t = t + 0.01;
    window.requestAnimationFrame(run);
}

run();