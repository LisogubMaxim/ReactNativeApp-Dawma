import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";
import { I18nextProvider, useTranslation } from "react-i18next";

import { store, persistor } from "./src/store/store";
import i18n from "./assets/i18n/i18n";

import Navigation from "./src/components/Navigation/Navigation";
import LoadingScreen from "./src/screen/LoadingScreen";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { queryClient, persister } from "./src/store/queryClient";

export default function App() {
    const [isFontsLoaded, setIsFontsLoaded] = useState(false);
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded) {
            setIsFontsLoaded(true);
        }
    }, [fontsLoaded]);

    if (!isFontsLoaded) {
        return (
            <View style={styles.container}>
                <LoadingScreen />
            </View>
        );
    }

    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingScreen />} persistor={persistor}>
                <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
                    <I18nextProvider i18n={i18n}>
                        <Navigation />
                    </I18nextProvider>
                </PersistQueryClientProvider>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F3F5",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
