// ==UserScript==
// @name         Hide YouTube Posts Shelves
// @namespace    https://github.com/MatRanc/yt-hide-posts
// @version      1.2.0
// @description  Hides the "Latest YouTube posts" shelf from the YouTube home feed and search results.
// @author       MatRanc
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/MatRanc/yt-hide-posts/main/yt-hide-posts.user.js
// @updateURL    https://raw.githubusercontent.com/MatRanc/yt-hide-posts/main/yt-hide-posts.user.js
// ==/UserScript==

// ponytail: CSS :has() hides the shelf that holds the posts, even when YouTube adds it later. No JS observer needed.
GM_addStyle(`
  ytd-rich-section-renderer:has(ytd-post-renderer, ytd-backstage-post-thread-renderer),
  ytd-shelf-renderer:has(ytd-post-renderer, ytd-backstage-post-thread-renderer),
  ytd-reel-shelf-renderer:has(ytd-post-renderer),
  grid-shelf-view-model:has(ytd-post-renderer, ytd-backstage-post-thread-renderer) {
    display: none !important;
  }
`);
