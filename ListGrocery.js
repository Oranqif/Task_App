import {Text, View, FlatList, TouchableOpacity, StatusBar, Alert} from 'react-native';
import {GROCERY_DATA} from './Data';
import styles from './StyleList'
import Icon from "react-native-vector-icons/AntDesign";

const ListGrocery = ({navigation}) => {
    const renderItem = ({item, index}) => {
        return (
            <View style={styles.mainTaskStyle}>
                <View style={styles.subTaskStyle}>
                    <View>
                        <Text style={styles.titleTaskStyle}>Item:
                            <Text style={styles.textTaskStyle}> {item.count} {item.item}{item.count > 1 ? "s" : ""}</Text>
                        </Text>
                        <Text style={styles.titleTaskStyle}>Cost:
                            <Text style={styles.textTaskStyle}> ${item.cost * item.count}</Text>
                        </Text>
                    </View>
                    <Icon style={{alignSelf: "center", marginTop: 20}} name={item.completed ? "check" : "close"} size={40}/>
                </View>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonEditStyle} onPress={() => {
                        navigation.navigate("Edit Grocery",
                            {index:index, item:item.item, count:item.count, cost:item.cost})
                    }}>
                        <Text style={styles.textButtonEditStyle}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const totalCost = (groceryData) => {
        let total = 0;
        for (let i = 0; i < groceryData.length; i++) {
            total += groceryData[i].cost * groceryData[i].count;
        }
        return total;
    };

    const receiveCost = () => {
        return (
            Alert.alert(
                "Check Cost",
                `Total Cost $${totalCost(GROCERY_DATA)}`
            )
        );
    };

    return (
        <View>
            <StatusBar/>
            <View style={{borderBottomWidth: 2, backgroundColor: "lightgrey", borderColor: "grey"}}>
                <View style={styles.mainButtonStyle}>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => {navigation.navigate("Home")}}>
                        <Text style={styles.textButtonStyle}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subButtonStyle} onPress={() => {navigation.navigate("Add Grocery")}}>
                        <Text style={styles.textButtonStyle}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={GROCERY_DATA}
                renderItem={renderItem}
            />
            <View style={styles.mainButtonProgressStyle}>
                <View style={{margin: 10}}>
                    <TouchableOpacity style={styles.subButtonProgressStyle} onPress={() => receiveCost()}>
                        <Text style={styles.textButtonProgressStyle}>Check Cost</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ListGrocery;
