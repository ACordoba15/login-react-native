import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen';


export type RootStackParamsList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    ForgotPasswordScreen: {username: string};
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
            <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        </Stack.Navigator>
    )
}