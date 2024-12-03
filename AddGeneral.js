import React, { useState } from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { GENERAL_DATA } from './Data.js';
import styles from './StyleAdd';

const AddGeneral = ({navigation}) => {
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");
    const [duration, setDuration] = useState("")

    const handleSubmit = (task, desc, duration) => {
        let item = {task: task, desc: desc, duration: duration, completed: false}
        if (task === '') {
            Alert.alert("Error","Task is empty");
        } else if (!(Number.isInteger(duration))) {
            Alert.alert("Error","Duration is not an integer/is empty");
        } else {
            GENERAL_DATA.push(item);
            navigation.navigate("General");
        }
    };

    return (
        <View>
            <View style={{backgroundColor: "lightgrey", borderBottomWidth: 2, borderColor: "grey",}}>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => {navigation.navigate("General")}}>
                        <Text style={styles.textButtonStyle}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text>Task: </Text>
                    <TextInput style={styles.inputStyle} onChangeText={setTask} multiline={true} maxLength={50}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text>Description: </Text>
                    <TextInput style={styles.inputStyle} onChangeText={setDesc} multiline={true} numberOfLines={5}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text>Duration: </Text>
                    <TextInput style={[styles.inputStyle, {width: "10%", textAlign: "center"}]} onChangeText={setDuration} maxLength={3}/>
                </View>
            </View>
            <View style={{backgroundColor: "lightgrey", borderTopWidth: 2, borderBottomWidth: 2, borderColor: "grey",}}>
                <View style={styles.mainSubmitButtonStyle}>
                    <TouchableOpacity style={styles.subSubmitButtonStyle} onPress={() => handleSubmit(task, desc, Number(duration))}>
                        <Text style={styles.textSubmitButtonStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AddGeneral;
