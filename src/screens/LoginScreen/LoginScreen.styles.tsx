import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    safeAreaView: {
        flex: 1
    },
    button: {
        marginVertical: 20,
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    buttonText: {
        color: 'white'
    }
})