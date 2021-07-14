import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: GlobalConfig.dimension.marginH,
        
    },
    header: {
        alignItems: "center",
    },
    titulo: {
        marginTop: GlobalConfig.dimension.height / 40,
        marginBottom: GlobalConfig.dimension.height / 70
    },
    subtitulo: {
        fontSize: 17,
    },
    formulario: {
        marginTop: GlobalConfig.dimension.height / 20
    },
    footer: {
        marginTop: GlobalConfig.dimension.height / 15
    },
    boxTextos: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: GlobalConfig.dimension.height / 15
    },
    login: {
        textDecorationLine: "underline",
        color: GlobalConfig.colors.bgBotaoVerde,
        fontWeight: "bold"
    },
    botao: {
        backgroundColor: GlobalConfig.colors.bgBotaoVerde,
        borderRadius: 20,
        height: GlobalConfig.dimension.height / 17,
        alignItems: "center",
        justifyContent: "center"
    },
    texto: {
        color:"#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    
})