import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 22,
        color: "#06070A",
        marginBottom: 16,
    },

    language: {
        marginHorizontal: 16,
        marginBottom: 16,
    },

    buttonLanguage: {
        height: 56,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#CED5E0",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 16,
    },

    check: {
        width: 32,
        height: 32,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
