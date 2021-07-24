# nodeTest

Database used is neddb

nodejs is express based running on port 3000

Postman collection in the project can be used to make calls to the service once up and running on your box.

Docker image has been pushed into docker hub if we are using another cloud provider we can use things like ECR in AWS etc.

# Instructions to run the service on the local box are as below:
1. docker pull pmeldo/eldo:webnode
2. docker run -p 49167:3000 -d pmeldo/eldo:webnode 
3. The collection can be used to run all the commands i.e. POST, GET with (key) and  (key and timestamp)
4. docker ps //command lists container id
5. docker logs <container id> // verify logs
