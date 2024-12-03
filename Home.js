import React from 'react';
import {StyleSheet, StatusBar, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
    itemStyle: {
        borderBottomWidth: 1,
    },
    textItemStyle: {
        color: "whitesmoke",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        margin: 20,
    }
})

const Home = ({ navigation }) => {
    const Item = ({ style, itemName, itemNavigate }) => {
        return (
            <View style={style}>
                <TouchableOpacity onPress={() => {navigation.navigate(itemNavigate)}}>
                    <Text style={styles.textItemStyle}>{itemName}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View>
            <StatusBar/>
            <Item style={[styles.itemStyle, {backgroundColor: "#4c3c3c"}]} itemName="General" itemNavigate="General"/>
            <Item style={[styles.itemStyle, {backgroundColor: "#4b5a46"}]} itemName="Grocery" itemNavigate="Grocery"/>
            <Item style={[styles.itemStyle, {backgroundColor: "#465564"}]} itemName="Fitness" itemNavigate="Fitness"/>
        </View>
    );
};

export default Home;
