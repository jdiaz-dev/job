/* 
    * file descriptor: 
        - A file descriptor in Linux (and UNIX-like systems) is a simple integer handle used by a process to access files and other I/O resources (actual files, network sockets, named pipes, devices, etc) throught a Uniform interface.
        - The kernel can give to any program the same system calls (read(), write(), close()) regardless of the underlying resource.

    * file descriptor numbers:
        - A file descriptor number is just a small integer that the operating system uses to keep track of an open file, socket, or other I/O resource.
            -> 0: standard input (stdin)
            -> 1: standard output (stdout)
            -> 2: standard error (stderr)
            -> 3-9: user-defined file descriptors (can be used for custom files or sockets)

    * Benefits:
        - Simplicity → One API for many types of I/O.
        - Efficiency → Integer lookup is fast.
        - Flexibility → You can redirect data between files, sockets, and devices without changing application code.

    * creating one file descriptor?
        - exec 3<> filesito
            exec: execute a command
            <>: assigning descriptor file with capability to read and write
            >: only write capability
            <: only read capability
            3 : lowest file descriptor number assigned manually to the file
            file: the file to be opened 


    * sending output to a file descriptor
            whoami >&3  (it realize one append to the file)
            pwd >&3

    * to close one file descriptor
            exec 3>&-
*/

/* 
    * example 2:
        exec 5<> data
        whoami >&5
        exec 8>&5 : realizing copies between file descriptors, 8 will have the copy of 5
        pwd >&5
        who -q >&8 : the output will be sent to 8 but 8 is a copy of 5, so the output will be sent to data file
        exec 5>&- : closing the file descriptor 5
        cat /etc/hosts >&5 :as 5 is closed, don't allow append to data
        cat /etc/hosts >&8 :as 8 is open, allow append to data
*/

/* 
    * example 3:
        exec 5<> example
        exec 6>&5- //creating a copy of 6 and closing 5

*/
