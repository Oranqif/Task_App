import React from 'react';
import { StatusBar, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ navigation }) => {
    const Item = ({ itemName, itemNavigate }) => {
        return (
            <TouchableOpacity onPress={() => {navigation.navigate(itemNavigate)}}>
                <Text>{itemName}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar/>
            <Item itemName="General" itemNavigate="General"/>
            <Item itemName="Grocery" itemNavigate="Grocery"/>
            <Item itemName="Fitness" itemNavigate="Fitness"/>
        </View>
    );
};

export default Home;
