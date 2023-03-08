# Backend: School Management Systems 📝

Project is just for practice and learning Nodejs

## Get Started 🚀

**Day 01:**

First of all initilize the Package.json by _npm init -y_ first command and write basic code to run the default route ('/').

"**Expressjs and nodejs is all about routing**"

To update a bit on development side we need to add **nodemon** to refresh the changes whenever someone update the code (second command).

Then we needed to add **dotenv** package so we can hide some private variables like port and db and other configurations.

We have seperated the routers by creating a routes folder and within that folder we have seperate groups in which we will call each routes of that group.
_i.e. routes/studentRoutes.js_

**Day 02:**

Now we have seperate routing we have created a sample / mock data (array of objects) for CRUD operation and in future we will replace it with mongoDB.

We have installed another dependency which is very famous to assign a unique id **UUID** and also added bodyParser build in package so when user request an obect it will auto parse into json form

Another thing we have acheived is to add an error handler in it. in the index.js we just need to use app.use(errorHandler) and thats it now for each call it will auto detect the errors and call. we have created the constants file for enum fo all type of errors.

**Day 03:**
We have added the express-async-handler so if anything went wrong our app wont crash it handles the exceptions.

**Day 04:**
We have edited the package.json line to remove the line  "dev": "nodemon index.js" which was causing nodemon to crush unexpectedly.

We have then gone ahead to create the .env file where we will add the PORT number and MONGO_URL for connecting our application with mongo atlas.

We have installed the following dependencies:
- mongoose -> act as a middleware to connect mongo atlas and the website we're creating.
- body-parser -> parse requests from api & convert it into a format you can use to    
  extract required information.
- cors -> prevent client requests  to the api from being blocked by cors policy.





### Dependencies:

    1) npm install --save express
    2) npm install --save-dev nodemon
    3) npm i --save nodemon
    4) npm i --save dotenv
    5) npm i --save uuid
    6) npm i --save express-async-handler
    7) npm i --save body-parser
    8) npm i --save cors
    9) npm i --save mongoose

## Development 🔥

    1) npm start
