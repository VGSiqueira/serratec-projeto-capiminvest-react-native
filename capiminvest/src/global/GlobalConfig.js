import { Dimensions } from "react-native"

const {width, height} = Dimensions.get('screen')
export const GlobalConfig = {

    dimension: {
        width: width,
        height: height,
        marginH: width / 25,
        marginCabecalho: height / 20
    },
    colors: {
        bgBotaoVerde: "#276955",
        txBotaoBranco: "#fff",
        bgBotaoBranco: "#fff",
        txBotaoVerde: "#276955",
    }

}