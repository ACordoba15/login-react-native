import { StyleSheet } from "react-native";
import { Input } from "./Input";

export const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        width: 323,
    },
    input: {
        backgroundColor: '#F2F2F2',
        width: 323,
        height: 60,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        padding: 20,
        fontSize: 16,
        color: '#006E26'
    },
    iconContainer: {
        position: 'absolute',
        left: 281,                
        top: 30, 
    },
    icon: {                  
        width: 24,                 
        height: 24,               
    },
})