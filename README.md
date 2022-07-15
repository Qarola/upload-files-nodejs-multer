### File Upload in Node JS - Express using Multer

```sh
Create Node JS Application Directory

 $ mkdir file-upload
 $ cd file-upload

 ```
```sh
 Install Express Generator
 $ npm install -g express-generator

```
```sh
Install Express Application
$ npx express --view=ejs
```
```sh
 Install Dependencies
 $ npm install
 ```

```sh
Install Multer Library
$ npm install --save multer
This command will download and install Multer Library in your Node.js Express Application. With the help of Multer library we can able to add file upload feature in Node.js Express library this is because Multer is a Node.js Middleware for handle multipart/form-data, which is mainly used for uploading files to the server.
```
```sh
Create Route for Load File Upload Form
routes/fileupload.js

```
```sh
Set New Route file Rule in app.js
var fileuploadRouter = require('./routes/fileupload');
```

```sh
Create File Upload File
In this step we need to create new template file under views directory. Under this directory file has been used for display html output in the browser.
views/fileupload.ejs

When we have select file from local computer and click on upload file then it will send file upload request to post routes of fileupload.js file.
```

```
Handle File Upload Request
Under this step we have to create post routes for handle file upload request. So we have to create post routes under routes/fileupload.js file.

```

```sh
Display Uploaded File
After uploading file, now we need to display uploaded image on the web page. So for display uploaded image on the web page, here we will use session flash message.

So first we need to download and install express-session and connect-flash module under node express application. So for this we have go into command prompt and run following command. So this command will download and install express-session and connect-flash module in node express application.

$ npm install connect-flash express express-session --save
```
```sh
$ npm start

http://localhost:3000/fileupload

```