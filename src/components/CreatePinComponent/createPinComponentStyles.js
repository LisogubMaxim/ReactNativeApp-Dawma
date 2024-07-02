import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    back: {
        position: "absolute",
        top: 57,
        left: 8,
    },

    top: {
        marginTop: 58,
        alignItems: "center",
        marginBottom: 38,
    },

    circle: {
        width: 48,
        height: 48,
        backgroundColor: "#F2FAF7",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#E9F7F2",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
    },

    codeContainer: {
        alignItems: "center",
    },

    code: {
        flexDirection: "row",
        gap: 16,
    },

    circleCode: {
        width: 24,
        height: 24,
        borderRadius: 100,
    },

    bottom: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },

    buttonContainer: {
        borderTopWidth: 1,
        paddingTop: 15,
        borderColor: "#E6EBF5",
        paddingHorizontal: 16,
        paddingBottom: 10,
    },
});

export default styles;
