import Player  from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');

const LOCALSTORAGE_KEY = "videoplayer-current-time";


const onPlay = function(time) {
    localStorage.setItem(LOCALSTORAGE_KEY, time.seconds);
    };
    player.on('timeupdate', throttle((onPlay), 1000));

const storedTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(storedTime).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            
            break;
    }
});


      
      
      
      