/* 
    - install packages, if there are poblems with python3-sphinx, omit it
        apt install cmake cmake-data pkg-config python3-sphinx libcairo2-dev libxcb1-dev libxcb-util0-dev libxcb-randr0-dev libxcb-composite0-dev python3-xcbgen xcb-proto libxcb-image0-dev libxcb-ewmh-dev libxcb-icccm4-dev libxcb-xkb-dev libxcb-xrm-dev libxcb-cursor-dev libasound2-dev libpulse-dev libjsoncpp-dev libmpdclient-dev libuv1-dev libnl-genl-3-dev

    - clone recursively
        git clone –recursive https://github.com/polybar/polybar

    - go to polybar and exeucute create a directory
        mkdir build

    - go to build and execute
        cmake ..

    - execute command
        make -j$(nproc)
            nproc: 
                - nproc is a simple Unix command which is used to print the number of processing units available in the system or to the current process.
                - proc is a system command
                - the output of make will be displayed through nproc
                
    - we can check that polybar does not exists as binbary in the system
        which polybar

    - the next command will isntall polybar
        sudo make install
            -it was installed in /usr/......rest


*/