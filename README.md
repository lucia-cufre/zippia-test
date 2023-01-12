# URL shortener app by Lucía Cufré Aman

### Install dependencies

```
# Backend deps
cd backend
npm install
create a .env file and add your MONGO_USERNAME, MONGO_PASSWORD and BASE_URL information

```

### Run Server

```
into backend folder run the command:
npm run server
```

## Details about the API(s) created

I implemented NodeJS, Typescript and database MongoDB to create this URL shortener app. 
I started installing all the dependencies, and creating the connection with MongoDB(this connection is found in the config folder). Following, I configured the app.ts file with what was needed and create the models and services that I would use in the rest of the development.
Finally, create the business and controller folders and files where the endpoints logic is store.
In the urlBusiness file are all the logics and rules for the endpoints, meanwhile in the urlController file is where the requests are received and the responses are return.