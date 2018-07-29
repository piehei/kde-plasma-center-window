# Center window in KDE Plasma using KWin scripting

This is a very simple KWin script that does three things via shortcuts that the user can control:

* resizes the current window to 100 % height and 50 % width of the screen
* grows it horizontally if needed in 40 px steps
* shrinks it horizontally if needed in 40 px steps

I use this functionality every day with my 27" 2K screen. It's super useful to not have your web browser or what not take the whole horizontal space. The growing and shrinking are extremely useful, too.

# Installation

Clone this repo somewhere. Then just run plasmapkg2 --install . inside the directory.

The script itself is SUPER easy to follow so checkout contents/code/main.js and customize it to fullfil your needs.
