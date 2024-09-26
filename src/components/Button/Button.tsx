import { Text, TouchableOpacity } from "react-native"
import { styles } from "./Button.styles"

type button = {
    title: string;
    onPress: () => void;
}
export const Button = ({title, onPress} : button) => {
    return (
        <TouchableOpacity onPress={() => {onPress()}} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}