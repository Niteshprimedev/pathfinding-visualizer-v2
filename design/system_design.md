##### System Design Topics:

- Topic 1: Scalability:
    - Vertical Scaling
    - Horizontal Scaling
    - Caching
    - Load Balancing
    - Database Replication
    - Database Partitioning

Lecture 9: Scalability Notes:

Keywords: VPSes, SMTP, FTP,

VPSes: Chop it up in the illusion of multiple systems. Sharing resources in VPSes, Admins have access to all the resources.

VPSes: Amazon EC2 -> Unexpected growth overnight

##### Vertical Scaling:

- CPU
- DISK: (SATA drives, PATA, SIS) they are hardwares.
- RAM

what is the easiest solution when you run out of CPU?
- Get more cpu more, disk but you can only buy enough capacity CPUs.
The world has around 3GHz Capacity of CPUs only. So vertical scaling has its limitations.

- Duo Core: 2 things at twice, 2 machines in laptop
- Quad Core: 4 things at once, 4 machines in laptop

CPU is scheduling the tasks and we can't notice that process. 4 requests per seconds, we are giving the assumptions that it can do multiple things.

SAS drives: 
PATA drives: 75 spinning power.
SATA drives:

**Timeline: Drives SATA, PATA, SAS**

Every facebook updates requires writing to the database and then fetching the data. 
- SSDs: Solid State Drives are more faster than any other drives. 

##### Horizontal Scaling:

- Ceiling eventually, we can architecture accordingly. Rather than getting a few or bigger expensive machines, we can get more machines.

- Server, IP address, and accessing the application on the internet.

Load Balancing: The traffic is balanced among all the servers. 