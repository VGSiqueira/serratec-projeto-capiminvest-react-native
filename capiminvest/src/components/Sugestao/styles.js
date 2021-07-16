import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    sugestao: {
        borderWidth: 1,
        borderRadius: 8,
        height: GlobalConfig.dimension.marginCabecalho,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: GlobalConfig.dimension.marginCabecalho / 4,
        borderColor: GlobalConfig.colors.bgBotaoVerde
    },
    title: {
        fontSize: 15,
        color: GlobalConfig.colors.bgBotaoVerde
    }
})