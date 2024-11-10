import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { BookScreen,BookListScreen,SettingsScreen } from "../screens/BookScreens";
import BookStackNavigation from "./BookStack";

const Tab = createBottomTabNavigator();

const TabIcon = ({name,size,color}) =>{
    return(
        <MaterialCommunityIcons
            name={name}
            size={size}
            color={color}
        />
    )
}

const BookTab = () => {
    return(
        <Tab.Navigator
            initialRouteName="Book"
            screenOptions={({route})=>({
                tabBarIcon: props => {
                    let name="";
                    if(route.name === "Book") name="book";
                    else if(route.name ==="BookList") name="dog";
                    else name="cog";
                    return TabIcon({...props,name})
                }
            })}
        >
            <Tab.Screen name="Book" component={BookScreen} />
            <Tab.Screen name="BookList" component={BookStackNavigation}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>        
    )
}
export default BookTab