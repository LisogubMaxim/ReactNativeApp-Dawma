import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
// import i18n from "i18next";

import ArrowBack from "../../../assets/SVG/ArrowBack";
import Language from "../../../assets/SVG/Language";
import Check from "../../../assets/SVG/Check";

import styles from "./languageComponentStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageComponent = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const [curentLanguage, setCurrentLanguage] = useState(i18n.language);

    const language = [
        { languageName: "English", language: "en" },
        { languageName: "Arabic", language: "ar" },
    ];

    useEffect(() => {
        const loadSavedLanguage = async () => {
            const savedLanguage = await AsyncStorage.getItem("language");
            if (savedLanguage) {
                setCurrentLanguage(savedLanguage);
                i18n.changeLanguage(savedLanguage);
            }
        };
        loadSavedLanguage();
    }, []);

    const handleChangeLanguage = async (item) => {
        setCurrentLanguage(item.language);
        i18n.changeLanguage(item.language);
        try {
            await AsyncStorage.setItem("language", item.language);
        } catch (error) {
            console.error("Failed to save the language to AsyncStorage", error);
        }
    };

    return (
        <View>
            <TouchableOpacity style={{ marginTop: 56, marginLeft: 8, marginBottom: 20 }} onPress={() => navigation.goBack()}>
                <ArrowBack color="#606773" />
            </TouchableOpacity>
            <View style={styles.language}>
                <Text style={styles.title}>{t("language")}</Text>
                <View style={styles.container}>
                    {language.map((item, index) => (
                        <TouchableOpacity style={styles.buttonLanguage} key={index} onPress={() => handleChangeLanguage(item)}>
                            <Language style={{ marginRight: 8 }} />
                            <Text style={{ fontFamily: "Inter_500Medium", fontSize: 15, color: "#06070A", flex: 1 }}>
                                {item.languageName}
                            </Text>
                            <View style={[styles.check, { backgroundColor: item.language == curentLanguage ? "#FA8A34" : "#EBEFF5" }]}>
                                {item.language == curentLanguage && <Check />}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default LanguageComponent;
