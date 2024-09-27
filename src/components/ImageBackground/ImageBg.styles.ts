import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1, // Asegura que la imagen ocupe toda la pantalla
        justifyContent: 'center', // Centrar el contenido en la pantalla
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#fff', // Color blanco para que contraste con la imagen
        marginBottom: 20,
    },
});