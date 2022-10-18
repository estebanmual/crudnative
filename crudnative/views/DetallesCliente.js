import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Headline, Subheading, Text, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

const DetallesCliente = props => {
  const {navigation, route} = props;
  const {nombre, telefono, correo, empresa} = route.params.item;

  const eliminarContacto = () => {
    console.log('Eliminando...');
  };

  const mostrarConfirmacion = () => {
    Alert.alert(
      '¿Deseas eliminar este cliente?',
      'Un cliente eliminado no se puede recuperar',
      [
        {text: 'Si, Eliminar', onPress: () => eliminarContacto()},
        {text: 'Cancelar', style: 'cancel'},
      ],
    );
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.texto}>
        Empresa: <Subheading>{empresa}</Subheading>
      </Text>
      <Text style={styles.texto}>
        Correo:<Subheading>{correo}</Subheading>
      </Text>
      <Text style={styles.texto}>
        Teléfono: <Subheading>{telefono}</Subheading>
      </Text>
      <Button
        mode="contained"
        icon="cancel"
        style={styles.boton}
        onPress={() => mostrarConfirmacion()}>
        Eliminar Cliente
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },
  boton: {
    marginTop: 100,
    backgroundColor: 'red',
  },
});

export default DetallesCliente;
