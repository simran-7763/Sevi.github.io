// Falling hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 0.8 + 1.2) + "em";
    heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
    document.querySelector('.hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 6200);
}
setInterval(createHeart, 540);

// Timer
function updateTimer() {
    const startDate = new Date('2023-05-03T00:00:00'); // Set your start date
    const now = new Date();
    let diff = now.getTime() - startDate.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * (1000 * 60 * 60 * 24 * 365.25);

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4375));
    diff -= months * (1000 * 60 * 60 * 24 * 30.4375);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById('love-timer').innerText = 
        `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}
updateTimer();
setInterval(updateTimer, 1000);

// Music player: accessible controls
const audio = document.getElementById('background-music');
const playBtn = document.getElementById('playBtn');
const audioStatus = document.getElementById('audioStatus');

function toggleAudio() {
    if(audio.paused) {
        audio.play();
        audioStatus.textContent = "Playing";
        playBtn.textContent = "⏸️";
    } else {
        audio.pause();
        audioStatus.textContent = "Paused";
        playBtn.textContent = "▶️";
    }
}
playBtn.addEventListener("click", toggleAudio);

// Space/Enter key for accessibility on music play button
playBtn.addEventListener("keydown", e => {
    if(e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleAudio();
    }
});

// Auto-start on load, but respect browser policies
window.addEventListener('DOMContentLoaded', ()=>{
    playBtn.textContent = "⏸️";
});
