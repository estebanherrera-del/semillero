const canvas = document.getElementById("Game");
const ctx = canvas.getContext("2d");
const WIDTH = canvas.widht;
const HEIGHT = canvas.height;
const paddle = {w:10, h:90, speed:6};
const ballRadius = 8;
let left = {x:20, y:(HEIGHT-90)/2, vy:0, score:0};
let right = {x:WIDTH-20-10, y:(HEIGHT-90)/2, vy:0, score:0};
let ball = {x:WIDTH/2, y:HEIGHT/2, VX:5, VY:3, r:ballRadius};
let paused = false;
let playing = true;
let modeAI = false;
aiDifficulty = parseFloat(document.getElementById("aiRange").value);

//DOM
const scoreA = document.getElementById("scoreA");
const scoreB = document.getElementById("scoreB");
const modeLabel = document.getElementById("modeLabel");
const toggleAI = document.getElementById('toggleAI');
const toggleSoundBtn = document.getElementById("toggleSoundBtn");
const aiRange = document.getElementById('aiRange');

// Audio web para el juego
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = AudioContext ? new AudioContext() : null;
let soundEnable = true;
let ambientInterval = null;
let ambientGainNode = null; 

//funcion para interactuar con el audio por medio de navegadores
function soundEnableAudioOnIteraction() {
    if (!audioCtx) return;
    if (audioCtx.state ==="suspended") {
        const resume = () => {
            audioCtx.resume().then(() => {
                startAmniet();
            }).catch(()=>{});
            window.removeEventListener("pointderdown", resume)
            window.removeEventListener("keydown", resume);

        };
        window.removeEventListener("pointderdown", resume)
         window.removeEventListener("keydown", resume);

        
    } else {
        starAmbient();
        
    }
    
}
