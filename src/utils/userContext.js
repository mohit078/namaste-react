
// user context.js
import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    setLoggedInUser: () => { }
})

export default UserContext;