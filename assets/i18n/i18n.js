import "intl-pluralrules";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const resources = {
    en: {
        translation: {
            language: "Language",
            settings: "Settings",
            basic: "Basic",
            other: "Other",
            logOut: "Log Out",
            home: "Home",
            portfolio: "Portfolio",
            search: "Search",
            profile: "Profile",

            //homeScreen
            yourName: "Your name",
            testTask: "Test task",
            loremIpsum: "Lorem ipsum",
            goToCall: "Go to call",
            beforeYouStart: "Before you Start",
            steps: "steps",
            linkYou: "Link you Bank Account",
            addFunds: "Add funds to your wallet",
            posts: "Posts",

            //postScreen
            about: "About",
            comments: "Comments",
            back: "Back",

            //welcomeScreen
            crowdRealEstate: "Crowd real estate",
            ETFs: "ETFs",
            crowdLending: "Crowd lending",
            commodities: "Commodities",
            crypto: "Crypto",
            signIn: "Sign In",
            signUp: "Sign up",

            signinModal: {
                login: "Login",
                personalAccount: "Personal Account",
                username: "Username",
                password: "Password",
                continue: "Continue",
                createAccount: "Create Account",
                error: "Error: Invalid E-mail or Password",
            },

            searchScreen: {
                search: "Search",
                searchProducts: "Search Products...",
                id: "ID:",
                name: "Name:",
            },

            createPin: {
                createPin: "Create a Pin code",
                repeatPin: "Repeat a Pin code",
                enterCode: "enter 4 digit code:",
                continue: "Continue",
            },

            enterPin: {
                changeAccount: "Change Account",
                enterCode: "Enter 4 digit code:",
                continue: "Continue",
                wrongPin: "Wrong Pin",
            },
        },
    },
    ar: {
        translation: {
            language: "لغة",
            settings: "إعدادات",
            basic: "أساسي",
            other: "آخر",
            logOut: "تسجيل خروج",
            home: "بيت",
            portfolio: "مَلَفّ",
            search: "يبحث",
            profile: "حساب تعريفي",

            //homeScreen
            yourName: "اسمك",
            testTask: "مهمة الاختبار",
            loremIpsum: "لوريم إيبسوم",
            goToCall: "لوريم إيبسوم",
            beforeYouStart: "قبل ان تبدا",
            steps: "خطوات",
            linkYou: "ربط حسابك البنكي",
            addFunds: "أضف الأموال إلى محفظتك",
            posts: "دعامات",

            //postScreen
            about: "عن",
            comments: "تعليقات",
            back: "خلف",

            //welcomeScreen
            crowdRealEstate: "العقارات الحشد",
            ETFs: "صناديق الاستثمار المتداولة",
            crowdLending: "الإقراض الجماعي",
            commodities: "السلع",
            crypto: "تشفير",
            signIn: "تسجيل الدخول",
            signUp: "اشتراك",

            //SignInModal
            signinModal: {
                login: "تسجيل الدخول",
                personalAccount: "حساب شخصي",
                username: "اسم المستخدم",
                password: "كلمة المرور",
                continue: "يكمل",
                createAccount: "إنشاء حساب",
                error: "خطأ: البريد الإلكتروني أو كلمة المرور غير صالحة",
            },

            searchScreen: {
                search: "يبحث",
                searchProducts: "البحث عن المنتجات...",
                id: "بطاقة تعريف:",
                name: "اسم:",
            },

            createPin: {
                createPin: "إنشاء رمز Pin",
                repeatPin: "كرر الرمز السري",
                enterCode: "أدخل الرمز المكون من 4 أرقام:",
                continue: "يكمل",
            },

            enterPin: {
                changeAccount: "تغير الحساب",
                enterCode: "أدخل الرمز المكون من 4 أرقام:",
                continue: "يكمل",
                wrongPin: "دبوس الخطأ",
            },
        },
    },
};

const getSavedLanguage = async () => {
    try {
        const savedLanguage = await AsyncStorage.getItem("language");
        return savedLanguage || "en";
    } catch (error) {
        console.error("Failed to load the language from AsyncStorage", error);
        return "en";
    }
};

const initI18n = async () => {
    const savedLanguage = await getSavedLanguage();
    i18n.use(initReactI18next).init({
        resources,
        lng: savedLanguage, // Язык по умолчанию
        fallbackLng: "en", // Язык, который будет использоваться при отсутствии перевода для текущего
        interpolation: {
            escapeValue: false, // Необходимо для React
        },
    });
};

initI18n();

export default i18n;
