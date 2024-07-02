import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 480,
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 16,
        paddingBottom: 27,
        alignItems: "center",
        marginBottom: 24,
    },

    back: {
        position: "absolute",
        top: 56,
        left: 16,
    },

    headerTitle: {
        fontFamily: "Inter_700Bold",
        fontSize: 28,
        color: "#06070A",
        marginTop: 85,
        textAlign: "center",
        zIndex: 1,
    },

    image: {
        position: "absolute",
        bottom: 27,
    },

    about: {
        marginBottom: 48,
        marginHorizontal: 16,
    },

    title: {
        fontFamily: "Inter_400Regular",
        fontSize: 15,
        color: "#606773",
        marginBottom: 8,
    },

    aboutContainer: {
        padding: 24,
        backgroundColor: "#ffffff",
        borderRadius: 16,
    },

    textAbout: {
        fontFamily: "Inter_400Regular",
        fontSize: 15,
        color: "#06070A",
        lineHeight: 32,
    },

    comments: {
        marginBottom: 20,
        marginHorizontal: 16,
    },

    commentsContainer: {
        gap: 12,
    },

    comment: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 12,
    },

    name: {
        fontFamily: "Inter_500Medium",
        fontSize: 18,
        color: "#000000",
        marginBottom: 2,
    },

    email: {
        fontFamily: "Inter_400Regular",
        fontSize: 16,
        color: "#3E3E3E",
        marginBottom: 12,
    },

    body: {
        fontFamily: "Inter_400Regular",
        fontSize: 14,
        color: "#06070A",
    },

    containerButton: {
        height: 83,
        backgroundColor: "#ffffff",
        paddingTop: 15,
        paddingHorizontal: 28,
    },

    button: {
        height: 48,
        borderRadius: 16,
        backgroundColor: "#FA8A34",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
