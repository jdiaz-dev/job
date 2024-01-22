/*
	- download hack nerd fonts from nerd fonts

	- move downloaded file (Hack.zp) to /usr/local/share/fonts

	- uncompress Hack.zp file

	- remove Hack.zp file

	- apt install zsh, to be capable to execute script provided by savitar

	-go to ~/.config/kitty

	- create a kitty.conf file and color.ini

	- close kitty terminal and open a new terminal, the sytles should be applied

	- if we go sudo su, we will be using a bash, we need to press zsh to use zsh software


	================= using ZSH 
	- install packages
		apt install zsh-autosuggestions zsh-syntax-highlighting zsh-autocomplete
					zsh-autocomplete : solve with github
		
	- Ctrl + shift + T : it will allow to see in power line format

	- ctrl + shift + alt + t : to rename power line


	================ UPDATING KITTY
	- go to kitty github repository and download linux amd64 binary module in its releases	

	- go to /opt (reserved for instalations) directory, create kitty directory, uncompress downloaded kitty
		mv /home/pol/Downloads/kitty-0.32.0-x86_64.txz .

	- uncompress the content with 7z, after remove
		7z x kitty-0.32.0-arm64.txz

	- we uncompress the next file with tar, after remove
		tar -xf kitty-0.32.0-arm64.tar

	- we enter to bin directory and check version
		./kitty --version

	- we delete outdaded kitty
		apt remove kitty

	- we copy get absolute path and copy
		pwd
		/opt/kitty/bin  ---> copy it
*/

/*
	questions:
		difference between bash, shell and zsh


*/


