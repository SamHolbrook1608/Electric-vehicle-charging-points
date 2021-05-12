# Deployment
## Release notes
This version of our webapp is v1.0-alpha-0. The webapp revolves around the use of Visual Studio code, mysql + mysql workbench, express and node. It works by the user starting on the homepage(UC1) and is asked to input their postal code which will take them to the databsepage(UC2). The database on the mysql workbench is getting called by javascript created in VSCode and being able to display the information on an HTML template thats made into an .ejs file. All the software used is available for use on both Windows and Makintosh OS.
![Deployment UML](https://user-images.githubusercontent.com/83363471/118054311-f48b8400-b37d-11eb-82ec-48b88bd69209.PNG)
## Home page (Use Case 1) - Gulied Abdi
The UI of the webpage is really simple and easy to use. It is a simple search engine which is clear and can be accessed on all platforms (PC,Mobile, ect..).
The user can find the nearest charging point and the status with only a few clicks. The UI colour is really pleasing and easy on the eye to make it comfortable for the user. We decided to go with a minimal approach to make it simple and straightforward for the user to use the product.
![UI](https://user-images.githubusercontent.com/79972723/117897648-1ff96a80-b2bb-11eb-8995-fb4ac34a3c2e.png)
## Database page (Use Case 2) - Sam Holbrook
![Usecase2 results](https://user-images.githubusercontent.com/83363471/117896247-0d316680-b2b8-11eb-85de-b1b0fceb7d80.PNG)
This page is the result shown after the user enters their post code. With the shown database, the user can see the site name of the charging point which will usually be the name of a building. Next to the will be the status for whether or not it is active or inactive. The final 2 columns will show the post code and the exact coordinates for the user to input into their GPS like Waze, Google maps or any other method they use for locating areas to travel to.
