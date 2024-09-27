import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/main";
import { Alert, Text, View } from "react-native";
import { styles } from "./ForgotPasswordScreen.styles";
import { ImageBg } from "../../components/ImageBackground/ImageBg";
import { Logo } from "../../components/Logo/Logo";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import { handleAction } from "../../helpers/handleActions";
import axios from "axios";
import { Button } from "../../components/Button/Button";

type ForgotPasswordProps = NativeStackScreenProps<RootStackParamsList, 'ForgotPasswordScreen'>;

export const ForgotPasswordScreen = ({ navigation, route }: ForgotPasswordProps) => {
    const { username } = route.params;
    const [inputUsername, setInputUsername] = useState<string>(username);
    const [inputPassword, setInputPassword] = useState<string>("");

    const handleInputText = (text: string): void =>{
        setInputUsername(text)
    }
    const handleInputPassword = (text: string): void =>{
        setInputPassword(text)
    }
    
    const handleChangePassword = async() => {
        try {
            if(inputPassword === ''){
                return Alert.alert(
                    "¡Error!",
                    "Contraseña inválida."
                );
            }
            const response = await axios.put('http://localhost:8000/api/user/', {
                username: inputUsername,
                password: inputPassword
            });

            console.log('Registro exitoso', response.data);
            Alert.alert(
                "¡Felicidades!",
                "Tu contraseña se ha actualizado correctamente.",
                [
                    {
                        text: 'Aceptar',
                        onPress: () => navigation.navigate('LoginScreen', {username: inputUsername, password: inputPassword}),
                    }
                ]
            );
            await handleAction(inputUsername, 'Cambio de contraseña');

        } catch (err) {
            console.log(err);
            Alert.alert(
                "¡Error!",
                "No se pudo actualizar tu contraseña. Nombre de usuario o contraseña incorrecta."
            );
        }
    }

    return (
        <View style={styles.safeAreaView}>
            <ImageBg>
                {
                    <View style={styles.container}>
                        <Logo/>
                        <View style={styles.TitleContainer}>
                            <Text style={styles.titleText}>Cambiá tu contraseña</Text>
                        </View>
                        <View style={styles.TitleContainer}>
                            <Text style={styles.normalText}>Ingresá tu nombre de usuario y tu nueva contraseña</Text>
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
                        <Button title="Actualizar contraseña" onPress={() => {handleChangePassword()}}/>
                    </View>
                }
            </ImageBg>
        </View>   
    )
}