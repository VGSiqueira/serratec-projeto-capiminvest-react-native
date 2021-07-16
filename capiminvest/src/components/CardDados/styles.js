import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#9ff5c9',
        width: GlobalConfig.dimension.width / 2.2,
        height: GlobalConfig.dimension.height / 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 8,
        marginBottom: GlobalConfig.dimension.marginCabecalho / 3,
        // marginRight: GlobalConfig.dimension.marginH / 2.2
    },
    title: {
        textAlign: "center",
        fontWeight: "bold"
    },
    value: {
        fontSize: 15
    }
})