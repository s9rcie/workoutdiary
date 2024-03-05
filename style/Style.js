import React from "react";
import { StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

const colors = {
    primary: "#8b1e53",
    secondary: "rgba(233,222,248,255)",
    light: "#ffffff",
    dark: "#000000",
};

export default Style = StyleSheet.create ( {
    container: {
        flex: 1,
        activeTintColor: "black",
        inactiveTintColor: "black",
    },
    inputTitles: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 5,
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Roboto",
    },
    iconBg: {
        flexDirection: 'row',
        justifyContent: "center",
        marginLeft: 15,
        marginRight: 210,
        backgroundColor: colors.secondary,
        borderRadius: 50,
        padding: 15,
    },
    segButtons: {
        margin: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: -1,
    },
    TextInputs: {
        borderWidth: 0.7,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
        backgroundColor: colors.secondary
    },
    dateText: {
        textAlign: "center",
        marginBottom: 30,
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 15,
        marginLeft: 80,
        marginRight: 80,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: colors.secondary,
    },
    header: {
        fontSize: 28,
        textAlign: "center",
        fontFamily: "Roboto",
        marginTop: 10
    },
    addWorkoutView: {
        marginTop: 40,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        backgroundColor: colors.light,
    },
    unitChangeView: {
        marginTop: 20,
        padding: 15,
        flex: 1,
        backgroundColor: colors.secondary,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 410,
        marginLeft: 10,
        marginRight: 10
    },
    listItem: {
        backgroundColor: colors.dark,
        padding: 20,
        fontFamily: "Roboto",
        fontSize: 12
    },
    submittedWorkouts: {
        backgroundColor: colors.light,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.dark,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
        paddingBottom: 15,
        paddingTop: 10,
    }
});

