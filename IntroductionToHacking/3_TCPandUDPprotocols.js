/* 
    TCP - protocol oriented to connection
        - provide error verification
        - garaties the data delivery and order that the packages were send 
        - when we speack about TPC, we are speaking about three-way handshake
            SYN > SYN ACK > ACK

        - there are 65535 ports 
        - some times the same applciation is running by different protocols

        - comon ports for TCP 
            21 -> FTP
            22 -> SSH
            23 -> Telnet (it allow to manage one machine remotely as if we are face to the physical machine)
            25 -> SMTP (simple mail transfer protocol), it is used in the email send process
            53 -> DNS
            80 -> HHTP
            443 -> HTTPS
            110  -> (POP3)
            139, 445 -> SMB - commonly used in internal network of bussiness
            143 IMAP 


             */

/* 
    UPD - it is a protocol without connection  
        - it will to garantizate the delivery of data nor check the errors
        
        
        - comon ports for TCP 
        53 - DNS
        69 - TFTP
        161 - SNMP - allow collection privileged information

*/