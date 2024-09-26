import { Image } from "react-native"
import { styles } from "./Logo.styles"
const logo = require('../../assets/logo.png')

export const Logo = () => {
    return (
        <Image source={logo} style={styles.logo} resizeMode='contain'></Image>
    )
}