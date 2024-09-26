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
            await handleAction();

        } catch (err) {
            console.warn('Error al iniciar sesión, por favor revisa tus credenciales');
        }
    }

    const handleAction = async() => {
        try {
            const response = await axios.post('http://localhost:8000/api/record', {
                username: inputUsername,
                action: 'Inicio de sesión'
            });

            console.log('Se agregó a la bitácora', response.data);

        } catch (err) {
            console.warn('Error al agregar a la bitácora');
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Logo/>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Bienvenido</Text>
                </View>
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Ingresa tus datos para inciar sesión</Text>
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