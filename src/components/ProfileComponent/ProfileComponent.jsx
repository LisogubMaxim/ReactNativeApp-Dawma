import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { clearUser } from "../../store/slices/userSlice";

import Language from "../../../assets/SVG/Language";
import ArrowRight from "../../../assets/SVG/ArrowRight";
import Out from "../../../assets/SVG/Out";

import styles from "./profileComponentStyles";

const ProfileComponent = ({ navigation }) => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const handleLogout = () => {
        dispatch(clearUser());
        navigation.reset({
            index: 0,
            routes: [{ name: "Welcome" }],
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleMain}>{t("settings")}</Text>
            <View style={styles.profile}>
                <Image
                    source={{
                        uri: user.image,
                    }}
                    style={styles.image}
                />
                <Text style={styles.name}>
                    {user.firstName} {user.lastName}
                </Text>
            </View>
            <View style={styles.basic}>
                <Text style={styles.title}>{t("basic")}</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Language")}>
                    <Language style={{ marginRight: 8 }} />
                    <Text style={{ fontFamily: "Inter_500Medium", fontSize: 15, color: "#06070A", flex: 1 }}>{t("settings")}</Text>
                    <ArrowRight color={"#C1C4CB"} />
                </TouchableOpacity>
            </View>
            <View style={styles.other}>
                <Text style={styles.title}>{t("other")}</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Out style={{ marginRight: 8 }} />
                    <Text style={{ fontFamily: "Inter_500Medium", fontSize: 15, color: "#06070A", flex: 1 }}>{t("logOut")}</Text>
                    <ArrowRight color={"#C1C4CB"} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileComponent;
