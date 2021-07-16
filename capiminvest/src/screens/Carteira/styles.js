import { StyleSheet } from 'react-native';
import { GlobalConfig } from '../../global/GlobalConfig';

export const styles = StyleSheet.create({
  container: {
    marginTop: 37,
    marginHorizontal: GlobalConfig.dimension.marginH,
    paddingBottom: 40,
  },

  board: {
    backgroundColor: GlobalConfig.colors.bgBotaoVerde,
    height: 40,
    width: 95,
    borderRadius: 6,
    marginBottom: 38,
    marginLeft: 90,
  },

  boardContainer: {
    marginTop: 50,
  },

  boardSubContainer: {
    flexDirection: 'row',
  },

  acoes: {
    fontSize: 20,
    marginLeft: 6,
    marginTop: 4,
  },

  valor: {
    fontSize: 20,
    marginLeft: 18,
    marginTop: 4,
  },
});
