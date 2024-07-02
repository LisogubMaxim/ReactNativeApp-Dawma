import { Image, Text, View } from "react-native";
import styles from "./welcomeCardStyles";

const WelcomeCard = ({ img, text }) => {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default WelcomeCard;
