import React from 'react';
import {Button} from 'react-native-paper';

const BarraSuperior = props => {
  const {navigation, route} = props;

  const handlePress = () => {
    navigation.navigate('NuevoCliente');
  };

  return (
    <Button icon="plus-circle" color="#FFF" onPress={() => handlePress()}>
      Cliente
    </Button>
  );
};

export default BarraSuperior;
