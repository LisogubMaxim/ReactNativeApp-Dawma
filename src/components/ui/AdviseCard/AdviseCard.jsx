import { Image, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import Link from "../../../../assets/SVG/Link";
import FullArrowRight from "../../../../assets/SVG/FullArrowRight";

import styles from "./adviseCardStyles";

const AdviseCard = ({ backgroundColor = "#636363", numSteps, color, text }) => {
    const { t } = useTranslation();

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <View style={styles.up}>
                <View style={styles.circle}>
                    <Link />
                </View>
                <Text style={{ color: color, fontFamily: "Inter_500Medium", fontSize: 15, flex: 1 }}>{text}</Text>
            </View>
            <View style={styles.down}>
                <Text style={{ color: color, fontFamily: "Inter_500Medium", fontSize: 15 }}>
                    {numSteps} {t("steps")}
                </Text>
                <FullArrowRight color={color} />
            </View>
        </View>
    );
};

export default AdviseCard;
