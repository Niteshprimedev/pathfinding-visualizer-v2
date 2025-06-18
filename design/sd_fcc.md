#### System Design Concepts by FreeCodeCamp;

#### Basics:
Computer Architecuter: At the core, computers know only binary numbers 0s and 1s. This is a bit: and 1 byte consists of 8 bits (A,1).

Expanding the memory sizes: Bit, Bytes, KB, MB, GB, TB, PB.
To store the data, we have storages like disks, ssds, and usbs. SSDs are expensive but faster than HDD. 

SDD -> 500MB/ 3k MB per second
HDD -> 80MB/300 MB per second

RAM: Random Access Memory - The data that is currently being used. Primary active data holders: it holds the variables, data structures, and application data. This holds volatile data so once you restart the system then you might lose the data.

RAM Sizes: 4GB, 8GB, 16GB, 32GB, and 64GB.
The RAM speeds are faster than everything: be it SSD but they are not sufficient sometimes for data intensive applications so we take advantage of Cache.

Cache: Reduces load time and increases the application speed drastically. Cache is smaller than RAM, but it is typically MBs, and Cache is even faster than the RAMs and SSDs.

So CPU always goes to Cache first to check the data, first it checks in L1 Cache, then L2 Cache, and then L3 Cache. If data is not found in L3 Cache then it goes to check in RAM.

Cache is to reduce the data access time that's why we store frequently accessed data in Cache.

CPU: Central Processing Unit - It is the brain of the computer, fetches, runs, and processes code or everything. CPU only understands binarys so your compiler does the convert the high level languages code to machine code.

CPU can read and write to almost anything: SSD, Cache, and RAMs.

Motherboard: The motherboard that connects everything.

#### High Level Architecture of a Production Ready Application:

Application:
Step1: CI/CD Pipelines: It deploys the code directly from our local server/machine to the production environment automatically. 

It is configured using Jenkins and Github Actions. Our production app gets millions of data, so we have NGinx load balancer to evenly distribute the data and ensure that our app is working.

Our server is connected to many other servers to manage any dependencies. It can be connected to a storage which can be storing the data that is not running on our production App. 

We also have a monitoring and logging server to ensure that our Prod App is working and serving well.

We use external server for monitoring and logging to reduce the load and the tools like PM2 comes handy here.