import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainButtonStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    subButtonStyle: {
        backgroundColor: "#232828",
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
        borderColor: "#646464"
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
        backgroundColor: "#413732",
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
        backgroundColor: "#4b555a",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#2d3237"
    },
    subButtonProgressStyle: {
        alignSelf: "center",
        backgroundColor: "#232828",
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

export default styles;
