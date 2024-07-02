import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import ArrowBack from "../../../../../assets/SVG/ArrowBack";
import Profile from "../../../../../assets/SVG/Profile";
import Show from "../../../../../assets/SVG/Show";

import styles from "./signUpModalStyles";
import Button from "../../../ui/Button/Button";

const SignUpModal = ({ onPressClose }) => {
    const [isShowPassword, setIsShowPassword] = useState(true);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressClose} style={styles.back}>
                <ArrowBack />
            </TouchableOpacity>
            <View style={styles.modal}>
                <View style={styles.profile}>
                    <Profile style={{ marginLeft: 16 }} />
                    <View style={{ marginBottom: 16 }}>
                        <Text style={{ fontFamily: "Inter_500Medium", fontSize: 15, color: "#06070A" }}>Sign up</Text>
                        <Text style={{ fontFamily: "Inter_400Regular", fontSize: 15, color: "#606773" }}>Personal Account</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 20 }}>
                        <View style={styles.field}>
                            <Text style={styles.label}>Name</Text>
                            <Controller
                                control={control}
                                rules={{
                                    required: "Name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Name must be at least 8 characters",
                                    },
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
                                )}
                                name="name"
                            />
                            {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>E-mail</Text>
                            <Controller
                                control={control}
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        message: "Email is not valid",
                                    },
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
                                )}
                                name="email"
                            />
                            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                        </View>
                        <View style={[styles.field, { marginBottom: 120 }]}>
                            <Text style={styles.label}>Password</Text>
                            <Controller
                                control={control}
                                rules={{
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters",
                                    },
                                    maxLength: {
                                        value: 64,
                                        message: "Password must be at most 64 characters",
                                    },
                                    pattern: {
                                        value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                                        message:
                                            "Password must contain upper and lower case letters, a number, and a special character",
                                    },
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={styles.inputPassword}>
                                        <TextInput
                                            secureTextEntry={isShowPassword}
                                            style={[styles.input, { paddingRight: 50 }]}
                                            onBlur={onBlur}
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
                            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                        </View>
                    </ScrollView>
                    <View style={styles.button}>
                        <Button text={"Continue"} onPress={handleSubmit(onSubmit)} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SignUpModal;
