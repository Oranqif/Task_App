import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import {GROCERY_DATA} from "./Data";

const ListGrocery = ({navigation}) => {
    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>Item: {item.count} {item.item}{item.count > 1 ? "s" : ""} | Cost: ${item.cost * item.count}</Text>
                <TouchableOpacity onPress={() => {navigation.navigate("AddGeneral")}}>
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const totalCost = (groceryData) => {
        let total = 0;
        for (let i = 0; i < groceryData.length; i++) {
            total += groceryData[i].cost * groceryData[i].count;
        }
        return total;
    };

    return (
        <View>
            <StatusBar/>
            <View style={{borderBottomWidth: 2, backgroundColor: "lightgrey", borderColor: "grey"}}>
                <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={GROCERY_DATA}
                renderItem={renderItem}
            />
            <Text>Total Cost: ${totalCost(GROCERY_DATA)}</Text>
        </View>
    );
};

export default ListGrocery;
