import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    },

    back: {
        top: 12,
        left: 8,
    },

    modal: {
        backgroundColor: "#ffffff",
        flex: 1,
        marginTop: 112,
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
        // тенеи для iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        // тени для Android
        elevation: 50,
    },

    profile: {
        flexDirection: "row",
        gap: 12,
        marginTop: 16,
        borderBottomWidth: 1,
        borderColor: "#EBEFF5",
    },

    form: {
        paddingHorizontal: 16,
        flex: 1,
    },

    field: {
        marginBottom: 24,
    },

    label: {
        fontFamily: "Inter_400Regular",
        fontSize: 15,
        color: "#606773",
        marginBottom: 8,
        paddingLeft: 16,
    },

    input: {
        borderWidth: 1,
        borderColor: "#CED5E0",
        borderRadius: 16,
        width: "100%",
        height: 56,
        paddingHorizontal: 16,
        fontFamily: "Inter_400Regular",
        fontSize: 15,
        color: "#06070A",
        marginBottom: 5,
    },

    inputPassword: {
        flexDirection: "row",
        alignItems: "center",
    },

    eye: {
        position: "absolute",
        right: 16,
    },

    button: {
        position: "absolute",
        bottom: 20,
        left: 16,
        right: 16,
    },

    errorText: {
        color: "red",
        marginLeft: 5,
    },
});

export default styles;
