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
import Svg, { Path } from "react-native-svg";
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
            // const response = await axios.post('http://localhost:8000/api/user/login', {
            //     username: inputUsername,
            //     password: inputPassword
            // });

            // Login Monis
            const response = await axios.post('https://apimonisuat.teledolar.com/api/v1/accounts/log_in', {
                client: inputUsername,
                password: inputPassword,
                device_id: "FE Mobile",
                timestamp: "1728416213"
            });

            console.log('Has iniciado sesión exitosamente', response.data.data.account.contact_card.individual.name);
            Alert.alert(
                `Bienvenid@: ${response.data.data.account.contact_card.individual.name}`,
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
                            icon={<Svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                {...props}
                              >
                                <Path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
                              </Svg>}/>
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