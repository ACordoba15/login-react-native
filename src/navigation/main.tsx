import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen';


export type RootStackParamsList = {
    LoginScreen: {username: string, password: string};
    RegisterScreen: {username: string, password: string};
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
                    headerBackTitleVisible: true, // Oculta el texto del botón de retroceso (si existía)
                    headerTransparent: true, // Hace que el header sea transparente
                    headerBackTitle: 'Volver', // Texto del botón atrás
                    headerTintColor: '#1E40AF' // Cambia el color del texto y de la flecha
                }}/>
            <Stack.Screen name='ForgotPasswordScreen' 
                component={ForgotPasswordScreen} 
                options={{
                    headerTitle: '', // Oculta el título
                    headerBackTitleVisible: true, // Oculta el texto del botón de retroceso (si existía)
                    headerTransparent: true, // Hace que el header sea transparente
                    headerBackTitle: 'Volver', // Texto del botón atrás
                    headerTintColor: '#1E40AF' // Cambia el color del texto y de la flecha
                }}/>
        </Stack.Navigator>
    )
}