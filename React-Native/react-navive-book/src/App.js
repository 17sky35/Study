import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BookTab from "./navigations/BookTab";

const App = () => {
    return(
        <NavigationContainer>       
            <BookTab />
        </NavigationContainer>
    )
}
export default App;