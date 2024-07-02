import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import * as SecureStore from "expo-secure-store";

import { setUser, clearUser } from "../../store/slices/userSlice";

import Numpad from "../ui/Numpad/Numpad";
import Button from "../ui/Button/Button";

import Profile from "../../../assets/SVG/tabNavigator/ProfileSVG";
import ArrowBack from "../../../assets/SVG/ArrowBack";

import styles from "./enterPinComponentStyles";
import { useDispatch, useSelector } from "react-redux";

const EnterPinComponent = ({ navigation }) => {
    const user = useSelector((state) => state.user.user);
    const result = SecureStore.getItemAsync(user.firstName);
    const [pin, setPin] = useState("");
    const [isEqual, setIsEqual] = useState(true);

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handlePressNum = (num) => {
        if (pin.length === 4) return;
        setPin(pin + num);
    };

    const handlePressDel = () => {
        setPin(pin.slice(0, -1));
    };

    const handlePressContinue = async () => {
        if (pin.length !== 4) return;
        if (pin !== result._j) {
            setPin("");
            setIsEqual(false);
            return;
        }

        try {
            dispatch(setUser(user));
            navigation.navigate("HomeTab");
        } catch (error) {
            console.log("Could not save PIN", error);
        }
    };

    const handleChangeAccount = () => {
        dispatch(clearUser());
        navigation.reset({
            index: 0,
            routes: [{ name: "Welcome" }],
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <ArrowBack />
            </TouchableOpacity>
            <View style={styles.top}>
                <View style={styles.circle}>
                    {user.image ? (
                        <Image
                            source={{
                                uri: user.image,
                            }}
                            style={styles.image}
                        />
                    ) : (
                        <Profile color={"#009E81"} />
                    )}
                </View>
                <Text style={{ fontFamily: "Inter_500Medium", fontSize: 15, color: "#06070A", marginBottom: 7 }}>{user.email}</Text>
                <TouchableOpacity onPress={handleChangeAccount}>
                    <Text style={{ fontFamily: "Inter_400Regular", fontSize: 15, color: "#FA8A34" }}>
                        {t("enterPin.changeAccount")}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.codeContainer}>
                <Text style={{ fontFamily: "Inter_400Regular", fontSize: 15, color: "#606773", marginBottom: 25 }}>
                    {t("enterPin.enterCode")}
                </Text>
                <View style={styles.code}>
                    <View style={[styles.circleCode, { backgroundColor: pin.length >= 1 ? "#FA8A34" : "#C1C4CB" }]}></View>
                    <View style={[styles.circleCode, { backgroundColor: pin.length >= 2 ? "#FA8A34" : "#C1C4CB" }]}></View>
                    <View style={[styles.circleCode, { backgroundColor: pin.length >= 3 ? "#FA8A34" : "#C1C4CB" }]}></View>
                    <View style={[styles.circleCode, { backgroundColor: pin.length >= 4 ? "#FA8A34" : "#C1C4CB" }]}></View>
                </View>
                {!isEqual && <Text style={{ color: "red" }}> {t("enterPin.wrongPin")}</Text>}
            </View>
            <View style={styles.bottom}>
                <Numpad handlePressNum={handlePressNum} handlePressDel={handlePressDel} />
                <View style={styles.buttonContainer}>
                    <Button text={t("enterPin.continue")} onPress={handlePressContinue} />
                </View>
            </View>
        </View>
    );
};

export default EnterPinComponent;
