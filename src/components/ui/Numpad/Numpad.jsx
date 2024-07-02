import { Text, TouchableOpacity, View } from "react-native";

import Delete from "../../../../assets/SVG/Delete";

import styles from "./numpadStyles";

const Numpad = ({ handlePressNum, handlePressDel }) => {
    return (
        <View style={styles.numContainer}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(1)}>
                    <Text style={styles.num}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(2)}>
                    <Text style={styles.num}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(3)}>
                    <Text style={styles.num}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(4)}>
                    <Text style={styles.num}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(5)}>
                    <Text style={styles.num}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(6)}>
                    <Text style={styles.num}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(7)}>
                    <Text style={styles.num}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(8)}>
                    <Text style={styles.num}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(9)}>
                    <Text style={styles.num}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.numButton}>
                    <Text style={styles.num}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numButton} onPress={() => handlePressNum(0)}>
                    <Text style={styles.num}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.numButton, { alignItems: "center", justifyContent: "center" }]}
                    onPress={handlePressDel}
                >
                    <Delete />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Numpad;
