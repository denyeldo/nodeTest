# nodeTest

Database used is neddb
nodejs is express based running on port 3000

Docker image has been pushed into docker hub if we are using another cloud provider we can use things like ECR in AWS etc.

So instruction to run are as below:
1. docker pull pmeldo/eldo:webnode
2. docker run -p 49167:3000 -d pmeldo/eldo:webnode 
3. The collection can be used to run all the commands i.e. POST, GET with (key) and  (key and timestamp)
