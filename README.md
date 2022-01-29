# Productivity shortcuts

## Hotkey Window (iTerm2)

Also remember to configure ITerm 2 hot key window.
1. Open iTerm2
2. Go to preference > Keys > Hotkey
3. "Create a Dedicated HotKey Window"
4. On the Hotkey, choose the shortcut by holding Ctrl and h. Then click ok to create
5. Ctrl + h to open use hotkey window

## Mac Shortcuts

Open spotlight search
Cmd + Space

Open new iterms at this folder
Shift + Cmd + Option + N

Undo
Command + Z

Redo
Command + Shift + Z

In finder, do
Shift + Cmd + G: to be able to navigate to hidden folders

## VSCode

`Open command Palette`
Cmd + Shift + P

To change keyboard shortcuts. Open command palette and search for keyboard shortcuts

Trick to find out what the command's name for a key binding. E.g. I don't know what the name of the command associated with `Cmd + W`. Go to keyboard shortcuts, search for tab and pick a random tab command that has no key binding. Then, try to add `Cmd + W` key binding to it. VSCode will warn that there are already existing commands and you can see what they are. Alternatively, put the command in bracket and search in keyboards i.e. search for `"cmd + w"`


https://zellwk.com/blog/useful-vscode-keyboard-shortcuts/

`Go to File` (Search for files in this project)
Cmd + p


Toggle the sidebar
Cmd + b

`Go to symbol in workplace` (search for variables)
Cmd + t

`Search`
Cmd + f: within a file
Cmd + Shift + F: within all files (in this project)


`File: New Untitled File`
Cmd + n

`Delete file`
"Cmd + Delete" when clicking on the file from the explorer (Cmd + b)

Move between panes
Cmd + 1, Cmd + 2

`Close window` (Delete Tab)
Cmd + W

`split editor`
Cmd + \

`Open new external monitor`
Shift + Cmd + C
Change the default terminal in vscode to iterm
https://stackoverflow.com/questions/29957456/change-default-terminal-app-in-visual-studio-code-on-mac


Jump tabs Within a pane
Shift + Cmd + [
Shift + Cmd + ]
Or
Ctrl + 1, Ctrl + 2

`Move lines`
Option + up or down

`Select mutiple lines`
Shift + arrow keys

`Move lines up down`
Option + up/down arrows

https://stackoverflow.com/questions/44018175/hotkey-to-move-a-tab-from-one-of-two-split-editors-to-another
Move files from one split window to another
- workbench.action.moveEditorToNextGroup View: Move Editor into Next Group:
  remapped to -> + ->
- workbench.action.moveEditorToPreviousGroup View: Move Editor into Previous Group: remapped to <- + <-



## Vim
Move to end of line
$

Move to the end of line and enter insert
Shift + a

Move to the beginning of line
0

Move to the beginning of line and enter insert
Shift + i


New line below and insert
o

New line above and insert
Shift + o

All the yank and delete stuff
y, d
yy: yank line
dd: delete line
p: paste
yw: yank word

Undo
u

Redo
Ctrl + r

Go to definition (Vim)
gd

Jump back (Vim)
Ctrl + o

Jump forward (Vim)
Ctrl + i


Code folding
zc: close
zo: open
za: toggle the the fold


Go to the top
gg

Go to bottom
Shift + g

Move to next/back brackets

Shift + [, Shift + ]

Search the current word under cursor
*

Repeat last command (work sometimes!)
.

Store macros to register
qa (store to register a)
then type some command
q finish recording macro
@a repeat last op from register

:sp or :split for horizontal pane split
:vs or :vsplit for vertical split
:q or Ctrl+w C to close the pane
Ctrl+w s: horizontal split
Ctrl+w v: vertical split

When searching 
n: to next
shift + n : to go back

When doing auto-completion
shift + n: go to the next suggestion
shift + p: previous suggestion

Insertion
i: insert before cursor
a: insert after cursor
s: delete word and enter insert
x: delete word
Shift + i: insert beginning of line
Shift + a: insert end of line

__Sourcing files__
:so nameOfTheFile in vim to source a .vimrc or something.vim file
or :so % to source the current file 

__Installing color themes__
Download a something.vim from github. Then put that into ~/.vim/colors. Then, we can use ":colorscheme something" to set the color.

_Primageon_
https://www.youtube.com/channel/UC8ENHE5xdFSwx71u3fDH5Xw

Configure .vimrc in the root directory

__More navigation__: 
https://www.youtube.com/watch?v=nnhqVDIx-go&ab_channel=ThePrimeagen

f + character: jump on that character within this line
t + character: jump to before character within this line
e: get to the end of a word
%: jump to matching brackets like (, ) or {, }
__tip__: deleting args of function?
Use d t then ).

Ctrl + a: increment a number under cursor
Ctrl + x: decrement a number under cursor

Shift  + ~ : toggle capitalization of word

Capitalize the whole word:
Shift + v: to visualize highlight the word
Then
Shift + U: to capitalize the word

## Spectacle
Window manager. 
It shows all the shortcuts in the app. 
Move left/right, move top left/right, move bottom left/right, move center, move full-screen

## Mac Spaces & Mission Control

Ctrl + Up: see the mission control to create new workspaces
Ctr + <-/->: Moving between spaces
Ctr + Down: see all instances of this app (e.g. multiple windows of Chrome)

## Iterm
Command + tab: open new tab
Command + number or Command + ->/<-: move between tabs
(who needs tmux!!)
Command + d: open split pane horizontal
Shift + Command + d: split pane vertical
ctrl + d: close this iterm pane

## Cool stuff to configure

__VSCodes__
1. Make vscode transparent by installing vibrancy. Can see through the background
2. Use bearded or spotify or github themes 
3. Use the (anime) background extension 
4. (Of course) use vim extension (with vimrc linked! Can config this in user settings)
5. Use github copilot (It's insanely smart. Holy smoke!)

__Iterms__
1. Configure iterms to either be transparent or use background image. (Preferences>profile>(select the correct profile)>windows)
2. Use the ubuntu colors! (Preferences>profile>colors)
