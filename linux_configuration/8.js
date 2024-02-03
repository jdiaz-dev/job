/*
	go to powerlevel10k in google, enter to github repository, and we go to manual installation
		website: https://github.com/romkatv/powerlevel10k

	copy manual installation and apply its echo command
		git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
        echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc

	-press zsh command to start with the installation
		zsh

	-to delete "wellcomome parrot OS", go to nano ~/.zshrc and comment the greeting

	-to void icons on the right side of the power10k, we comment all content in POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS={} , for it yo need to go to 
	 nano ~/.p10k.zsh

	- adding usefull icons on the right side of power10k (go to ~/.p10k.zsh
		context
    	command_execution_time - useful for instance to display how many time I was connected throght ssh
    	status  - usefull for display status of command

	- to enable ssh 
		service ssh start

	- to connect to my localhost throught my ssh
		ssh pol@locahost

	- to disable ssh
		service ssh stop

	- now we apply power10k config to root user (repetat the all previous steps 


*/
