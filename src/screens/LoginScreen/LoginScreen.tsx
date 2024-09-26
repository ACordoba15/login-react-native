import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamsList } from "../../navigation/main";

import { styles } from "./LoginScreen.styles"; 
type HomeProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;

export const LoginScreen = ({navigation} : HomeProps) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text>Home</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('ForgotPasswordScreen', {username: 'Andres'})}} style={styles.button}>
                    <Text style={styles.buttonText}>Olvidó su constraseña</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('RegisterScreen')}} style={styles.button}>
                    <Text style={styles.buttonText}>Crea una cuenta</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}