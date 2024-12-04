import React, {useState} from "react";
import {Text, TextInput, View, TouchableOpacity, Alert} from "react-native";
import Icon from "react-native-vector-icons/Ionicons.js"
import {GROCERY_DATA} from "./Data";
import styles from "./StyleEdit";

const EditGrocery = ({navigation, route}) => {
    const [item, setItem] = useState(String(route.params.item));
    const [count, setCount] = useState(String(route.params.count));
    const [cost, setCost] = useState(String(route.params.cost));
    const [completed, setCompleted] = useState(Boolean(route.params.completed));

    const handleSave = (item, count, cost, completed) => {
        if (item === '') {
            Alert.alert("Error","Item is empty");
        } else if (!(Number.isFinite(cost)) || !(Number.isInteger(count))) {
            Alert.alert("Error","Count/Cost is not an integer/float/is empty")
        } else {
            GROCERY_DATA[route.params.index].item = item;
            GROCERY_DATA[route.params.index].count = count;
            GROCERY_DATA[route.params.index].cost = cost;
            GROCERY_DATA[route.params.index].completed = completed;
            navigation.navigate("Grocery");
        }
    };

    const handleDelete = () => {
        Alert.alert(
            "Are you sure?",
            "",
            [{text: "Yes", onPress: () => {
                    GROCERY_DATA.splice(route.params.index, 1);
                    navigation.navigate("Grocery");
                }
            },
                {text: "No"}
            ]
        );
    };

    return (
        <View>
            <View style={{backgroundColor: "#4b555a", borderBottomWidth: 2, borderColor: "#2d3237",}}>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => {navigation.navigate("Grocery")}}>
                        <Text style={styles.textButtonStyle}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator}>
                <View style={{margin: 11,}}>
                    <Text style={styles.textInputStyle}>Item:</Text>
                    <TextInput style={[styles.inputStyle, {width: "100%", alignSelf: "center"}]} value={item} onChangeText={setItem} maxLength={30}/>
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
                    <Text style={styles.textInputStyle}>Cost:</Text>
                    <TextInput style={[styles.inputStyle, {width: "30%", textAlign: "center"}]} value={cost} onChangeText={setCost} maxLength={6}/>
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
            <View style={{backgroundColor: "#4b555a", borderTopWidth: 2, borderBottomWidth: 2, borderColor: "#2d3237",}}>
                <View style={styles.mainStateButtonStyle}>
                    <TouchableOpacity style={styles.subStateButtonStyle} onPress={() => handleSave(item, Number(count), Number(cost), completed)}>
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

export default EditGrocery;
