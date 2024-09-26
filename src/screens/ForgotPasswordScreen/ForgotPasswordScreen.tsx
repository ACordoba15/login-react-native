import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/main";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./ForgotPasswordScreen.styles";

type ForgotPasswordProps = NativeStackScreenProps<RootStackParamsList, 'ForgotPasswordScreen'>;

export const ForgotPasswordScreen = ({route}: ForgotPasswordProps) => {
    const { username } = route.params;
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text>Recuperar contraseña</Text>
                <Text>{username}</Text>
            </View>
        </SafeAreaView>   
    )
}