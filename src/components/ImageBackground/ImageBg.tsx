import { ImageBackground } from "react-native"

import {styles} from "./ImageBg.styles"
import { ReactNode } from "react";

interface Props {
    children: ReactNode; // El tipo children es ReactNode
}

export const ImageBg = ({children}: Props) => {
    return (
        <ImageBackground 
            source={require('../../assets/fondo.png')} // Ruta a la imagen
            style={styles.background} // Estilos para ocupar toda la pantalla
            resizeMode="cover" // Opcional: para ajustar la imagen
        >{children}</ImageBackground>
    )
}