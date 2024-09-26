import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamsList } from "../../navigation/main";

import { styles } from "./LoginScreen.styles"; 
import { Logo } from "../../components/Logo/Logo";
import { Button } from "../../components/Button/Button";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import axios from "axios";
import { handleAction } from "../../helpers/handleActions";
type HomeProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;

export const LoginScreen = ({navigation} : HomeProps) => {

    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleInputText = (text: string): void =>{
        setInputUsername(text)
    }
    const handleInputPassword = (text: string): void =>{
        setInputPassword(text)
    }

    const handleLogin = async() => {
        try {
            const response = await axios.post('http://localhost:8000/api/user/login', {
                username: inputUsername,
                password: inputPassword
            });

            console.log('Login exitoso', response.data);
            await handleAction(inputUsername, 'Inicio de sesión');

        } catch (err) {
            console.warn('Error al iniciar sesión, por favor revisa tus credenciales');
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Logo/>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.titleText}>Bienvenido</Text>
                </View>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.normalText}>Ingresa tus datos para inciar sesión</Text>
                </View>
                <View>
                    <Input placeholder="Usuario" 
                        text={inputUsername}
                        onPress={handleInputText}
                        icon={require('../../assets/user.png')}/>
                    <Input placeholder="Contraseña" 
                        text={inputPassword}
                        onPress={handleInputPassword}
                        isPasswordInput={true} 
                        icon={require('../../assets/eye.png')} 
                        iconSecondary={require('../../assets/eye-slash.png')}/>
                </View>
                <View style={styles.forgotPasswordContainer}>
                    <LinkButton title="Olvidé mi contraseña" onPress={() => {navigation.navigate('ForgotPasswordScreen', {username: inputUsername})}}/>
                </View>
                <Button title="Ingresar" onPress={() => {handleLogin()}}/>
                <View style={styles.createAccountContainer}>
                    <Text style={styles.createAccountText}>¿No tenés cuenta aún?</Text>
                    <LinkButton title="Crea tu cuenta" onPress={() => {navigation.navigate('RegisterScreen')}}/>
                </View>
            </View>
        </SafeAreaView>
    )
}