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
        
    }
})