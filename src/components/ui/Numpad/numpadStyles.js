import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    numContainer: {
        gap: 30,
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#EBEFF5",
        paddingVertical: 32,
    },

    row: {
        flexDirection: "row",
        gap: 100,
    },

    num: {
        fontFamily: "Inter_700Bold",
        fontSize: 28,
        color: "#06070A",
    },

    numButton: {
        width: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
