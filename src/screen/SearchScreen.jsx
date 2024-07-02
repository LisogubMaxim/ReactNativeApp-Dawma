import { StyleSheet, Text, View } from "react-native";
import SearchComponent from "../components/SearchComponent/SearchComponent";

const SearchScreen = ({ navigation }) => {
    return <SearchComponent navigation={navigation} />;
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F3F5",
    },
});
