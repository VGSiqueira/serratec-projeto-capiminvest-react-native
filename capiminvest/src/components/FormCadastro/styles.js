import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: GlobalConfig.dimension.marginH,
    }, botao: {
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
    footer: {
        marginTop: GlobalConfig.dimension.height / 15
    },
    

})