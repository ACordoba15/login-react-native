import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, View } from "react-native"
import { RootStackParamsList } from "../../navigation/main";
import { styles } from "./RegisterScreen.styles";
import { Logo } from "../../components/Logo/Logo";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import axios from "axios";
import { handleAction } from "../../helpers/handleActions";
import { Button } from "../../components/Button/Button";

type RegisterProps = NativeStackScreenProps<RootStackParamsList, 'RegisterScreen'>;

export const RegisterScreen = ({navigation} : RegisterProps) => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleInputText = (text: string): void =>{
        setInputUsername(text)
    }
    const handleInputPassword = (text: string): void =>{
        setInputPassword(text)
    }

    const handleRegister = async() => {
        try {
            const response = await axios.post('http://localhost:8000/api/user/', {
                username: inputUsername,
                password: inputPassword
            });

            console.log('Registro exitoso', response.data);
            await handleAction(inputUsername, 'Registro');

        } catch (err) {
            console.warn('Error al iniciar sesión, por favor revisa tus credenciales');
        }
    }
    

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Logo/>
                <View style={styles.registerContainer}>
                    <Text style={styles.titleText}>Registrate</Text>
                </View>
                <View style={styles.registerContainer}>
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
        </SafeAreaView>
    )
}