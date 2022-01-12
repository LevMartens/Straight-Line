## About The Project

### Straight Line 

Straight Line is a game where the objective is to walk a line through a rough terrain as straight as possible. 
The gps will track how much you deviate from the set line and will give you a score in the end. 

### Build With

* React Native
* Expo
* Graphql
* AWS cloud services
* Redux
* Codemagic CI/CD
* Material UI
* react-native-maps
* react-native-paper
* lodash

### Architecture

<img width="417" alt="Screen Shot 2022-01-12 at 12 08 04 pm" src="https://user-images.githubusercontent.com/73681740/149047481-5242e107-b043-4bf4-843c-e3f7dba210e4.png">

The Single Responsibility Principle
#### Presentation

##### The presentation layer handles only user input and data display, there will be no other logic in the presentation layer. User input and useEffect functions will always call a use case function wereby the use case function handles the data.

Example: 
<img width="512" alt="Screen Shot 2022-01-12 at 1 15 48 pm" src="https://user-images.githubusercontent.com/73681740/149051963-9f825494-8a80-4579-a778-34d27ea11931.png">

#### Domain
Use case functions do 3 main things: Error handling, modifying data so it's compatible with the UI components and fetching data. the use case functions use generator and helper function to modify the data this keep the use cases concise and easy to read. 

Example:
<img width="521" alt="withcom" src="https://user-images.githubusercontent.com/73681740/149051542-a8304ffa-2b1c-4833-9bee-d83fd230ac4a.png">

##### 



//only purpose is displaying the data and calling use case functions upon user input or a useEffect call.
