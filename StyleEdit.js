import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderColor: "#646464",
    },
    mainButtonStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    subButtonStyle: {
        backgroundColor: "#232828",
        width: "70%",
        borderRadius: 5,
    },
    textButtonStyle: {
        color: "ghostwhite",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    inputStyle: {
        backgroundColor: "#e6e6e6",
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#c8c8c8",
        margin: 10
    },
    textInputStyle: {
        color: "#191919",
        fontSize: 18,
        fontWeight: "bold",
    },
    mainStateButtonStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    subStateButtonStyle: {
        backgroundColor: "#232828",
        width: "40%",
        borderRadius: 5,
    },
    textStateButtonStyle: {
        color: "ghostwhite",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
});

export default styles;
