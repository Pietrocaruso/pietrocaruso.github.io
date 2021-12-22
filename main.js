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
    window.location.pathname = "insultami.html"

}
