var stop_play = false
document.getElementById("waveform").style.width = window.innerWidth / 2 + "px"

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#D2EDD4',
    progressColor: '#46B54D'
});

wavesurfer.on('ready', function () {
    var spectrogram = Object.create(WaveSurfer.Spectrogram);
    spectrogram.init({
        wavesurfer: wavesurfer,
        container: "#wave-spectrogram",
        fftSamples: 1024,
        labels: true
    });
});

wavesurfer.load('luna_0.mp3');


function parla(){


    wavesurfer.playPause();

}

function insultami(){
    if (window.location.pathname.includes("index.html")){
        window.location.pathname = window.location.pathname.replace("index.html","insultami.html")
    }else{
        window.location.pathname = window.location.pathname + "insultami.html"
    }
}
