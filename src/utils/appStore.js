const { configureStore } = require("@reduxjs/toolkit");

// Configure the Redux store for the application and under configureStore we will add slices later
const appStore = configureStore({
    reducer: {},

});

export default appStore;