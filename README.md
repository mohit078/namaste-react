# New Project Run command
- npx create-react-app netflix-gpt

# Project Run command in Local host
- npm start(UI/Front End)
- npm run server(To run the server)

# To Setup Database in Local 
- npm install -g json-server
- create a db.json file and a data in it
- npm run server(To run the server)

# Build command
Note: We need to remove App.js from package.json
- Dev Build: npx parcel index.html
- Production Build: npx parcel build index.html


# Parcel(Webpack Tool) do for us
- It is File watching Algorithm which is written in c++
- Dev Build
- Faster Builds projectbecause of caching, Sothat next builds is created faster when we save any file
- local server
- HMR (Hot Module Replacement)
- Caching (Faster Builds)
- Minification
- Bundling
- Compressing
- Differential Bundling(When App is hoisted eg runs smoothly for older browsers)
- Diagnostic (Gives better error sugessions)
- Error Handling
- HTTPS 
- Different build for Dev and Production
- Tree shaking (It will remove unused code for us)

# Redux Toolkit
 - Install @reduxjs/toolkit
 - Install react redux  
 - Build our Store
 - Connect our store to our App
 - Slice(Cart slice)
 - dispatch (Action)
 - Selector


 