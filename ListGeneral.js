import {StatusBar, Text, View, FlatList, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign.js'
import {GENERAL_DATA} from './Data';
import styles from './StyleList'

const ListGeneral = ({navigation}) => {
    const renderItem = ({item, index}) => {
        return (
            <View style={styles.mainTaskStyle}>
                <View style={styles.subTaskStyle}>
                    <View>
                        <Text style={styles.titleTaskStyle}>Task:
                            <Text style={styles.textTaskStyle}> {item.task}</Text>
                        </Text>
                        <Text style={styles.titleTaskStyle}>Description:
                            <Text style={styles.textTaskStyle}>{"\n"}{item.desc}</Text>
                        </Text>
                        <Text style={styles.titleTaskStyle}>Duration:
                            <Text style={styles.textTaskStyle}> {item.duration} Minutes</Text>
                        </Text>
                    </View>
                    <Icon style={{alignSelf: "center", marginTop: 20, color: "#191919"}} name={item.completed ? "check" : "close"} size={40}/>
                </View>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonEditStyle} onPress={() => {
                        navigation.navigate("Edit General",
                            {index:index, task:item.task, desc:item.desc, duration:item.duration, completed:item.completed})
                    }}>
                        <Text style={styles.textButtonEditStyle}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const totalProgress = (generalData) => {
        let total = 0;
        for (let i = 0; i < generalData.length; i++) {
            generalData[i].completed ? total += 1 : total += 0;
        }
        return total;
    };

    const receiveProgress = () => {
        return (
            Alert.alert(
                "Check Progress",
                `Task${totalProgress(GENERAL_DATA) > 1 ? "s" : ""} Completed: ${totalProgress(GENERAL_DATA)}
Task${(GENERAL_DATA.length - totalProgress(GENERAL_DATA)) > 1 ? "s" : ""} Left: ${GENERAL_DATA.length - totalProgress(GENERAL_DATA)}
Progress: ${Math.round((totalProgress(GENERAL_DATA) / GENERAL_DATA.length) * 100)}%`
            )
        );
    };

    return (
        <View style={{paddingBottom: 137,}}>
            <StatusBar/>
            <View style={{borderBottomWidth: 2, backgroundColor: "#4b555a", borderColor: "#2d3237"}}>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => {navigation.navigate("Home")}}>
                        <Text style={styles.textButtonStyle}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => {navigation.navigate("Add General")}}>
                        <Text style={styles.textButtonStyle}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={GENERAL_DATA}
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

export default ListGeneral;
