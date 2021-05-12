# Project structure 
## folder layout
This list shows every file needed to make our app perform its use.
```
├── UseCase1.html: The home page of the app that shows the title and the input bar prompting the user for their postal code.
├── UseCase2.html: The page template that creates an output for the database to be loaded and displayed into.
├── index.ejs: Uses HTML formatting with embedded JavaScript to combine the webpage app and the database display together.
├── db-connect.js: This establishes a connection with mysql to gain access to the database and can be used in the command terminal to show what is stored in the database.
├── main.js: The main javascript file that will process query inputs from the user. For example, when the user wants to see the results from the database this file will process this to obtain the database table.
├── package-lock.json: This file is intended to be committed into source repositories.
├── package.json: This stores node packages on file for the user to access what packages have been installed and saved.
├── head.ejs: This is a template for the index.ejs to use to help format the look of the webpage
```
## Software Architecture 
The strcutre of this diagram shows the background processes that will occur when the user accesses the webapp. When the user access the webapp, the webapp will call towards the web server to allow a connection between the user and the database. The database will be requested for access by the user and the database will provide the information as intended by the maintainer towards the webapps display function to show the user.
![Processes](https://user-images.githubusercontent.com/83363471/118052276-5944df80-b37a-11eb-8180-a19c546fc2a7.PNG)
