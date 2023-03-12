import Player  from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');

const LOCALSTORAGE_KEY = "videoplayer-current-time";


const onPlay = function(time) {
    localStorage.setItem(LOCALSTORAGE_KEY, time.seconds);
    };
    player.on('timeupdate', throttle((onPlay), 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);


      
      
      
      