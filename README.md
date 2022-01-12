## About The Project

### Straight Line 

Straight Line is a game where the objective is to walk a line through a rough terrain as straight as possible. 
The gps will track how much you deviate from the set line and will give you a score in the end. 

### Technical Stuff

#### Build With

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

#### Architecture

<img width="417" alt="Screen Shot 2022-01-12 at 12 08 04 pm" src="https://user-images.githubusercontent.com/73681740/149047481-5242e107-b043-4bf4-843c-e3f7dba210e4.png">

#### Presentation

##### The presentation layer handles only user input and data display, there will be no other logic in the presentation layer. User input and useEffect functions will always call a use case function wereby the use case function handles the data.

Example: 

<img width="512" alt="Screen Shot 2022-01-12 at 1 15 48 pm" src="https://user-images.githubusercontent.com/73681740/149051963-9f825494-8a80-4579-a778-34d27ea11931.png">

#### Domain

##### Use case functions do 3 main things: Fetching data, error handling and modifying data so it's compatible with the UI components. The use case functions use generator and helper functions to modify the data, this keep the use cases concise and easy to read. 

Example:

<img width="521" alt="withcom" src="https://user-images.githubusercontent.com/73681740/149051542-a8304ffa-2b1c-4833-9bee-d83fd230ac4a.png">

#### Resources

##### The Resource layer handles the actual data fetching. From local sources we get screen dimensions and gps data with the help of expo libraries, from remote sources we get weather data or geographical data (elevation) or data from the AWS backend with GraphQl. 

Example: 

<img width="528" alt="Screen Shot 2022-01-12 at 2 13 58 pm" src="https://user-images.githubusercontent.com/73681740/149057789-0c50701b-21f9-4c02-a59b-da733d6df7b1.png">

### The App

Welcome screen

<img width="357" alt="Screen Shot 2022-01-12 at 2 39 43 pm" src="https://user-images.githubusercontent.com/73681740/149059809-a3fb60eb-fc95-4477-9162-bb0bae286c15.png"> | <img width="358" alt="Screen Shot 2022-01-12 at 2 43 19 pm" src="https://user-images.githubusercontent.com/73681740/149060113-14706a30-c3a7-4f47-a970-9a9f73470f35.png">











