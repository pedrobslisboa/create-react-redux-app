* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Simple React App with Redux and Thunk



This project is a simple react app with a friendly redux design and thunk for async request, you just need to start to code!

## DESIGN

        .
        ├── public                
        ├── src 
            ├── js
                ├── components
                    ├── Test.js       
                ├── redux
                    ├── actions
                        ├── actionsTypes.js
                        ├── asyncTest.action.js
                        ├── reset.action.js
                        ├── test.action.js
                    ├── initialState.js
                    ├── reducers.js
                    └── store.js
            ...       

## TUTORIAL

WRITING...

## INSTALL

- clone this repo:
```
    git clone https://github.com/pedrobslisboa/create-react-redux-app.git YOUR_APP_NAME_HERE
```
- change the name of the app at package.json:

```diff
   {
-  "name": "create-react-redux-app",
+  "name": "YOUR_APP_NAME_HERE",
   "version": "0.1.0",
   "private": true,

```

- install dependencies:
```
    npm install
```
- run application:
```
    npm start
```