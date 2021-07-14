import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        height: GlobalConfig.dimension.height / 20,
        marginBottom: GlobalConfig.dimension.height / 40
    },
    icones: {
        width: 24,
        height: 24,
        position: "absolute",
        left: 20
    },
    titulo: {
        fontSize: 22,
        position: "absolute",
        left: 100,
    }
})