import { Image } from "react-native"
import { styles } from "./Logo.styles"
const logoReact = require('../../assets/logo-react.png')

export const Logo = () => {
    return (
        <Image source={logoReact} style={styles.logo} resizeMode='contain'></Image>
    )
}