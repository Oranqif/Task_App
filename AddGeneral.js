import React, { useState } from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import {GENERAL_DATA} from './Data.js';
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

    const handleBack = (task, desc, duration) => {
        if (task !== '' || desc !== '' || duration !== '') {
            Alert.alert(
                "Are you sure?",
                "You will lose your progress",
                [{text: "Yes", onPress: () => {
                        navigation.navigate("General");
                    }},
                    {text: "No"}
                ]
            );
        } else {
            navigation.navigate("General");
        }
    };

    return (
        <View>
            <View style={{backgroundColor: "#4b555a", borderBottomWidth: 2, borderColor: "#2d3237",}}>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => handleBack(task, desc, duration)}>
                        <Text style={styles.textButtonStyle}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text style={styles.textInputStyle}>Task: </Text>
                    <TextInput style={styles.inputStyle} onChangeText={setTask} multiline={true} maxLength={50}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text style={styles.textInputStyle}>Description: </Text>
                    <TextInput style={styles.inputStyle} onChangeText={setDesc} multiline={true} numberOfLines={5}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Duration: </Text>
                    <TextInput style={[styles.inputStyle, {width: "10%", textAlign: "center"}]} onChangeText={setDuration} maxLength={3}/>
                </View>
            </View>
            <View style={{backgroundColor: "#4b555a", borderTopWidth: 2, borderBottomWidth: 2, borderColor: "#2d3237",}}>
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
