import React, { useState } from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import {GROCERY_DATA} from './Data.js';
import styles from './StyleAdd';

const AddGrocery = ({navigation}) => {
    const [item, setItem] = useState("");
    const [count, setCount] = useState("");
    const [cost, setCost] = useState("")

    const handleSubmit = (item, count, cost) => {
        let newItem = {item: item, count: count, cost: cost, completed: false}
        if (item === '') {
            Alert.alert("Error","Item is empty");
        } else if (!(Number.isFinite(cost)) || !(Number.isInteger(count))) {
            Alert.alert("Error","Count/Cost is not an integer/float/is empty");
        } else {
            GROCERY_DATA.push(newItem);
            navigation.navigate("Grocery");
        }
    };

    const handleBack = (item, count, cost) => {
        if (item !== '' || count !== '' || cost !== '') {
            Alert.alert(
                "Are you sure?",
                "You will lose your progress",
                [{text: "Yes", onPress: () => {
                    navigation.navigate("Grocery");
                }},
                    {text: "No"}
                ]
            );
        } else {
            navigation.navigate("Grocery");
        }
    };

    return (
        <View>
            <View style={{backgroundColor: "lightgrey", borderBottomWidth: 2, borderColor: "grey",}}>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => handleBack(item, count, cost)}>
                        <Text style={styles.textButtonStyle}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text style={styles.textInputStyle}>Item: </Text>
                    <TextInput style={styles.inputStyle} onChangeText={setItem} maxLength={30}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Count: </Text>
                    <TextInput style={[styles.inputStyle, {width: "10%", textAlign: "center"}]} onChangeText={setCount} maxLength={3}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Cost: </Text>
                    <TextInput style={[styles.inputStyle, {width: "30%", textAlign: "center"}]} onChangeText={setCost} maxLength={6}/>
                </View>
            </View>
            <View style={{backgroundColor: "lightgrey", borderTopWidth: 2, borderBottomWidth: 2, borderColor: "grey",}}>
                <View style={styles.mainSubmitButtonStyle}>
                    <TouchableOpacity style={styles.subSubmitButtonStyle} onPress={() => handleSubmit(item, Number(count), Number(cost))}>
                        <Text style={styles.textSubmitButtonStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AddGrocery;
