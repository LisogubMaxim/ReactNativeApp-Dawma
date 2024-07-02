import { Text, TouchableOpacity, View } from "react-native";
import styles from "./postStyles";

const Post = ({ title, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.post} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Post;
