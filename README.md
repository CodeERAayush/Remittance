# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Login
 ```
 Login Using Your Google
 --> Your Account will be created 
 ```

## Step 3: User List
 ```
Home Screen will contain the list of users click on the particular user to send amount.  
 ```

## Step 4: Send Money to user
 ```
After Clicking the user send money screen will be opened, ender amount and send.  
 ```
## Step 3: Transaction History
 ```
Go to the history tab to see the list of transactions. 
 ```



## Dependencies 
 ```
 "@react-native-async-storage/async-storage": "^1.21.0",
    "@react-native-google-signin/google-signin": "^10.1.1",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/stack": "^6.3.20",
    "axios": "^1.6.2",
    "react": "18.2.0",
    "react-native": "0.73.0",
    "react-native-gesture-handler": "^2.14.0",
    "react-native-safe-area-context": "^4.8.0",
    "react-native-screens": "^3.29.0",
    "react-native-vector-icons": "^10.0.2"
 ```

 ## Auth Flow
 ```
 google-signin (package for OAuth) --> save to AsyncStorage --> check for data on AsyncStorage if available Login else display Login Screen
 ```