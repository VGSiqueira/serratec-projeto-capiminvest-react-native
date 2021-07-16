import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import Titulo from '../../components/Titulo/Titulo';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <Titulo titulo={'Ações'} />
          <View style={styles.boardContainer}>
            <View style={styles.boardSubContainer}>
              <Text style={styles.acoes}>ação 1</Text>
              <View style={styles.board} />
              <Text style={styles.valor}>valor 1</Text>
            </View>

            <View style={styles.boardSubContainer}>
              <Text style={styles.acoes}>ação 2</Text>
              <View style={styles.board} />
              <Text style={styles.valor}>valor 2</Text>
            </View>

            <View style={styles.boardSubContainer}>
              <Text style={styles.acoes}>ação 3</Text>
              <View style={styles.board} />
              <Text style={styles.valor}>valor 3</Text>
            </View>

            <View style={styles.boardSubContainer}>
              <Text style={styles.acoes}>ação 4</Text>
              <View style={styles.board} />
              <Text style={styles.valor}>valor 4</Text>
            </View>

            <View style={styles.boardSubContainer}>
              <Text style={styles.acoes}>ação 6</Text>
              <View style={styles.board} />
              <Text style={styles.valor}>valor 6</Text>
            </View>
            <View style={styles.boardSubContainer}>
              <Text style={styles.acoes}>ação 7</Text>
              <View style={styles.board} />
              <Text style={styles.valor}>valor 7</Text>
            </View>
            <View style={styles.boardSubContainer}>
              <Text style={styles.acoes}>ação 8</Text>
              <View style={styles.board} />
              <Text style={styles.valor}>valor 8</Text>
            </View>
            <View style={styles.boardSubContainer}>
              <Text style={styles.acoes}>ação 9</Text>
              <View style={styles.board} />
              <Text style={styles.valor}>valor 9</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
