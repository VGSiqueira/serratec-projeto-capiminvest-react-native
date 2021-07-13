import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig"

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: GlobalConfig.dimension.marginH,
        paddingTop: GlobalConfig.dimension.height / 7
    },
    logo: {
        width: GlobalConfig.dimension.width / 1.5,
        height: GlobalConfig.dimension.height / 3.6,
        marginBottom: GlobalConfig.dimension.height / 15
    },
    subtitle: {
        textAlign: "center",
        fontSize: 17,
        marginTop: GlobalConfig.dimension.height / 70,

    },
    textos: {
        alignItems: "center",
        width: '90%',
    },
    boxBotoes: {
        alignItems: "center",
        width: '90%',
        marginTop: GlobalConfig.dimension.height / 10
    },
    botaoVerde: {
        backgroundColor: GlobalConfig.colors.bgBotaoVerde,
        borderRadius: 20,
        height: GlobalConfig.dimension.height / 17,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    textoBranco: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    botaoTransparente: {
        backgroundColor: 'transparent',
        height: GlobalConfig.dimension.height / 17,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    textoVerde: {
        color: "#276955",
        fontSize: 18,
        fontWeight: "bold"
    },
    botao: {
        justifyContent:"center"
    }
})