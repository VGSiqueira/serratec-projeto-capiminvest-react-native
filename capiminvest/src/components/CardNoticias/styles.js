import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    card: {
        // width: GlobalConfig.dimension.width,
        minHeight: GlobalConfig.dimension.height / 20,
        // marginBottom: GlobalConfig.dimension.height / 50,
        paddingRight: GlobalConfig.dimension.width /10,
        paddingBottom: GlobalConfig.dimension.width /30,
        paddingTop: GlobalConfig.dimension.width /30,
        borderColor: GlobalConfig.colors.bgBotaoVerde,
        borderBottomWidth: 1,
        justifyContent: "center"
    },
    fonte:{
        fontSize: 20,
        fontWeight: "bold",
        color: GlobalConfig.colors.bgBotaoVerde
    },
    title: {
        fontSize: 17
    }
})