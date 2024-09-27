import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeAreaView: {
        flex: 1,
    },
    titleContainer: {
        width: 323,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 600
    },
    normalText: {
        fontSize: 14,
        fontWeight: 400
    },
})