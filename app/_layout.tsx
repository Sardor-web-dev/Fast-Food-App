import {useFonts} from "expo-font";
import {SplashScreen, Stack} from "expo-router";
import {useEffect} from "react";

import "./global.css";
import * as Sentry from '@sentry/react-native';
import useAuthStore from "@/store/auth.store";

Sentry.init({
    dsn: 'https://4d8bdd39dc21404ec704160909f720b1@o4509649421533184.ingest.de.sentry.io/4509649529602128',

    // Adds more context data to events (IP address, cookies, user, etc.)
    // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
    sendDefaultPii: true,

    // Configure Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,
    integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

    // uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: __DEV__,
});

export default Sentry.wrap(function RootLayout() {
    const {isLoading, fetchAuthentificatedUser} = useAuthStore();

    const [fontsLoaded, error] = useFonts({
        "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
        "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
        "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
        "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
        "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);


    useEffect(() => {
        fetchAuthentificatedUser()
    }, []);


    if (!fontsLoaded || isLoading) return null;

    return <Stack screenOptions={{headerShown: false}}/>;
});