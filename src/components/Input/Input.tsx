import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./Input.styles";

type input = {
    placeholder: string;
    icon: any;
    iconSecondary?: any;
    isPasswordInput?: boolean;
    text: string,
    onPress: (text: string) => void;
}

export const Input = ({placeholder, text, onPress, icon, iconSecondary, isPasswordInput=false} : input) => {
    const [visiblePasswords, setVisiblePasswords] = useState<boolean>(false);
    const [passwordInput, setPasswordInput] = useState<boolean>(isPasswordInput);
    
    function togglePasswordVisibility (): void {
        setVisiblePasswords(!visiblePasswords);
        setPasswordInput(!passwordInput);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} 
                placeholder={placeholder} 
                placeholderTextColor='#006E26'
                value={text} 
                onChangeText={onPress}
                secureTextEntry={passwordInput}>
            </TextInput>
            {isPasswordInput ? (
                <TouchableOpacity onPress={togglePasswordVisibility} 
                    style={styles.iconContainer}>
                        <Image source={visiblePasswords ? icon : iconSecondary} 
                            style={styles.icon}/>
                </TouchableOpacity>
            ) : (
                <Image source={icon} style={styles.iconContainer} />
            )}
        </View>
    )
}