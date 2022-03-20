# blogReact
A full stack application with user authentication & authorization where a user can sign up and get stored in a database, then logs in and can start posting his posts for all registered users to see.

## Technologies used

**NODE** for starting the server and installing the dependencies with the built in npm package manager.

**REACT** for creating and running the client side of the application.

**MONGOOSE** for connecting to the MongoDb database where users info is stored.

<sup>NOTE - You need to connect to a MongoDB database.<sup>

**BYCRYPTJS** for password hashing, so that passwords are not stored directly into the database but are hashed before storing.

**EXPRESS** for setting up the server.


## Set Up 

1. First and foremost check whether you have node installed by running 

```
node -v
```

You should get the version of node if it is already installed, else you have to install node from https://nodejs.org/en/ which should take a couple of minutes only.

2. Open up a terminal in your chosen directory and run the following command assuming you have Git installed.
```
git clone https://github.com/genosynth/blogReact.git

```

3. Once the repo is cloned navigate into the **client** folder and run the following command to install the dependencies.

```
npm i
```

4. Once all client dependencies are installed, we will now install the dependencies of the back end by going into the **server** folder and running the same commands.

```
npm i
```

5. Now we need to create a **.env**  into the **server** folder file to insert the credentials for connecting to the database.

<sup>NOTE - The **STRING** inside the quotation marks should be the one you get from the Database of your Mongo DB account after signing in with yoru account.<sup>

```
DATABASE_ACCESS="STRING"
```


6. We now start the server by running the following commands in the **server** folder.

```
node server
```
or if **nodemon** is installed you can run

```
nodemon server
```

If everything is good you should get the following in your terminal which means that server is now up and running.
```
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node app.js`
Example app listening on port 4000
Database Connected
```

7. After the server is running we can now run the client part of the website.

<sup>NOTE - This part is only done in development stage as we are using a server for both the client side and the backend side of the application, so we will need to run the below commands in the client folder.<sup>

```
npm start 
```

8. You can now go to http://localhost:3000/ and you will be able to access the website.