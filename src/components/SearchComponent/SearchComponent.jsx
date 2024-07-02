import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Search from "../../../assets/SVG/Search";

import styles from "./searchComponentStyles";
import { useState } from "react";

const SearchComponent = ({ navigation }) => {
    const [searchInput, setSearchInput] = useState("");

    const { control, watch } = useForm();
    const { t } = useTranslation();

    const posts = useSelector((state) => state.posts.posts);

    const filteredItems = posts.filter((item) => item.id.toString().includes(searchInput));

    return (
        <View>
            <Text style={styles.title}>{t("searchScreen.search")}</Text>
            <View style={styles.search}>
                <Search />
                <Controller
                    control={control}
                    name="search"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder={t("searchScreen.searchProducts")}
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                onChange(text);
                                setSearchInput(text);
                            }}
                            value={value}
                        />
                    )}
                />
            </View>
            <View style={styles.postList}>
                {filteredItems.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.post} onPress={() => navigation.navigate("Post", { post: item })}>
                        <Text style={styles.id}>
                            {t("searchScreen.id")} {item.id}
                        </Text>
                        <Text style={styles.name}>
                            {t("searchScreen.name")} {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default SearchComponent;
