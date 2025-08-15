/* 
    - to check ip v4 and v6 of host machine (not internet provider)
        cat /etc/hosts
    
    - to execute 2 commands in parallel (; , && )
        whoami; ls
        whoami && ls  - the secomnd command will only run if the first one is successful
        whoami || ls

    - to  check the state code of one previous command 
        echo $? - if the code is 0 is success

    - to hide the output of one command
        whoami > /dev/null
        whoami 2> /dev/null - to hide the error output
        whoami &> /dev/null - to hide both outputs

    - to run a command in background
        npm run start:dev &> /dev/null & disown

*/