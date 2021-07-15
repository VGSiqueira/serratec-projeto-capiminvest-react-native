import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    card: {
        minWidth: GlobalConfig.dimension.width / 2,
        height: GlobalConfig.dimension.height / 7,
        marginRight: GlobalConfig.dimension.width / 30,
        justifyContent: "center",
        paddingHorizontal: GlobalConfig.dimension.marginH / 2,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: GlobalConfig.colors.bgBotaoVerde
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        color: '#000'
    },
    columns: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: GlobalConfig.dimension.height / 50,
        marginBottom: GlobalConfig.dimension.height / 200
    },
    colDireita: {
        alignItems: "flex-end"
    },
    footerCard: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 13,
        height: 13,
    },
    texto: {
        color: "#000"
    }
})