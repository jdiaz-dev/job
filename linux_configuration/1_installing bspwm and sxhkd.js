/* 
    * tool instalation
    apt install build-essential git vim xcb libxcb-util0-dev libxcb-ewmh-dev libxcb-randr0-dev libxcb-icccm4-dev libxcb-keysyms1-dev libxcb-xinerama0-dev libasound2-dev libxcb-xtest0-dev libxcb-shape0-dev

    - to list packages to upgrade
        apt list --upgradable

        never to realize apt upgrade in parrot (it will breack everthing)

     
    - to locate paths of executables files (void to use sudo apt upgrade in parrot)
        which parrot-upgrade

    - to create empty files
        touch /usr/bin/parrot-upgrade

    - to give execution permisions to a file
        chmod +x /usr/bin/parrot-upgrade
        
    - cloning a project of baskerbille that is bspwm
        git clone https://github.com/baskerville/bspwm.git
            - we go to the previous repository and execute make
            - execute sudo make install
            - execute the same commands for the next repository

    - cloning sxhkd (to custom shortcut)
        git clone https://github.com/baskerville/sxhkd.git

    
*/



