import React, {useState} from "react";
import {Text, TextInput, View, TouchableOpacity, Alert} from "react-native";
import Icon from "react-native-vector-icons/Ionicons.js"
import {GENERAL_DATA} from "./Data";
import styles from "./StyleEdit";

const EditGeneral = ({navigation, route}) => {
    const [task, setTask] = useState(String(route.params.task));
    const [desc, setDesc] = useState(String(route.params.desc));
    const [duration, setDuration] = useState(String(route.params.duration));
    const [completed, setCompleted] = useState(Boolean(route.params.completed));

    const handleSave = (task, desc, duration, completed) => {
        if (task === '') {
            Alert.alert("Error","Task is empty");
        } else if (!(Number.isInteger(duration))) {
            Alert.alert("Error","Duration is not an integer/is empty")
        } else {
            GENERAL_DATA[route.params.index].task = task;
            GENERAL_DATA[route.params.index].duration = duration;
            GENERAL_DATA[route.params.index].desc = desc;
            GENERAL_DATA[route.params.index].completed = completed;
            navigation.navigate("General");
        }
    };

    const handleDelete = () => {
        Alert.alert(
            "Are you sure?",
            "",
            [{text: "Yes", onPress: () => {
                    GENERAL_DATA.splice(route.params.index, 1);
                    navigation.navigate("General");
                }
            },
                {text: "No"}
            ]
        );
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
                    <Text style={styles.textInputStyle}>Task:</Text>
                    <TextInput style={[styles.inputStyle, {width: "100%", alignSelf: "center"}]} value={task} onChangeText={setTask} maxLength={30}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text style={styles.textInputStyle}>Description:</Text>
                    <TextInput style={[styles.inputStyle, {width: "100%", alignSelf: "center"}]} value={desc} onChangeText={setDesc} multiline={true} numberOfLines={5}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Duration:</Text>
                    <TextInput style={[styles.inputStyle, {width: "10%", textAlign: "center"}]} value={duration} onChangeText={setDuration} maxLength={3}/>
                </View>
            </View>
            <View>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Completed:</Text>
                    <TouchableOpacity style={{marginLeft: 100}} onPress={() => completed ? setCompleted(false) : setCompleted(true)}>
                        <Icon style={{color: "#191919"}} name={completed ? "checkbox" : "checkbox-outline"} size={100}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor: "lightgrey", borderTopWidth: 2, borderBottomWidth: 2, borderColor: "grey",}}>
                <View style={styles.mainStateButtonStyle}>
                    <TouchableOpacity style={styles.subStateButtonStyle} onPress={() => handleSave(task, desc, Number(duration), completed)}>
                        <Text style={styles.textStateButtonStyle}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subStateButtonStyle} onPress={() => handleDelete()}>
                        <Text style={styles.textStateButtonStyle}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default EditGeneral;
