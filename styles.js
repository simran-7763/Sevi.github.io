html {
    scroll-behavior: smooth;
}
body {
    font-family: 'Poppins', sans-serif;
    background: #18182a;
    color: #fff;
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1100px;
    padding: 20px 10px 80px 10px;
    position: relative;
    z-index: 1;
    gap: 36px;
}
@media (min-width: 900px) {
    .container {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        padding: 40px;
        gap: 70px;
    }
}
.photos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
    width: 100vw;
    max-width: 380px;
}
@media (min-width: 600px) {
    .photos {
        max-width: 500px;
        gap: 18px;
    }
}
@media (min-width: 900px) {
    .photos {
        margin-right: 0;
        max-width: 320px;
        grid-template-columns: 1fr;
    }
}
.photo {
    border-radius: 15px;
    overflow: hidden;
    aspect-ratio: 1/1.17;
    position: relative;
    box-shadow: 0 4px 15px rgba(0,0,0,0.36);
    background: #2a2a3e;
    outline: 3px solid transparent;
    transition: outline .2s;
}
.photo:focus-within, .photo:focus {
    outline: 3px solid #ff92c2;
}
.photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.photo::after {
    content: '❤️💖';
    position: absolute;
    top: 7px;
    left: 11px;
    font-size: 1.6em;
    opacity: 0.7;
    pointer-events: none;
}
/* Message Section */
.message-section {
    width: 100%;
    max-width: 520px;
    text-align: center;
}
@media (min-width: 900px) {
    .message-section {
        text-align: left;
    }
}
.message-section h1 {
    font-size: 2.1em;
    margin-bottom: 14px;
    color: #ffeaff;
    font-weight: 600;
    letter-spacing: -0.5px;
}
.timer {
    background: #222134;
    border-radius: 16px;
    padding: 11px 23px;
    display: inline-block;
    font-size: 1.13em;
    color: #ffb4e6;
    font-weight: 600;
    margin-bottom: 22px;
    transition: background .2s;
}
.message {
    margin-top: 14px;
}
.message p {
    font-size: 1.11em;
    line-height: 1.7;
    color: #d3d3d3;
    margin-bottom: 15px;
}
/* Music player */
.music-player {
    position: fixed;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    background: #242448;
    border-radius: 45px;
    padding: 11px 25px;
    display: flex;
    align-items: center;
    box-shadow: 0 5px 17px rgba(0,0,0,0.26);
    gap: 12px;
    z-index: 2;
    min-width: 175px;
}
.music-player .play-icon {
    font-size: 1.6em;
    color: #49d4ff;
    margin-right: 8px;
}
.music-player span.player-title {
    font-size: 1em;
    color: #ffeaff;
    font-weight: 600;
}
.music-player .visually-hidden {
    position: absolute;
    left: -9999px;
}
.music-player button {
    border: none;
    background: transparent;
    color: #49d4ff;
    font-size: 1.4em;
    cursor: pointer;
    margin-right: 13px;
    transition: color .2s;
}
.music-player button:focus {
    outline: 2px solid #ffb4e6;
}
/* Accessibility: keyboard-focus on play button */
.music-player:focus-within {
    box-shadow: 0 0 0 3px #ffb4e6;
}
/* Falling hearts */
.hearts {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
}
.heart {
    position: absolute;
    font-size: 2em;
    color: #ff92c2;
    opacity: 0.45;
    animation: fall 6s linear infinite;
}
@keyframes fall {
    0% { transform: translateY(-100%);}
    100% {transform: translateY(100vh);}
}
/* Accessibility/contrast - High contrast on focus */
a:focus, button:focus {
    outline: 2px solid #f80084 !important;
}
audio {
    display: none;
}
.skip-link {
    position: absolute;
    left: -999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
.skip-link:focus {
    position: static;
    left: auto;
    width: auto;
    height: auto;
    margin: 10px;
    background: #ffb4e6;
    color: #222134;
    z-index: 10;
    padding: 8px 14px;
    border-radius: 4px;
}
