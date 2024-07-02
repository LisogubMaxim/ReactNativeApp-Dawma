import { StyleSheet, Text, View } from "react-native";
import ProfileComponent from "../components/ProfileComponent/ProfileComponent";

const ProfileScreen = ({ navigation }) => {
    return <ProfileComponent navigation={navigation} />;
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F3F5",
        alignItems: "center",
        justifyContent: "center",
    },
});
