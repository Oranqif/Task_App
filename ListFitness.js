import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign.js'
import {FITNESS_DATA} from "./Data";

const styles = StyleSheet.create({
    mainButtonStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    subButtonStyle: {
        backgroundColor: "grey",
        width: "40%",
        borderRadius: 5,
    },
    textButtonStyle: {
        color: "ghostwhite",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    mainTaskStyle: {
        borderTopWidth: 1,
        borderColor: "darkgrey"
    },
    subTaskStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },
    titleTaskStyle: {
        color: "#191919",
        fontSize: 18,
        fontWeight: "bold",
    },
    textTaskStyle: {
        color: "#191919",
        fontSize: 16,
        fontWeight: "normal",
    },
    mainButtonEditStyle: {
        marginBottom: 10,
    },
    subButtonEditStyle: {
        alignSelf: "center",
        backgroundColor: "grey",
        width: "30%",
        borderRadius: 5,
    },
    textButtonEditStyle: {
        color: "ghostwhite",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        margin: 5,
    },
    mainButtonProgressStyle: {
        backgroundColor: "lightgrey",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "grey"
    },
    subButtonProgressStyle: {
        alignSelf: "center",
        backgroundColor: "grey",
        width: "70%",
        borderRadius: 5,
    },
    textButtonProgressStyle: {
        color: "ghostwhite",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
});


const ListFitness = ({navigation}) => {
    const renderItem = ({item, index}) => {
        return (
            <View style={styles.mainTaskStyle}>
                <View style={styles.subTaskStyle}>
                    <View>
                        <Text style={styles.titleTaskStyle}>Step:
                            <Text style={styles.textTaskStyle}> {item.count} {item.step} | {item.count_set} {item.count_set > 1 ? "sets" : "set"}</Text>
                        </Text>
                        <Text style={styles.titleTaskStyle}>Reason:
                            <Text style={styles.textTaskStyle} multiline numberOfLines={5}>{"\n"}{item.reason}</Text>
                        </Text>
                    </View>
                    <Icon style={{alignSelf: "center", marginTop: 20,}} name={item.completed ? "check" : "close"} size={40}/>
                </View>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonEditStyle} onPress={() => {
                        navigation.navigate("Edit Fitness",
                            {index:index, step:item.step, count:item.count, count_set:item.count_set, reason:item.reason, completed:item.completed})
                    }}>
                        <Text style={styles.textButtonEditStyle}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const totalProgress = (fitnessData) => {
        let total = 0;
        for (let i = 0; i < fitnessData.length; i++) {
            fitnessData[i].completed ? total += 1 : total += 0;
        }
        return total;
    };

    const receiveProgress = () => {
        return (
            Alert.alert(
                "Check Progress",
                `Task${totalProgress(FITNESS_DATA) > 1 ? "s" : ""} Completed: ${totalProgress(FITNESS_DATA)}
Task${(FITNESS_DATA.length - totalProgress(FITNESS_DATA)) > 1 ? "s" : ""} Left: ${FITNESS_DATA.length - totalProgress(FITNESS_DATA)}
Progress: ${Math.round((totalProgress(FITNESS_DATA) / FITNESS_DATA.length) * 100)}%`
            )
        );
    };

    return (
        <View style={{paddingBottom: 137,}}>
            <StatusBar/>
            <View style={{borderBottomWidth: 2, backgroundColor: "lightgrey", borderColor: "grey"}}>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => {navigation.navigate("Home")}}>
                        <Text style={styles.textButtonStyle}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => {navigation.navigate("Add Fitness")}}>
                        <Text style={styles.textButtonStyle}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={FITNESS_DATA}
                renderItem={renderItem}
            />
            <View style={styles.mainButtonProgressStyle}>
                <View style={{margin: 10}}>
                    <TouchableOpacity style={styles.subButtonProgressStyle} onPress={() => receiveProgress()}>
                        <Text style={styles.textButtonProgressStyle}>Check Progress</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ListFitness;