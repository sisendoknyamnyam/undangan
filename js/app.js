import { guest } from './guest/guest.js';
import { comment } from './comment/comment.js';

document.addEventListener('DOMContentLoaded', () => {
    window.undangan = guest.init();

    window.guest = guest;
    window.comment = comment;
});
