import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: GlobalConfig.dimension.marginH,

    },
    scrollView: {
    },
    header: {
        marginTop: GlobalConfig.dimension.marginCabecalho,
    },
    card: {
        width: GlobalConfig.dimension.width / 1.3,
        height: GlobalConfig.dimension.height / 8,
        marginTop: GlobalConfig.dimension.height / 20,
        borderRadius: 8,
        backgroundColor: GlobalConfig.colors.bgBotaoVerde,
        alignSelf: "center",
        padding: 20,
    },
    headerCard: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: "#FFF"
    },
    titleCard: {
        fontSize: 20,
        marginLeft: GlobalConfig.dimension.marginH / 2,
        color: "#FFF"
    },
    valorInvestido: {
        marginVertical: GlobalConfig.dimension.marginCabecalho / 5
    },
    valor: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#FFF"
    },
    cotacoes: {
        marginTop: GlobalConfig.dimension.marginCabecalho / 1.5
    },
    subtitulo: {
        marginBottom: GlobalConfig.dimension.marginCabecalho / 3,
        marginTop: GlobalConfig.dimension.marginCabecalho / 3
    },
    cardCotacoes: {
        
    },
    boxNoticias: {
        
    }
    
})