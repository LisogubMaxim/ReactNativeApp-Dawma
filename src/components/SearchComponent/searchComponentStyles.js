import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 22,
        color: "#06070A",
        marginTop: 56,
        marginHorizontal: 23,
        marginBottom: 16,
    },

    search: {
        height: 56,
        borderWidth: 1,
        borderColor: "#CED5E0",
        marginHorizontal: 16,
        borderRadius: 16,
        flexDirection: "row",
        padding: 16,
        alignItems: "center",
        marginBottom: 12,
    },

    textInput: {
        fontFamily: "Inter_400Regular",
        fontSize: 15,
        color: "#606773",
        marginHorizontal: 6,
        flex: 1,
    },

    postList: {
        marginHorizontal: 16,
        gap: 8,
    },

    post: {
        minHeight: 88,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#ffffff",
    },

    id: {
        fontFamily: "Inter_500Medium",
        fontSize: 15,
        color: "#06070A",
        marginBottom: 2,
    },

    name: {
        fontFamily: "Inter_400Regular",
        fontSize: 13,
        color: "#858C94",
    },
});

export default styles;
