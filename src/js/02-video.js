import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',  throttle( e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    }, 1000)
    );

player
.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
.catch(function (error) {
    console.error(error)
});

// var throttle = throttle(localStorage.setItem, 50000, {trailing: true});
// player.on('timeupdate', throttle(function(data) {
//     window.localStorage.setItem("videoplayer-current-time", data.seconds);
// }, 250));