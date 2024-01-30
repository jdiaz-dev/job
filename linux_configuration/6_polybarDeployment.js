/*
	preparing to display the polybar

	cloning a repo
		git clone https://github.com/VaughnValle/blue-sky.git

	we entry to our repo downloaded blue-sky
		cd blue-sky/polybar

	we copy in recursive way to polybar location
		cp -r * ~/.config/polybar/
			-r: recursive
			*: all content

	to load console instructions, we can make the next
		echo '~/.config/polybar/./launch.sh' >> ~/.config/bspwm/bspwmrc
			>> : to put in a specific file

	
	we go in Downloads to the /blue-sky/polybar/fonts and copy to the next path
		sudo cp * /usr/share/fonts/truetype

			
	to apply the changes and load the fonts recently loaded
		fc-cache -v		

	to activate polybar 
		super + alt + r



*/
