import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 44,
    },

    about: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        gap: 16,
    },

    left: {
        paddingTop: 12,
        gap: 16,
        flex: 1,
    },

    right: {
        paddingTop: 86,
        gap: 16,
        flex: 1,
    },

    card: {
        backgroundColor: "#FA8A34",
        alignItems: "center",
        paddingVertical: 27,
        borderRadius: 16,
    },
});

export default styles;
