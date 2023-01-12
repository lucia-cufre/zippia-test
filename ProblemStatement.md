Problem Statement
Suppose we are a video streaming service and we have hundreds of millions of videos. We allow our users to share those videos and for that purpose, we want to have a URL shortener app.
This URL shortener app should be implemented in NodeJS and uses MongoDB to store long/short URL mapping. The app server generates a short URL when the long URL is given and provides a long URL based on the given short URL. These services are provided by RESTful API(s)
Some of the things to keep in mind while designing/implementing the system:
1. For the long URL we should allocate 2 KB (2048 bytes)
2. The overall length of short URL should be 22 bytes which include 11 bytes of shortened string and another 11 bytes for the prefix(e.g. www.us.com/)
3. Each short URL generated should have an expiry of 24 hours associated with it
4. We should be able to horizontally scale the system by putting N app servers
5. Assume we have around 30 million active users per month so this gives an idea about data capacity model

Instructions
Database server address, shortened URL expiry should be configurable
The server should create the database and required collection(s) if they don't exist
It should have README file that explains how to install dependencies, start the server and some details about the API(s) created
No need to share the database dump when submitting the solution
To submit the solution, create the public GitHub repository, push your code there and share the link

Goal
To check your programming, database, REST API skills
To check the ability to create a solution that can scale