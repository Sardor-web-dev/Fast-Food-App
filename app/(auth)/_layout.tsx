import {Text} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {Redirect, Slot} from "expo-router";

export default function _Layout() {
    const isAuthenticated = true;

    if(isAuthenticated) return <Redirect href="/"/>
    return (
        <SafeAreaView>
            <Text>Auth Layout</Text>
            <Slot/>
        </SafeAreaView>
    )
}
