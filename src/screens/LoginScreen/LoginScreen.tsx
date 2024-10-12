import { Alert, Text, View } from "react-native"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamsList } from "../../navigation/main";

import { styles } from "./LoginScreen.styles"; 
import { Logo } from "../../components/Logo/Logo";
import { Button } from "../../components/Button/Button";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Input } from "../../components/Input/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleAction } from "../../helpers/handleActions";
import { ImageBg } from "../../components/ImageBackground/ImageBg";
type HomeProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;

export const LoginScreen = ({navigation, route} : HomeProps) => {
    const { username, password } = route.params || {};
    
    const [inputUsername, setInputUsername] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");
    
    useEffect(() => {
        if (username) {
            setInputUsername(username);
        }
        if (password) {
            setInputPassword(password);
        }
    }, [username, password]);

    const handleInputText = (text: string): void =>{
        setInputUsername(text);
    }
    
    const handleInputPassword = (text: string): void =>{
        setInputPassword(text);
    }

    const handleLogin = async() => {
        try {
            if(inputPassword === '' || inputUsername === ''){
                return Alert.alert(
                    "¡Error!",
                    "El usuario o la contraseña son incorrectos"
                );
            }
            // Login BE local
            const response = await axios.post('http://localhost:8000/api/user/login', {
                username: inputUsername,
                password: inputPassword
            });

            console.log('Has iniciado sesión exitosamente', response.data.data.account.contact_card.individual.name ?? inputUsername);
            Alert.alert(
                `Bienvenid@: ${response.data.data.account.contact_card.individual.name ?? inputUsername}`,
                "Has iniciado sesión exitosamente"
            );
            await handleAction(inputUsername, 'Inicio de sesión');

        } catch (err) {
            Alert.alert(
                "¡Error!",
                "El usuario o la contraseña son incorrectos"
            );
        }
    }

    return (
        <View style={styles.safeAreaView}>
            {
                <View style={styles.container}>
                    <Logo/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Bienvenido</Text>
                    </View>
                    <View style={styles.titleContainer}>
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
                        <LinkButton title="Crea tu cuenta" onPress={() => {navigation.navigate('RegisterScreen',{username: inputUsername, password: inputPassword})}}/>
                    </View>
                </View>
            }
        </View>
    )
}
