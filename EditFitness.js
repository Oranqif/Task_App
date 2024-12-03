import React, {useState} from "react";
import {Text, TextInput, View, TouchableOpacity, Alert} from "react-native";
import Icon from "react-native-vector-icons/Ionicons.js"
import {FITNESS_DATA} from "./Data";
import styles from "./StyleEdit";

const EditGeneral = ({navigation, route}) => {
    const [step, setStep] = useState(String(route.params.step));
    const [count, setCount] = useState(String(route.params.count));
    const [countSet, setCountSet] = useState(String(route.params.count_set));
    const [reason, setReason] = useState(String(route.params.reason));
    const [completed, setCompleted] = useState(Boolean(route.params.completed));

    const handleSave = (step, count, countSet, reason, completed) => {
        if (step === '') {
            Alert.alert("Error","Task is empty");
        } else if (!(Number.isInteger(count)) || !(Number.isInteger(countSet))) {
            Alert.alert("Error","Count/Set Count is not an integer/is empty")
        } else {
            FITNESS_DATA[route.params.index].step = step;
            FITNESS_DATA[route.params.index].count = count;
            FITNESS_DATA[route.params.index].count_set = countSet;
            FITNESS_DATA[route.params.index].reason = reason;
            FITNESS_DATA[route.params.index].completed = completed;
            navigation.navigate("Fitness");
        }
    };

    const handleDelete = () => {
        Alert.alert(
            "Are you sure?",
            "",
            [{text: "Yes", onPress: () => {
                FITNESS_DATA.splice(route.params.index, 1);
                navigation.navigate("Fitness");
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
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => {navigation.navigate("Fitness")}}>
                        <Text style={styles.textButtonStyle}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text style={styles.textInputStyle}>Step:</Text>
                    <TextInput style={[styles.inputStyle, {width: "100%", alignSelf: "center"}]} value={step} onChangeText={setStep} maxLength={20}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Count:</Text>
                    <TextInput style={[styles.inputStyle, {width: "10%", textAlign: "center"}]} value={count} onChangeText={setCount} maxLength={3}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Set Count:</Text>
                    <TextInput style={[styles.inputStyle, {width: "10%", textAlign: "center"}]} value={countSet} onChangeText={setCountSet} maxLength={3}/>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text style={styles.textInputStyle}>Reason:</Text>
                    <TextInput style={styles.inputStyle} value={reason} onChangeText={setReason} multiline numberOfLines={5} maxLength={500}/>
                </View>
            </View>
            <View>
                <View style={{flexDirection: "row", alignItems: "center", margin: 11}}>
                    <Text style={styles.textInputStyle}>Completed:</Text>
                    <TouchableOpacity style={{marginLeft: 100}} onPress={() => completed ? setCompleted(false) : setCompleted(true)}>
                        <Icon name={completed ? "checkbox" : "checkbox-outline"} size={100}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor: "lightgrey", borderTopWidth: 2, borderBottomWidth: 2, borderColor: "grey",}}>
                <View style={styles.mainStateButtonStyle}>
                    <TouchableOpacity style={styles.subStateButtonStyle} onPress={() => handleSave(step, Number(count), Number(countSet), reason, completed)}>
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
