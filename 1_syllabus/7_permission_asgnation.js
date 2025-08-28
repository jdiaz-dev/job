/* 
    - when you enter to root, if you write cd and after pwd, you will be in the root directory (the same happens with other user, the user entry in his file)
        sudo su
        cd 
        pwd


*/

/* 
    * creating directory as root and assigning permisisons to other users
        sudo su (root)
        mkdir prueba
            - output: drwxr-xr-x 2 root    root    4096 ago 27 17:32 prueba
        chmod o+w prueba
            - now other users can write in the directory

*/

/* 
    * other commands:
    
    - to change between users in ubuntu
        su - otheruser

    - to delete content folder
        rm -r *
            rm: remove
            -r: recursive (remove nested directories)
            *: wildcard (all files and directories in the current directory)
*/

//staeyd min 4