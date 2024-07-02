import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 296,
        backgroundColor: "#FA8A34",
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
    },

    headerText: {
        color: "#fff",
        fontFamily: "Inter_400Regular",
        fontSize: 13,
    },

    headerTextName: {
        color: "#fff",
        fontFamily: "Inter_600SemiBold",
        fontSize: 28,
    },

    personalAdvisor: {
        height: 144,
        backgroundColor: "#fff",
        borderRadius: 16,
        marginHorizontal: 16,
        flexDirection: "row",
        marginBottom: 32,
    },

    personalAdvisorLeft: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 24,
    },

    personalAdvisorRight: {
        marginTop: 8,
        marginRight: 8,
        marginBottom: 8,
    },

    goToCall: {
        flexDirection: "row",
    },

    title: {
        fontFamily: "Inter_400Regular",
        fontSize: 15,
        color: "#606773",
        marginHorizontal: 16,
        marginBottom: 8,
    },

    beforeYouStart: {
        marginBottom: 32,
    },

    beforeYouStartScroll: {
        flexDirection: "row",
        gap: 16,
    },

    posts: {
        // marginHorizontal: 16,
    },

    postList: {
        marginHorizontal: 16,
        gap: 8,
        marginBottom: 8,
    },
});

export default styles;
