# Requirements  

## User needs
The user will need to obtain information such as the distance between them and the nearest electric vehicle charging point and the status of the charging point. This will need to be done in a quick and easy way for emergencies or for everyday use.
Actors:
 The users for this product will be electric vehicle owners and electric vehicle companies. With the surge of electric vehicles over the past decade, this product will be needed now more than ever. Electric vehicle charging will be making more money and will be looking for ways to minimise costs. This iswhere this product 
User stories:
Electric vehicle owners:
As an electric vehicle owner, I want to be able to easily and swiftly find the nearest charging point so I can charge my car and travel further.
Electric vehicle companies:
As an electric vehicle company, we want to find out the status of each charging point so that we can deal with any inconveniences and find out what problems arise in an easy and efficient way.
## Use Cases
Use case 1 (UC1): 
The first use case will be to find the closest electric vehicle charging point.
Use case 2 (UC2): 
The second use case would be to find out the status of each charging point.

## Use Case Diagram

<img width="679" alt="Screenshot 2021-05-03 at 21 01 18" src="https://user-images.githubusercontent.com/83363471/116926803-be018b00-ac52-11eb-8dad-6e0acfaf44ec.png">


## Functional requirements
FR1: The program must start at the home page showing the title of the service and the input box below to make it clear this is for electric car users. (UC1)
FR2: The program must prompt the user to input their postal code. (UC1)
FR3: The program must retrieve the desired data from the Bristol area from the available database that is connected through mySQL workbench. (UC2)
FR4: The program must display the results shown from the table to the user with what charging points are active or inactive along with the location and who it is maintained by. (UC2)

## Non-functional requirements
NFR1: It must include bringing the user to the next web page showing the data table after inputting their postal code. (UC1, UC2)
NFR2: It could include information on whether or not the charging point is free to use or costs money. (UC2)
NFR3: It should have all text elements and the data table centred in the middle of the screen. (UC1, UC2)
NFR4: It won't have an automatic tracker with the website asking for permission to use your location. (UC1)
