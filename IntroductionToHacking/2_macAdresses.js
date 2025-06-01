/* 
    - one address mac is and identifier of 48 bits what correspond in a unique way to a card o network device
    - it is also named as physic direction, it is unique for every device

    - example of a mac address
        ether 00:45:e2:6c:ad:a7
              00:45:e2 : organization unique identifier (OUI)
              6c:ad:a7 : network interface controller specific (NIC)
*/


/* 
    * scanning localnet
        - install arp-scan
        - execute : arp-scan -I wlp1s0 --localnet
                             -I : indicating network interface wlp1s0
*/