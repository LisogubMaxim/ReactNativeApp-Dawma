import { useState } from "react";
import { Image, Modal, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import WelcomeCard from "../ui/WelcomeCard/WelcomeCard";
import Button from "../ui/Button/Button";
import SignUpModal from "./modals/SignUpModal/SignUpModal";
import SignInModal from "./modals/SignInModal/SignInModal";

import styles from "./welcomeComponentStyles";

import Bitcoin from "../../../assets/SVG/Bitcoin";
import image2 from "../../../assets/images/welcomeScreen/image2.png";
import image3 from "../../../assets/images/welcomeScreen/image3.png";
import image4 from "../../../assets/images/welcomeScreen/image4.png";
import image5 from "../../../assets/images/welcomeScreen/image5.png";
import image6 from "../../../assets/images/welcomeScreen/image6.png";

const WelcomeComponent = ({ navigation }) => {
    const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
    const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <View style={styles.left}>
                    <View style={styles.card}>
                        <Bitcoin />
                    </View>
                    <WelcomeCard img={image2} text={t("crowdRealEstate")} />
                    <WelcomeCard img={image3} text={t("ETFs")} />
                </View>
                <View style={styles.right}>
                    <WelcomeCard img={image4} text={t("crowdLending")} />
                    <WelcomeCard img={image5} text={t("commodities")} />
                    <WelcomeCard img={image6} text={t("crypto")} />
                </View>
            </View>
            <View>
                <Button
                    text={t("signIn")}
                    isBackground={false}
                    onPress={() => {
                        setIsSignInModalVisible(true);
                    }}
                />
                <Button
                    text={t("signUp")}
                    onPress={() => {
                        setIsSignUpModalVisible(true);
                    }}
                />
            </View>

            <Modal visible={isSignInModalVisible} animationType="slide">
                <SignInModal
                    onPressClose={() => {
                        setIsSignInModalVisible(false);
                    }}
                    navigation={navigation}
                />
            </Modal>

            <Modal visible={isSignUpModalVisible} animationType="slide">
                <SignUpModal
                    onPressClose={() => {
                        setIsSignUpModalVisible(false);
                    }}
                />
            </Modal>
        </View>
    );
};

export default WelcomeComponent;
