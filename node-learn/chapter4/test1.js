let EventEmitter = require('events').EventEmitter;
let util = require('util');
util.inherits();
class AudioDevice{
    play() {
        console.log('is playing');
    }
    stop() {
        console.log('stop');
    }
}

class MusicPlayer extends EventEmitter {
    constructor() {
        super();
        this.playing = false;
    }
    
}

let musicPlayer = new MusicPlayer();
let audioDevce = new AudioDevice();

musicPlayer.on('play', () => {
    this.playing = true;
    audioDevce.play();
})

musicPlayer.on('stop', () => {
    this.playing = false;
    audioDevce.stop();
})

musicPlayer.emit('play', 'The Roots- the fire');

setTimeout(() => {
    musicPlayer.emit('stop');
}, 1000);