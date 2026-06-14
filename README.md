# starry-sky
A pixel-art starry sky with a parallax effect made for an NFC card project.
## Check it out here: https://litlwanderer.github.io/starry-sky/

### What's this for?
I'm going to print out physical cards with art on them, laminate an NFC tag (NTAG213) inside, and write that GitHub Pages URL to it so that when I scan the card, I get a pretty, interactive version of the card.
Will update when I get around to that bit!


Also partly just because I wanted to draw a pretty night sky with the Milky Way. (I've attempted this with watercolour, pen, etc in totally different styles; this is probably my best attempt so far!)

### Browser compatibility
TL;DR: works best on Chrome mobile
| Browser | Mouse | Touch | Gyro |
|---|:---:|:---:|:---:|
| Chrome desktop | **Working** | Untested | Untested |
| Chrome mobile | Untested | Intentionally disabled | **Working** |
| Brave desktop | **Working** | Untested | Blocked by Brave |
| Brave mobile | Untested | **Working** | Blocked by Brave |
| Everything else | Untested | Untested | Untested |


Notes:
- Gyroscope is the intended input method, so if a gyroscope is detected, mouse and touch input are automatically disabled.
- Apparently iOS 13+ needs permission to access gyro. I copy pasted some code to handle this, but I don't have any devices to test it on, so... sorry, iOS users, I have 0 idea whether it works for you or not

### How it works
I drew a layered picture (I used Pixilart) and exported it all in individual layers.


Each layer moves a different amount in response to input, which gives the nice 3d effect

### Credits
- Pixilart as the tool for drawing the pixel art
- This helped with the gyro: https://dev.to/trekhleb/gyro-web-accessing-the-device-orientation-in-javascript-2492
- Claude :P (mainly with the CSS, as always)
- Mozilla Web Documentation was a good reference for the event handlers
