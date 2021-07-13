import { Dimensions } from "react-native"

const {width, height} = Dimensions.get('screen')
export const GlobalConfig = {

    dimension: {
        width: width,
        height: height,
    },
    colors: {
        bgBotaoVerde: "#276955",
        txBotaoBranco: "#fff",
        bgBotaoBranco: "#fff",
        txBotaoVerde: "#276955",
    }

}