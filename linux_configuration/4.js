/* 
    install more packages
        apt install meson libxext-dev libxcb1-dev libxcb-damage0-dev libxcb-xfixes0-dev libxcb-shape0-dev libxcb-render-util0-dev libxcb-render0-dev libxcb-composite0-dev libxcb-image0-dev libxcb-present-dev libxcb-xinerama0-dev libpixman-1-dev libdbus-1-dev libconfig-dev libgl1-mesa-dev libpcre2-dev libevdev-dev uthash-dev libev-dev libx11-xcb-dev libxcb-glx0-dev

    clone this repository
        git clone https://github.com/ibhagwan/picom.git   (cloning a composition manager)

    we enter to picom directory and execute these commands
        - git submodule update --init --recursive 
        - meson --buildtype=release . build 
        - ninja -C build          (ninja: designed to run builds as fast as possible.)
        - sudo ninja -C build install

    install rofi (Rofi is a window switcher, run dialog, ssh-launcher and dmenu replacement)
        sudo apt install rofi

    check if rofi works
        rofi -show run

    we go to sxhkdrc file and add the shortcut with rofi in the next way 
        #program launcher (ROFI)
        super + d
            rofi -show run

    to go to dashboar staring
        kill -9 -1
        
    we isntall bspwm
        sudo apt install bspwm

    press 
        super + enter
        super + d



*/

/* 
    super = windows 

*/