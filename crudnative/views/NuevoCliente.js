import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Headline} from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {
  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NuevoCliente;
