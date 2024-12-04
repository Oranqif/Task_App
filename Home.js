import React from 'react';
import {StyleSheet, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6.js"

const styles = StyleSheet.create({
    headerTitle: {
        backgroundColor: "#4b555a",
        borderBottomWidth: 2,
        borderColor: "#2d3237",
    },
    headerText: {
        color: "ghostwhite",
        fontWeight: "bold",
        fontSize: 32,
        textAlign: "center",
        marginTop: 40,
        marginBottom: 40,
    },
    itemStyle: {
        borderBottomWidth: 1,
        borderColor: "#191919",
    },
    textItemStyle: {
        color: "whitesmoke",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        marginTop: 105,
        marginBottom: 105,
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
            <View style={styles.headerTitle}>
                <Icon name="list-check" size={50} style={styles.headerText}> Task App</Icon>
            </View>
            <Item style={[styles.itemStyle, {backgroundColor: "#4c3c3c"}]} itemName="General" itemNavigate="General"/>
            <Item style={[styles.itemStyle, {backgroundColor: "#4b5a46"}]} itemName="Grocery" itemNavigate="Grocery"/>
            <Item style={[styles.itemStyle, {backgroundColor: "#465564"}]} itemName="Fitness" itemNavigate="Fitness"/>
        </View>
    );
};

export default Home;
