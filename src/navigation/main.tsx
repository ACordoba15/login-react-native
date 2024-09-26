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
            <Stack.Screen name='LoginScreen' 
                component={LoginScreen} 
                options={{ headerShown: false }}/>
            <Stack.Screen name='RegisterScreen' 
                component={RegisterScreen} 
                options={{
                    headerTitle: '', // Oculta el título
                    headerBackTitleVisible: false, // Oculta el texto del botón de retroceso (si existía)
                    headerTransparent: true, // Hace que el header sea transparente
                }}/>
            <Stack.Screen name='ForgotPasswordScreen' 
                component={ForgotPasswordScreen} 
                options={{
                    headerTitle: '', // Oculta el título
                    headerBackTitleVisible: false, // Oculta el texto del botón de retroceso (si existía)
                    headerTransparent: true, // Hace que el header sea transparente
                }}/>
        </Stack.Navigator>
    )
}