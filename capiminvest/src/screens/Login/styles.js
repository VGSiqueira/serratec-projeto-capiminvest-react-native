import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const style = StyleSheet.create({
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
    },
    text:{
        textAlign: 'center',      
        fontSize:16,
        fontWeight: '700',
        marginTop: GlobalConfig.dimension.marginH
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
    boxBotoes: {
        alignItems: "center",
      
        marginTop: GlobalConfig.dimension.marginH
    },

})