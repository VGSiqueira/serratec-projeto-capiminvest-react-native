import { StyleSheet } from "react-native";
import { GlobalConfig } from "../global/GlobalConfig";

export const styles = StyleSheet.create({
    navigator: {
        position: "absolute",
        bottom: 0,
        height: GlobalConfig.dimension.height / 12,
        elevation: 0,
        backgroundColor: '#fff'
    },
    boxIcon: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center"
    }
})