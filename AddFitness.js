import React, { useState } from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { FITNESS_DATA } from './Data.js';
import styles from './StyleAdd';

const AddFitness = ({navigation}) => {
    const [step, setStep] = useState("");
    const [count, setCount] = useState("");
    const [countSet, setCountSet] = useState("")
    const [reason, setReason] = useState("")

    const handleSubmit = (step, count, countSet, reason) => {
        let item = {step: step, count: count, count_set: countSet, reason: reason, completed: false}
        if (step === '') {
            Alert.alert("Error","Step is empty");
        } else if (!(Number.isInteger(count)) || !(Number.isInteger(countSet))) {
            Alert.alert("Error","Count/Set Count is not an integer/is empty");
        } else {
            FITNESS_DATA.push(item);
            navigation.navigate("Fitness");
        }
    };

    const handleBack = (step, count, countSet, reason) => {
        if (step !== '' || count !== '' || countSet !== '' || reason !== '') {
            Alert.alert(
                "Are you sure?",
                "You will lose your progress",
                [{text: "Yes", onPress: () => {
                        navigation.navigate("Fitness");
                    }},
                    {text: "No"}
                ]
            );
        } else {
            navigation.navigate("Fitness");
        }
    };

    return (
        <View>
            <View style={{backgroundColor: "lightgrey", borderBottomWidth: 2, borderColor: "grey",}}>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => handleBack(step, count, countSet, reason)}>
                        <Text style={styles.textButtonStyle}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text style={styles.textInputStyle}>Step: </Text>
                    <TextInput style={[styles.inputStyle, {width: "100%", alignSelf: "center"}]} onChangeText={setStep}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Count: </Text>
                    <TextInput style={[styles.inputStyle, {width: "10%", textAlign: "center"}]} onChangeText={setCount}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Set Count: </Text>
                    <TextInput style={[styles.inputStyle, {width: "10%", textAlign: "center"}]} onChangeText={setCountSet}/>
                </View>
            </View>
            <View>
                <View style={{margin: 11,}}>
                    <Text style={styles.textInputStyle}>Reason: </Text>
                    <TextInput style={styles.inputStyle} onChangeText={setReason} multiline numberOfLines={5} maxLength={500}/>
                </View>
            </View>
            <View style={{backgroundColor: "lightgrey", borderTopWidth: 2, borderBottomWidth: 2, borderColor: "grey",}}>
                <View style={styles.mainSubmitButtonStyle}>
                    <TouchableOpacity style={styles.subSubmitButtonStyle} onPress={() => handleSubmit(step, Number(count), Number(countSet), reason)}>
                        <Text style={styles.textSubmitButtonStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AddFitness;
