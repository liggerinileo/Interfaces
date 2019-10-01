"use strict";

document.addEventListener('DOMContentLoaded', () => {

    let runner = document.getElementById('runner');
    let player = document.getElementById('player')

    player.onmousemove = (e) => {
        runner.style.left = e.clientX + 'px';
        runner.style.top = e.clientY + 'px';
    }
});