import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/main";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./ForgotPasswordScreen.styles";
import { ImageBg } from "../../components/ImageBackground/ImageBg";

type ForgotPasswordProps = NativeStackScreenProps<RootStackParamsList, 'ForgotPasswordScreen'>;

export const ForgotPasswordScreen = ({ navigation, route }: ForgotPasswordProps) => {
    const { username } = route.params;
    return (
        <View style={styles.safeAreaView}>
            <ImageBg>
                {
                    <View style={styles.container}>
                        <Text>Recuperar contraseña</Text>
                        <Text>{username}</Text>
                    </View>
                }
            </ImageBg>
        </View>   
    )
}