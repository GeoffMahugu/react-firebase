# React Firebase

This is a React-Typescript application implementing firebase Authentification. 
The full write up on how to setup the project can be found in this Blog Post:  **[Firebase Auth with React Typescript](https://javascript.plainenglish.io/firebase-auth-with-react-typescript-4b9d9605fa53)**


![Screenshot from 2021-05-20 17-16-45](https://user-images.githubusercontent.com/17265995/119225544-0a7f0e80-bb0d-11eb-8696-3b81db2e93c9.png)

### Project Structure

 - node_modules: Contains installed dependancies
 - public: Contains assets used in the application (images, manifest.json)
 - src: Contains application files
 -  - config: Contains application global configurations
 -  - interfaces: Contains application global type definitions
 -  - modules: Contains application modules
 -  - pages: Contains application pages
 -  - App.css: Root style sheet file
 -  - App.tsx: Application entry file
 -  - index.css: Global style sheet file
 -  - index.tsx: Root entry file
 - .env: Contains firebase configurations
 - package.json: Contains npm scrips


### Run application

This command will serve the application

``npm start``

### Build application

The output will be in ./build folder

``npm run build``

### Update Firebase Credentials

In the root of the application, create ./env file and paste the credentials as shown below:

```

## Firebase Credentials
REACT_APP_FIREBASE_KEY=""
REACT_APP_FIREBASE_DOMAIN=""
REACT_APP_FIREBASE_DATABASE=""
REACT_APP_FIREBASE_PROJECT_ID=""
REACT_APP_FIREBASE_STORAGE_BUCKET="" 
REACT_APP_FIREBASE_SENDER_ID=""
REACT_APP_FIREBASE_APP_ID=""
REACT_APP_FIREBASE_MEASUREMENT_ID=""

```

### Coonclusions
Any Pull requests are much welcomed to improve the project and help onboard new react developers.😀
Much love ❤️

