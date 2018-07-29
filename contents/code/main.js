// based on this work:
// https://www.reddit.com/r/kde/comments/7h6g8e/move_window_to_center_patch/

// checkout KWin scipting tutorial for details:
// https://techbase.kde.org/Development/Tutorials/KWin/Scripting

function growCurrentWindow() {
  var win = workspace.activeClient;
  win.geometry = {
      x: win.x - 20,
      y: win.y,
      width: win.width + 40,
      height: win.height,
  }
}

function shrinkCurrentWindow() {
  var win = workspace.activeClient;
  win.geometry = {
      x: win.x + 20,
      y: win.y,
      width: win.width - 40,
      height: win.height,
  }
}

function setCurrentWindowSize() {
  var win = workspace.activeClient;
  var height = workspace.displayHeight;
  var half = workspace.displayWidth / 2;
  var marginFromLeft = half / 2;

  win.geometry = {
      x: marginFromLeft,
      y: win.y,
      width: half,
      height: win.height,
  }
}

registerShortcut("Make current window size 1/2 of screen", "Set the current window size to 1/2 of screen and center it", "Meta+M", setCurrentWindowSize);
registerShortcut("Grow current window horizontally", "Make current window size 40 px wider", "Meta+.", growCurrentWindow);
registerShortcut("Shrink current window horizontally", "Make current window 40 px narrower", "Meta+,", shrinkCurrentWindow);
