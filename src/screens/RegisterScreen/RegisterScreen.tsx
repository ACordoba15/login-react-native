import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, View } from "react-native"
import { RootStackParamsList } from "../../navigation/main";
import { styles } from "./RegisterScreen.styles";

type RegisterProps = NativeStackScreenProps<RootStackParamsList, 'RegisterScreen'>;

export const RegisterScreen = ({navigation} : RegisterProps) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text>Registro</Text>
            </View>
        </SafeAreaView>
    )
}