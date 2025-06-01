/* 
    - the process to send a request to a server is similar to send a package by correo
    - before to the request arrive to the end destiny, it will pass by different steps (OSI model) before to arrive to the end destiny
    
    - the OSI model are 1 standard to network model
        - the OSI model group the protocols in specific groups or layers 

        OSI model and its layers
            7. application
                - layer to consume data
                - we can send email, transfer files, access to websites, connect to remote machine
                - example: HTTP, FTP
            6. capa de presentacion
                - traduce all information to allow to be used by the next layer
                - convert code to characters
                - data conversion and comprenssion 
                - if it is requried cifrate the data
            5. capa de session
                - establish and end the connection between hosts
                - provide support as register of logs and realizate security tasks
            4. capa de transporte
                - is as a trucks and carteros
                - garantizate the delivery and reception of the packages that provide from layer 3
                - manage the transport of the packages to garantizate the sucess in the reception and send of the packages
                - example : TCP, UDP
            3. capa de red
                - prioritzate what packages will be send first
                - it is the most active layer of internet
                - it this layer we have the the IP address of origin and destiny
            2. capa de enlace (actua como inspector),
                - check if tis has a defect with its format and control the flow used to send the packages
            1. physic (carreteras, cables de red)
        

*/