---
title: "Getting started with Node.js and Express web application framework on Bluemix"
date: 2014-09-24
description: Getting started with Node.js and Express web application framework on Bluemix
category: tutorial
---

<div
  class="p-4 border-l-4 bg-amber-50 border-amber-700"
  role="alert"
>
  <h3 class="text-sm font-medium p-0 m-0 text-amber-700">This article is outdated.</h3>
</div>

The purpose of this article is to give you a quick introduction to web application development using node.js and the express web application framework. It will guide you though the process of creating a simple web application and outline the steps involved in deploying this application on Bluemix.

### What is Node.js?

Node.js is a platform for easily building fast, scalable network applications. It uses an event driven, non blocking I/O model that makes it lightweight and efficient.

### What is Express?

Express is a web application framework for Node.js. It provides a minimal set of features required for building web apps yet maintaining the flexibility to extend.

### What is Bluemix?

Bluemix is an open-standards, cloud-based platform for building, managing, and running apps of all types, such as web, mobile, big data, and smart devices.

### Pre-requsites

1. [Node.js](http://nodejs.org)
2. [CloudFoundry deployment tools](https://github.com/cloudfoundry/cli#downloads)
3. [Bluemix account](https://cloud.ibm.com)

### First steps

Ensure that you have node and npm installed and running correctly. To test open a command window and type:

```bash
$ node -v
$ npm -v
```

It should return the version information in each case indicating that the programs are correctly installed.

`npm` is a package manager for node; it makes it easy to install and manage additional node packages that your application may require. npm is a powerful tool as it automatically handles package dependencies.

### Initializing a node application

Every node application has a package.json file that contains a description about the app, module dependencies, start scripts and so on. This is usually the first file created to describe the app and its dependencies.

The package.json file can be created manually provided you know what all fields to include. To make this process simpler, npm offers the init command to create this file for you. To create an app follow these steps:

1. Create a folder in your file system, give it a suitable name. For the purposes of this article the project that we'll be creating is called 'activate'
2. Open a command window/terminal and type npm init
3. Follow the onscreen instructions and fill in all the details about the application.
4. After that is done, you will end up with a package.json file.

An example package.json is shown below:

```javascript
{
    "name": "activate",
    "version": "0.0.1",
    "description": "Node.js + Express app deployed on Bluemix",
    "main": "app.js",
    "scripts": {
        "test": "node app.js"
    },
    "keywords": [
        "node.js",
        "express",
        "bluemix"
    ],
    "author": "Rohit",
    "license": "MIT"
}
```

### Installing dependencies

Our application requires the express node module to build a web application. The npm install command can be used to install this dependency. In the application directory type the following command:

```bash
$ npm install express@3.15.2 --save
```

This will do two things:

1. Download and install express and all of its dependencies to this application's folder. These are stored under the node_modules directory.
2. Creates an entry in the package.json file under the dependencies section.

Here is a look at the updated package.json file:

```javascript
{
    "name": "activate",
    "version": "0.0.1",
    "description": "Node.js + Express app deployed on Bluemix",
    "main": "app.js",
    "scripts": {
        "start": "node app.js"
    },
    "keywords": [
        "node.js",
        "express",
        "bluemix"
    ],
    "author": "Rohit",
    "license": "MIT",
    "dependencies": {
        "express": "^3.15.2"
    }
}
```

Note: Under the scripts section, you have to manually change “test” to “start”; this tells Bluemix the entry point of this application. Once the app has been deployed, Bluemix calls the start script i.e. `node app.js`

### Creating a minimalistic web application

Now that express is installed, we can go ahead and create a minimalistic web application. All this application does is to print out `'hello world'` when the application is accessed. As stated before the entry point to our application will be called `app.js`. Let's go ahead and create a file called app.js and put in the following code:

```javascript
var express = require("express"),
  app = express();

// Port and host configuration
app.set("port", process.env.VCAP_APP_PORT || 3000);
app.set("host", process.env.VCAP_APP_HOST || "localhost");

// Define a default route
app.get("/", function (request, response) {
  response.send("hello world");
});

// Start serving
app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
```

### Code walkthrough

- Step 1: Import the express module into our app; this is done by using the require method call.
- Step 2: Create an app instance by calling the express() method.
- Step 3: Define the port and host settings. While running locally, port is assigned with 3000 as its value and host is assigned `'localhost'`. When deployed on Bluemix, the `VCAP_APP_PORT` and `VCAP_APP_HOST` environment variables are used. These variables are populated by Bluemix
- Step 4: Define a route. A route is nothing but a URL that the client requests; given this URL we need to tell the application what to do. In this case when the default route is entered i.e. '/' then the response `'hello world'` is sent out to the client.
- Step 5: The listen method is called to bind and listen to connections on the given host and port.

Run application locally. Open the terminal, `cd` into the project directory and run:

```bash
$ npm start
```

You should see an output something like this:

```bash
activate@0.0.1 start C:\rohit\node-apps\activate
node app.js
Express server listening on port 3000
```

This indicates that the express server is started and is ready to serve requests on port 3000. Go to http://localhost:3000/ to see the output. Here is a screen grab:

Now that we have this application running locally, the next step is to deploy it on Bluemix.

### Deploying on Bluemix

1. Login to Bluemix web interface
2. Under the dashboard section select Create an app as shown below:
3. In the next screen select SDK for Node.js
4. Key in application information
5. Click create and if everything is successful you should see the application overview screen

As you can see the default route is shown in the overview section, i.e., http://activate.stage1.mybluemix.net/

### Pushing your application to the cloud

The final step is to push your application code to the cloud, i.e., to the Bluemix app that you just created. The pre-requisite for this is to install the cloud foundry deployment tools as mentioned in the pre-requisites section. To verify the cf command line tool's installation; open a terminal and type:

```bash
$ cf -v
```

You should get a response with version information indicating that the installation is successful. Go to the project directory in terminal and follow these steps:

- Connect to Bluemix:

```bash
$ cf api https://api.stage1.ng.bluemix.net
```

- Login to bluemix:

```bash
$ cf login
```

- Push application to cloud:

```bash
$ cf push <app_name>
```

where app_name is the name of the application that you specified during Bluemix app creation process. For this example it will be:

```bash
$ cf push activate
```

The application deployment will be initiated as soon as the push command is run. Bluemix will automatically figure out the application type, read the package.json file and install all dependencies.

TIP: The cf push command copies all the contents of the project directory into the server. At times some files/directories need to be ignored.

In our case the `node_modules` directory need not be uploaded as it will be created dynamically on the server after app deployment. To tell cf to ignore this folder simply create a file called .cfignore in the project root directory with the content: node_modules/

You can add more entries separated by newlines to this file to ignore other folders or files

After successful deployment you can go to the URL mentioned and take a look at your app running on Bluemix.

Congratulations! With a few simple steps and configurations you have seen how easy it is to get started to build applications and deploy it on the Bluemix platform. Go ahead, create apps and share it with the rest of the world.

Cheers!
