import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Data = () => {
  return (
    <View style={styles.ContainerScreen}>
      <Text>Data!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Data;
