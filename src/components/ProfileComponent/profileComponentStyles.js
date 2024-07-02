import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 96,
        paddingHorizontal: 16,
    },

    titleMain: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 22,
        color: "#06070A",
        marginBottom: 16,
    },

    profile: {
        height: 80,
        borderWidth: 1,
        borderColor: "#CED5E0",
        borderRadius: 16,
        alignItems: "center",
        paddingLeft: 20,
        flexDirection: "row",
        marginBottom: 32,
    },

    image: {
        width: 32,
        height: 32,
        borderRadius: 100,
        marginRight: 14,
        backgroundColor: "#EBEFF5",
    },

    name: {
        fontFamily: "Inter_500Medium",
        fontSize: 15,
        color: "#06070A",
    },

    basic: {
        marginBottom: 32,
    },

    title: {
        fontFamily: "Inter_400Regular",
        fontSize: 15,
        color: "#606773",
        marginHorizontal: 8,
        marginBottom: 8,
    },

    button: {
        height: 56,
        borderWidth: 1,
        borderColor: "#CED5E0",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;
