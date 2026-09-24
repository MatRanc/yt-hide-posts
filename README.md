# Hide YouTube Posts

A tiny userscript that hides the **Latest YouTube posts** shelf (community posts and polls) from the YouTube home feed and search results.

## Install

1. Install a userscript manager: [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge) or [Violentmonkey](https://violentmonkey.github.io/).
   - On Chrome, you also need to turn on **Allow User Scripts** in the extension's details page (`chrome://extensions` → Tampermonkey → Details).
2. **[Click here to install the script](https://raw.githubusercontent.com/MatRanc/yt-hide-posts/main/yt-hide-posts.user.js)** and accept the prompt.

Tampermonkey checks this repo for updates automatically.

## How it works

A single CSS rule, using `:has()`, hides any feed shelf that contains a post. Posts on a channel's own **Posts** tab are left alone.

## License

[MIT](LICENSE)
