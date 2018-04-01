# Everyday's blog
This is a comprehensive blog site for first-timer blogger to post their blog

## Pre-requisite
To run this app locally, you will need to install NodeJS and MongoDB

### Install NodeJS and MongoDB
If you do not have nodeJS, you need to download from https://nodejs.org/en/download/. After download, you need to install nodeJS

If you do not have MongoDB, you need to download from https://www.mongodb.com/download-center?jmp=tutorials&_ga=2.195617643.630202537.1522615113-910441875.1519615766#community.
Choose Community Server and download the version for your Operating System.

For installing MongoDB, refer to https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#ensure-the-location-of-the-binaries-is-in-the-path-variable

### Running the test
#### Change PORT
open app.js file under the app root directory, change 
```
app.listen(process.env.PORT,, process.env.IP, function(){
    console.log("Server Started!");
})
```
to
```
app.listen(3000, function(){
    console.log("Server Started!");
})
```

Then you will need to start MongoDB by running the following command
```
$ sudo mongodb
```
Then, you will need  to open another terminal and go to the directory where the app.js file is and run
```
$ node app.js
```

Finally, open your browser and type: localhost: 3000

# Author
Cheng Shi - initial work

# Acknowledgment
 - This project is an exercise in Colt Steele's Web Develpment Bootcamp online course from Udemy


