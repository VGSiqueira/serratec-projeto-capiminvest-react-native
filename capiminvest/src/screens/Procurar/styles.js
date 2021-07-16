import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: GlobalConfig.dimension.marginH,
        paddingBottom: GlobalConfig.dimension.height / 11
    },
    searchBar: {
        marginTop: GlobalConfig.dimension.marginCabecalho,
        flexDirection: "row"
    },
    inputSearch: {
        width: GlobalConfig.dimension.width / 1.3,
        height: GlobalConfig.dimension.height / 15,
        paddingHorizontal: GlobalConfig.dimension.marginH / 2,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderColor: GlobalConfig.colors.bgBotaoVerde,
        fontSize: 20,
    },
    searchButton: {
        width: 60,
        height: GlobalConfig.dimension.height / 15,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: GlobalConfig.colors.bgBotaoVerde

    },
    searchIcon: {
        width: 25,
        height: 25,
        tintColor: GlobalConfig.colors.bgBotaoVerde
    },
    subtitulo: {
        marginBottom: GlobalConfig.dimension.marginCabecalho / 3,
        marginTop: GlobalConfig.dimension.marginCabecalho / 3
    },
    boxSugestoes: {
        
    },
    boxIndicadores: {
        flex: 1,
        width: GlobalConfig.dimension.width - GlobalConfig.dimension.marginH,
    },
    sugestao: {
        borderWidth: 1,
        borderRadius: 8,
        height: GlobalConfig.dimension.marginCabecalho,
        alignItems: "center",
        justifyContent: "center"
    }
})