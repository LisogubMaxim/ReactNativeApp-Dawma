import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import axios from "axios";

import { setUser } from "../../../../store/slices/userSlice";
import queryClient from "../../../../store/queryClient";

import Button from "../../../ui/Button/Button";
import ArrowBack from "../../../../../assets/SVG/ArrowBack";
import Profile from "../../../../../assets/SVG/Profile";
import Show from "../../../../../assets/SVG/Show";

import styles from "./signInModalStyles";

const SignInModal = ({ navigation, onPressClose }) => {
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [isShowButton, setIsShowButton] = useState(true);

    const { t } = useTranslation();

    // const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const loginMutation = useMutation({
        mutationFn: async (credentials) => {
            const { data } = await axios.post("https://dummyjson.com/auth/login", credentials);
            return data;
        },
        onSuccess: (data) => {
            // dispatch(setUser(data));
            onPressClose();

            navigation.navigate("CreatePin", { user: data });
        },
        onError: (error) => {
            console.error("Login error:", error);
        },
    });

    const onSubmit = (data) => {
        loginMutation.mutate(data);
    };

    const handleFocus = () => {
        setIsShowButton(false);
    };

    const handleBlur = () => {
        setIsShowButton(true);
    };

    // const handleRefreshToken = (failedRequest) =>
    //     axios.post("https://dummyjson.com/auth/refresh", { refreshToken: "YOUR_REFRESH_TOKEN_HERE" }).then((tokenRefreshResponse) => {
    //         // Обновляем токен после успешного обновления
    //         // failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.accessToken;
    //         // return Promise.resolve();
    //     });

    // // Настройка автообновления токена
    // RefreshTokenInstance.addAuthTokenRefreshListener(handleRefreshToken);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressClose} style={styles.back}>
                <ArrowBack />
            </TouchableOpacity>
            <View style={styles.modal}>
                <View style={styles.profile}>
                    <Profile style={{ marginLeft: 16 }} />
                    <View style={{ marginBottom: 16 }}>
                        <Text style={{ fontFamily: "Inter_500Medium", fontSize: 15, color: "#06070A" }}>{t("signinModal.login")}</Text>
                        <Text style={{ fontFamily: "Inter_400Regular", fontSize: 15, color: "#606773" }}>
                            {t("signinModal.personalAccount")}
                        </Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 20 }}>
                        {(errors.username || errors.password) && <Text style={styles.errorText}>{t("signinModal.error")}</Text>}

                        <View style={styles.field}>
                            <Text style={styles.label}>{t("signinModal.username")}</Text>
                            <Controller
                                control={control}
                                defaultValue="emilys"
                                rules={{
                                    required: t("signinModal.error"),
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        onFocus={handleFocus}
                                        onBlur={(e) => {
                                            onBlur(e);
                                            handleBlur();
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                                name="username"
                            />
                        </View>
                        <View style={[styles.field, { marginBottom: 120 }]}>
                            <Text style={styles.label}>{t("signinModal.password")}</Text>
                            <Controller
                                control={control}
                                defaultValue="emilyspass"
                                rules={{
                                    required: t("signinModal.error"),
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={styles.inputPassword}>
                                        <TextInput
                                            secureTextEntry={isShowPassword}
                                            style={[styles.input, { paddingRight: 50 }]}
                                            onFocus={handleFocus}
                                            onBlur={(e) => {
                                                onBlur(e);
                                                handleBlur();
                                            }}
                                            onChangeText={onChange}
                                            value={value}
                                        />
                                        <TouchableOpacity style={styles.eye} onPress={() => setIsShowPassword(!isShowPassword)}>
                                            <Show color={isShowPassword ? "#FA8A34" : "#00A36D"} />
                                        </TouchableOpacity>
                                    </View>
                                )}
                                name="password"
                            />
                        </View>
                    </ScrollView>
                    <View style={styles.button}>
                        <Button text={t("signinModal.continue")} onPress={handleSubmit(onSubmit)} />
                        {isShowButton && (
                            <Button
                                text={t("signinModal.createAccount")}
                                isBackground={false}
                                onPress={() => {
                                    // setIsSignInModalVisible(true);
                                }}
                            />
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SignInModal;
