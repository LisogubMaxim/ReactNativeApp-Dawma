import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import WelcomeScreen from "../../screen/WelcomeScreen";
import HomeScreen from "../../screen/HomeScreen";
import PortfolioScreen from "../../screen/PortfolioScreen";
import SearchScreen from "../../screen/SearchScreen";
import ProfileScreen from "../../screen/ProfileScreen";
import PostScreen from "../../screen/PostScreen";
import LanguageScreen from "../../screen/LanguageScreen";
import CreatePinScreen from "../../screen/CreatePinScreen";
import RepeatPinScreen from "../../screen/RepeatPinScreen";
import EnterPinScreen from "../../screen/EnterPinScreen";

import HomeSVG from "../../../assets/SVG/tabNavigator/HomeSVG";
import PortfolioSVG from "../../../assets/SVG/tabNavigator/PortfolioSVG";
import SearchSVG from "../../../assets/SVG/tabNavigator/SearchSVG";
import ProfileSVG from "../../../assets/SVG/tabNavigator/ProfileSVG";

const Navigation = () => {
    const user = useSelector((state) => state.user.user);

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const initialScreen = user ? "EnterPin" : "Welcome";

    const HomeTabs = () => {
        const { t } = useTranslation();
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#FA8A34",
                    tabBarInactiveTintColor: "#858C94",
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => <HomeSVG color={color} isFill={focused} />,
                        tabBarLabel: t("home"),
                    }}
                />
                <Tab.Screen
                    name="Portfolio"
                    component={PortfolioScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => <PortfolioSVG color={color} isFill={focused} />,
                        tabBarLabel: t("portfolio"),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => <SearchSVG color={color} isFill={focused} />,
                        tabBarLabel: t("search"),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => <ProfileSVG color={color} isFill={focused} />,
                        tabBarLabel: t("profile"),
                    }}
                />
            </Tab.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialScreen}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CreatePin" component={CreatePinScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RepeatPin" component={RepeatPinScreen} options={{ headerShown: false }} />
                <Stack.Screen name="EnterPin" component={EnterPinScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeTab" component={HomeTabs} options={{ headerShown: false }} />
                <Stack.Screen name="Post" component={PostScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Language" component={LanguageScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
