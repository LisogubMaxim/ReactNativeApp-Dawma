import { Text, TouchableOpacity, View } from "react-native";
import styles from "./buttonStyles";

const Button = ({ text, isBackground = true, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: isBackground ? "#FA8A34" : "" }]} onPress={onPress}>
            <Text style={[styles.text, { color: isBackground ? "#FFFFFF" : "#FA8A34" }]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
