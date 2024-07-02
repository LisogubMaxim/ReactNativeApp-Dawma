import { View } from "react-native";

import Bitcoin from "../../../assets/SVG/Bitcoin";

import styles from "./loadingComponentStyles";

const LoadingComponent = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Bitcoin />
            </View>
        </View>
    );
};

export default LoadingComponent;
