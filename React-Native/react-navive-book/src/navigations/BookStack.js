import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BookListScreen } from '../screens/BookScreens';
import { BookDetailScreen } from '../screens/BookScreens';

const Stack = createStackNavigator();

const BookStackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="BookList" component={BookListScreen} />
            <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        </Stack.Navigator>
    )
}

export default BookStackNavigation;