import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    safeAreaView: {
        flex: 1
    },
    welcomeContainer: {
        width: 323,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 600
    },
    loginContainer: {
        width: 323,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    loginText: {
        fontSize: 14,
        fontWeight: 400
    },
    createAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 323
    },
    forgotPasswordContainer: {
        flexDirection: 'row-reverse',
        width: 323
    },
    createAccountText: {
        fontSize: 14,
    }
})