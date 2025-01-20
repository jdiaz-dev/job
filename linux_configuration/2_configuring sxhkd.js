/* 
    - create 2 directories
        mkdir ~/.config/{bspwm,sxhkd}
            ~/ : is is part of bash shorthand
            {} : to create to directories at same time

    - list content of /.config file
        ls -l ~/.config

    - go to bspwm/examples

    - copy bspwmrc in ~/.config file
        cp bspwmrc ~/.config/bspwm

    - copy sxhkdrc in ~/.config file
        cp sxhkdrc ~/.config/sxhkd
 
    - when bspwmrc is yellow color is because it has executiton permision   

    - to edit a file
        nano "filename"

    - we will use a kitty, but it will not be the definitive installation
        kitty is a terminal
        sudo apt install kitty -y

    - change run emulator (terminal to use)
        super + Return (windows + enter)
            kitty

    - change focus the node in the given direction (to change between terminals)
        super + {_,shif + }  {Left,Down,Up,Right}

    - preselect the direction (previsualizate in yellow where we want to open a new process)
                                - SAVITAR( He commonly use ctrl, windows, alt)
        super + ctrl + alt + {Left,Down,Up,Right}
          ......................rest

    - cancel the preselection for the focused node (to cancel the preselection)
        super + ctrl + alt + space


    ================== move and resize ===============
    - comment the 2 first command of move and resize

    - move a floating window
    super + shift + {Left,Down,Up,Right}
                .......rest

    - creating script to resize
    #custom resize
    alt + super + {Left,Down,Up,Right}
        /home/pol/.config/bspwm/scripts/bspwm_resize  {west,south,north,east}   #loading a configuration file

    - ctrl +s to save and ctrl + x to get out


    ================ creating scripts folder of the for the previous path setted  ==================
    - creating a file with executions permisions in:
        /home/pol/.config/bspwm/scripts/bspwm_resize

	- bspwm_recive must be fulled with the content of the next link : 
		https://hack4u.io/wp-content/uploads/2022/09/bspwm_resize.txt

    - giving permisions
        chmod +x !$
        !$: it make reference to the argument of the last command executed


*/


