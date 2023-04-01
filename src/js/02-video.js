import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const storageKey = 'videoplayer-current-time';

const onTimeupdate = data => {
  localStorage.setItem(storageKey, data.seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));

const currentTime = localStorage.getItem(storageKey);

player.setCurrentTime(currentTime);
