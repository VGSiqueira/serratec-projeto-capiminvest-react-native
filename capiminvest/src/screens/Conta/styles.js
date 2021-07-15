import { StyleSheet } from "react-native"
import { GlobalConfig } from "../../global/GlobalConfig"

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: GlobalConfig.dimension.marginH
    },
    title: {
        marginTop: GlobalConfig.dimension.marginCabecalho
    },
    boxPerfil:{
        height: GlobalConfig.dimension.height / 4,
        alignItems: "center",
        justifyContent: "center"
    },
    imagem: {
        width: GlobalConfig.dimension.width / 5,
        height: GlobalConfig.dimension.height / 10,
        marginBottom: GlobalConfig.dimension.height / 60,
        tintColor: GlobalConfig.colors.bgBotaoVerde
    },
    botoes: {
        
    },
    infoUsuario: {
        fontSize: 15
    }

})