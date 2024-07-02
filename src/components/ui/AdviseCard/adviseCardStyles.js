import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 233,
        height: 152,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 16,
        justifyContent: "space-between",
    },

    up: {
        flexDirection: "row",
        alignItems: "center",
    },

    down: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    circle: {
        width: 48,
        height: 48,
        backgroundColor: "#FA8A34",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
});

export default styles;
