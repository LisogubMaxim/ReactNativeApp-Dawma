import { StyleSheet, Text, View } from "react-native";

const PortfolioScreen = () => {
    return (
        <View style={styles.container}>
            <Text>PortfolioScreen</Text>
        </View>
    );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F3F5",
        alignItems: "center",
        justifyContent: "center",
    },
});
