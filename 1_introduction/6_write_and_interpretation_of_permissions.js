/* 
    * avoiding override the content of a file
        - touch file.txt
        - echo "Hello, World!" > file.txt
        - echo "Bye" > file.txt  // it will overwrite the content of file.txt
        - echo "Bye" >> file.txt  // to avid override the content of  file.txt

*/
/* 
    to remove file 
        - rm file.txt

*/

/* 
    creating file with vi
        - vi file.txt
        - i : to insert text
        - esc : to exit from insert mode
        - :wq : to write and quit
        - :q! : to quit without saving changes

*/

/* 
    * listing files with details
        ls -l
        result : -rw-rw-r-- 1 polsito polsito   46 ago 21 10:17 file.txt
                              polsito: is the owner of the file
                              polsito: is the group of the file

    * division of  permissions
        -rw-rw-r--

          1   2   3
        -rw-|rw-|r--  : it is the division of the previous permissions in file.txt
                    1. permission of owner: rw- (owner can read and write, but not execute)     
                    2. group permissions: rw- (group users can read and write, but not execute)
                    3. other permissions: r-- (other users can read, but not write and execute)



*/