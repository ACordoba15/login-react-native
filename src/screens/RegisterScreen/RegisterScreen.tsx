import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, Text, View } from "react-native"
import { RootStackParamsList } from "../../navigation/main";
import { styles } from "./RegisterScreen.styles";
import { Logo } from "../../components/Logo/Logo";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import axios from "axios";
import { handleAction } from "../../helpers/handleActions";
import { Button } from "../../components/Button/Button";
import { ImageBg } from "../../components/ImageBackground/ImageBg";

type RegisterProps = NativeStackScreenProps<RootStackParamsList, 'RegisterScreen'>;

export const RegisterScreen = ({ navigation, route }: RegisterProps) => {
    const {username, password} = route.params;
    const [inputUsername, setInputUsername] = useState<string>(username);
    const [inputPassword, setInputPassword] = useState<string>(password);

    const handleInputText = (text: string): void =>{
        setInputUsername(text)
    }
    const handleInputPassword = (text: string): void =>{
        setInputPassword(text)
    }

    const handleRegister = async() => {
        try {
            if(inputUsername === '' || inputPassword === ''){
                return Alert.alert(
                    "!Error!",
                    "Nombre de usuario o contraseña inválida."
                );
            }
            const response = await axios.post('http://localhost:8000/api/user', {
                username: inputUsername,
                password: inputPassword
            });

            console.log('Registro exitoso', response.data);
            Alert.alert(
                "!Felicidades!",
                "Tu cuenta se ha creado correctamente.",
                [
                    {
                        text: 'Aceptar',
                        onPress: () => navigation.navigate('LoginScreen', {username: inputUsername, password: inputPassword}),
                    }
                ]
            );
            await handleAction(inputUsername, 'Registro');

        } catch (err) {
            console.log(err)
            Alert.alert(
                "!Error!",
                "Tu cuenta no se ha podido crear correctamente. Nombre de usuario o contraseña inválida."
            );
        }
    }
    

    return (
        <View style={styles.safeAreaView}>
            {
                <View style={styles.container}>
                    <Logo/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Registrate</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.normalText}>Ingresa tus datos para registrarte</Text>
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
                    <Button title="Crear cuenta" onPress={() => {handleRegister()}}/>
                </View>
            }
        </View>
    )
}