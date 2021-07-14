import { StyleSheet } from "react-native";
import { GlobalConfig } from "../../global/GlobalConfig";

export const styles = StyleSheet.create({
    card: {
        width: GlobalConfig.dimension.width / 2,
        height: GlobalConfig.dimension.height / 7,
        backgroundColor: '#0FFF',
        marginRight: GlobalConfig.dimension.width / 30
    }
})