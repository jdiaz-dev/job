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
    creating file with vi (it is similar to vim?)
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

/* 
    ls -l /etc/passwd  //it file belongs to root
            - output : -rw-r--r-- 1 root root 3051 dic 15  2024 /etc/passwd
            - as you can see other users have read permission, therefore I can read the file
    whoami  // it show polsito user
    echo "Hello" > /etc/passwd 
    nano /etc/passwd  //it show /etc/passwd: is unwritable because it is owned by root

*/

/* 
    ls -l /etc/shadow  //it show shadow group:
            - output : -rw-r----- 1 root shadow 1569 dic 15  2024 /etc/shadow
            - as you can see other users don't have any permission, therefore I can't read the file

    cat /etc/login.defs | grep "ENCRYPT_METHOD"  //it show the encryption method used for passwords

*/
