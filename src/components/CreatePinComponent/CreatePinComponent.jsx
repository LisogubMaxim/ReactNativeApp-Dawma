import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";

import Numpad from "../ui/Numpad/Numpad";
import Button from "../ui/Button/Button";

import Phone from "../../../assets/SVG/Phone";
import ArrowBack from "../../../assets/SVG/ArrowBack";

import styles from "./createPinComponentStyles";

const CreatePinComponent = ({ navigation, route }) => {
    const { user } = route.params;
    const [pin, setPin] = useState("");

    const { t } = useTranslation();

    const handlePressNum = (num) => {
        if (pin.length === 4) return;
        setPin(pin + num);
    };

    const handlePressDel = () => {
        setPin(pin.slice(0, -1));
    };

    const handlePressContinue = () => {
        if (pin.length !== 4) return;
        navigation.navigate("RepeatPin", { pin: pin, user: user });
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <ArrowBack />
            </TouchableOpacity>
            <View style={styles.top}>
                <View style={styles.circle}>
                    <Phone />
                </View>
                <Text style={{ fontFamily: "Inter_500Medium", fontSize: 15, color: "#06070A" }}>{t("createPin.createPin")}</Text>
            </View>
            <View style={styles.codeContainer}>
                <Text style={{ fontFamily: "Inter_400Regular", fontSize: 15, color: "#606773", marginBottom: 25 }}>
                    {t("createPin.enterCode")}
                </Text>
                <View style={styles.code}>
                    <View style={[styles.circleCode, { backgroundColor: pin.length >= 1 ? "#FA8A34" : "#C1C4CB" }]}></View>
                    <View style={[styles.circleCode, { backgroundColor: pin.length >= 2 ? "#FA8A34" : "#C1C4CB" }]}></View>
                    <View style={[styles.circleCode, { backgroundColor: pin.length >= 3 ? "#FA8A34" : "#C1C4CB" }]}></View>
                    <View style={[styles.circleCode, { backgroundColor: pin.length >= 4 ? "#FA8A34" : "#C1C4CB" }]}></View>
                </View>
            </View>
            <View style={styles.bottom}>
                <Numpad handlePressNum={handlePressNum} handlePressDel={handlePressDel} />
                <View style={styles.buttonContainer}>
                    <Button text={t("createPin.continue")} onPress={handlePressContinue} />
                </View>
            </View>
        </View>
    );
};

export default CreatePinComponent;
