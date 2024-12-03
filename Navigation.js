import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Home.js';
import ListGeneral from './ListGeneral.js';
import AddGeneral from './AddGeneral.js';
import EditGeneral from './EditGeneral.js';
import ListGrocery from './ListGrocery.js';
import AddGrocery from './AddGrocery.js';
import EditGrocery from "./EditGrocery";
import ListFitness from './ListFitness.js';
import AddFitness from "./AddFitness";
import EditFitness from "./EditFitness";



const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="General" component={ListGeneral}/>
                <Stack.Screen name="Add General" component={AddGeneral}/>
                <Stack.Screen name="Edit General" component={EditGeneral}/>
                <Stack.Screen name="Grocery" component={ListGrocery}/>
                <Stack.Screen name="Add Grocery" component={AddGrocery}/>
                <Stack.Screen name="Edit Grocery" component={EditGrocery}/>
                <Stack.Screen name="Fitness" component={ListFitness}/>
                <Stack.Screen name="Add Fitness" component={AddFitness}/>
                <Stack.Screen name="Edit Fitness" component={EditFitness}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
