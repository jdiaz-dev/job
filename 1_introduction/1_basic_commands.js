/*
	to check what is my user group
		id

	- when we are hacking we can check some groups can exists groups potentially risk to scale privileges to become the root user
	- the unique a pontential risk is sudo group
	- sudo has the most higher privilegue to system level	
	- when we use sudo we are storing a temporal token for the system not require us the password

	- all he groups displayed we can check in 
		cat /etc/groups
	- we can verify that cat is aliased
		 which cat
	- when we use whoami we only saw the relative path, to check absolute path we can use 
		which whoami

	- to check content of variable enviroment
		echo $PATH

	- the next path that is displayed:
		/home/pol/.local/bin:/snap/bin:/usr/sandbox/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/usr/share/games:/usr/local/sbin:/usr/sbin:/sbin:/opt/kitty/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
	  is used to searhc /usr/bin at moment to execute "whoami"

	- another way to execute cat command is:
		/bin/cat /etc/group

	- we can pipe the result of the previous command to grep
		/bin/cat /etc/group | grep "floppy" -n
											-n : it will display the code line inside of file
											
	- we can use /bin/batcat insted of cat to use the relative path (becouse it include bin) insdead of absolute path 


*/
