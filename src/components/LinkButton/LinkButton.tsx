import { Text, TouchableOpacity } from "react-native"
import { styles } from "./LinkButton.styles"

type linkButton = {
    title: string;
    onPress: () => void;
}
export const LinkButton = ({title, onPress}: linkButton) => {
    return (
        <TouchableOpacity onPress={() => {onPress()}} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}