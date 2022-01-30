# Productivity shortcuts

## Iterm2

### Shortcuts

- `Command + tab`: open new tab
- `Command + number or Command + ->/<-`: move between tabs
(who needs tmux!!)
- `Command + d`: open split pane horizontal
- `Shift + Command + d`: split pane vertical
- `ctrl + d`: close this iterm pane
- `Shift + arrow key`: move between panes 
(I customized this by going to Preferences/profiles/panes)

### Hotkey Window

To configure ITerm 2 hot key window.
1. Open iTerm2
2. Go to `preference > Keys > Hotkey`
3. "Create a Dedicated HotKey Window"
4. On the Hotkey, choose the shortcut by holding Ctrl and h. Then click ok to create
5. `Ctrl + h` to open use hotkey window

### Cool things to configure

1. Configure iterms to either be transparent or use background image. (Preferences>profile>(select the correct profile)>windows)
2. Use the ubuntu colors! (Preferences>profile>colors)

## Chrome
### Shortcuts
- `Cmd + t`: open new tab
- `Cmd + n`: new window
- `Cmd + shift + n`: new igconito window
- `Cmd + number`: move between tabs
- [https://support.google.com/chrome/answer/157179?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Ctab-and-window-shortcuts]()
    - ctr + tab: jump to right tab
    - Ctrl + shift + tab: jump to left tab
- `cmd+y`: history

### Extensions
- Use Ubuntu theme
- Use [https://chrome.google.com/webstore/detail/shortkeys-custom-keyboard/logpjaacgmcbpdkdchjiaagddngobkck?hl=en](ShortKeys) extension to build custom
shortcuts.
    - `shift+left`, `shift+right` to go back and go forward (in url)
    - `command+left`, `command+right` to move between tabs.
    - Note: there're some issues with command on a new tab: [https://github.com/mikecrittenden/shortkeys/issues/44](). The solution is
    to use Chrome native shortcut UI via this extension. See bottom of this page [https://github.com/mikecrittenden/shortkeys/wiki/How-To-Use-Shortkeys](). Basically, need to go to [chrome://extensions/shortcuts]() and configure the shortcut there instead.

## Mac 

### Shortcuts

- Open spotlight search
`Cmd + Space`

- Open new iterms at this folder
`Shift + Cmd + Option + N`

- Undo
`Command + Z`

- Redo
`Command + Shift + Z`

- In finder, do
`Shift + Cmd + G`: to be able to navigate to hidden folders
- `Cmd + Tab` switch between apps.

### Spectacle

Window manager. 
It shows all the shortcuts in the app. 
Move left/right, move top left/right, move bottom left/right, move center, move full-screen

### Mac Spaces & Mission Control

- Ctrl + Up: see the mission control to create new workspaces
- Ctr + <-/->: Moving between spaces
- Ctr + Down: see all instances of this app (e.g. multiple windows of Chrome)


## VSCode

### Shortcuts

To change keyboard shortcuts. Open command palette and search for keyboard shortcuts

Trick to find out what the command's name for a key binding. E.g. I don't know what the name of the command associated with `Cmd + W`. Go to keyboard shortcuts, search for tab and pick a random tab command that has no key binding. Then, try to add `Cmd + W` key binding to it. VSCode will warn that there are already existing commands and you can see what they are. Alternatively, put the command in bracket and search in keyboards i.e. search for `"cmd + w"`

Useful reference: [https://zellwk.com/blog/useful-vscode-keyboard-shortcuts/]()

- `Open command Palette`
Cmd + Shift + P



- `Go to File` (Search for files in this project)
Cmd + p


- Toggle the sidebar
Cmd + b

- `Go to symbol in workplace` (search for variables)
Cmd + t

- `Search`
    - Cmd + f: within a file
    - Cmd + Shift + F: within all files (in this project)


- `File: New Untitled File`
Cmd + n

- `Delete file`
"Cmd + Delete" when clicking on the file from the explorer (Cmd + b)

- Move between panes
Cmd + 1, Cmd + 2

- `Close window` (Delete Tab)
Cmd + W

- `split editor`
Cmd + \

- `Open new external monitor`
Shift + Cmd + C
    - Change the default terminal in vscode to iterm
[https://stackoverflow.com/questions/29957456/change-default-terminal-app-in-visual-studio-code-on-mac]()


- Jump tabs Within a pane
    - Shift + Cmd + [
    - Shift + Cmd + ]
    - Or with Ctrl + 1, Ctrl + 2

- `Move lines`
Option + up or down

- `Select mutiple lines`
Shift + arrow keys

- `Move lines up down`
Option + up/down arrows

- Move files from one split window to another ([https://stackoverflow.com/questions/44018175/hotkey-to-move-a-tab-from-one-of-two-split-editors-to-another]())
    - workbench.action.moveEditorToNextGroup View: Move Editor into Next Group:
  remapped to -> + ->
    - workbench.action.moveEditorToPreviousGroup View: Move Editor into Previous Group: remapped to <- + <-

### Configure

1. Make vscode transparent by installing vibrancy. Can see through the background
2. Use bearded or spotify or github themes 
3. Use the (anime) background extension 
4. (Of course) use vim extension (with vimrc linked! Can config this in user settings)
5. Use github copilot (It's insanely smart. Holy smoke!)
6. Use extensions for specific language (e.g. Python, Javascript suppport have separate extensions).


## Vim

### Shortcuts

- Move to end of line
$

- Move to the end of line and enter insert
Shift + a

- Move to the beginning of line
0

- Move to the beginning of line and enter insert
Shift + i


- New line below and insert
o

- New line above and insert
Shift + o

- All the yank and delete stuff
    - y, d
    - yy: yank line
    - dd: delete line
    - p: paste
    - yw: yank word
    - yiw: yank (inner) word.
    - Similarly,
    - dw, diw, vw, viw (visual select word).

- The difference between yw and yiw is that for yw you need to be at the
beginning of the word. For yiw, you can be in a character inside a word.

- Undo
u

- Redo
Ctrl + r

- Go to definition (Vim)
gd

- Jump back (Vim)
Ctrl + o

- Jump forward (Vim)
Ctrl + i

- Code folding
    - zc: close
    - zo: open
    - za: toggle the the fold


- Go to the top
gg

- Go to bottom
Shift + g

- Move to next/back brackets
Shift + [, Shift + ]

- Search the current word under cursor
*

- Repeat last command (work sometimes!)
.

- When searching 
    - n: to next
    - shift + n : to go back

- When doing auto-completion
    - shift + n: go to the next suggestion
    - shift + p: previous suggestion

- Insertion
    - i: insert before cursor
    - a: insert after cursor
    - s: delete word and enter insert
    - x: delete word
    - Shift + i: insert beginning of line
    - Shift + a: insert end of line

- f + character: jump on that character within this line
- t + character: jump to before character within this line
- e: get to the end of a word
- %: jump to matching brackets like (, ) or {, }
- __tip__: deleting args of function?
    - Use d t then ).

- Ctrl + a: increment a number under cursor
- Ctrl + x: decrement a number under cursor
- Shift  + ~ : toggle capitalization of word
- Capitalize the whole word:
    - Shift + v: to visualize highlight the word
    - Then, Shift + U: to capitalize the word

### Commands

__Panes__

- :sp or :split for horizontal pane split
- :vs or :vsplit for vertical split
- :q or Ctrl+w C to close the pane
- Ctrl+w s: horizontal split
- Ctrl+w v: vertical split

__Sourcing files__

`:so nameOfTheFile` in vim to source a .vimrc or something.vim file
or `:so %` to source the current file 

### Macros
__Macros__: combinations of keys

Store macros to register
1. qa (store to register a)
2. then type some command
3. q finish recording macro
4. @a repeat last op from register


### Packages

Use Vundle [https://github.com/VundleVim/Vundle.vim]() to install packages. Usually, we put `Plugin "something"` in .vimrc within the Vundle bracket, then do
`:so %` and `:PluginInstall`. Then the package is ready to use! We can even edit the package in `~/.vim/bundle/SpecificPackagename`.

### Install color theme
Download a something.vim from github. Then put that into ~/.vim/colors. Then, we can use ":colorscheme something" to set the color.

### Primageon

[https://www.youtube.com/channel/UC8ENHE5xdFSwx71u3fDH5Xw]()
The goat!!

[https://www.youtube.com/watch?v=nnhqVDIx-go&ab_channel=ThePrimeagen](): More navigation

### Configure 

Configure the file `.vimrc` in the root directory


