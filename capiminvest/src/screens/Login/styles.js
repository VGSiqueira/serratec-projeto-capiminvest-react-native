import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: GlobalConfig.dimension.marginH,
        
    },    
    titulo: {
        marginTop: GlobalConfig.dimension.height / 40,
        marginBottom: GlobalConfig.dimension.height / 70
    },
    formulario: {
        marginTop: GlobalConfig.dimension.height / 20
    }

})