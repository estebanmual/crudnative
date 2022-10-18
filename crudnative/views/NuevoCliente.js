import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TextInput,
  Button,
  Headline,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const NuevoCliente = props => {
  const {navigation, route} = props;
  const {guardarConsultarAPI} = route.params;
  // Campos del formulario
  const [nombre, guardarNombre] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [correo, guardarCorreo] = useState('');
  const [empresa, guardarEmpresa] = useState('');
  const [alerta, guardarAlerta] = useState(false);

  // Almacena el cliente en la base de datos
  const guardarCliente = async () => {
    // Validar
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      guardarAlerta(true);
      return;
    }
    // Generar el cliente
    const cliente = {
      nombre,
      telefono,
      correo,
      empresa,
    };
    console.log(cliente);
    // Guardar el cliente en la base de datos
    try {
      await axios.post('http://10.0.2.2:3000/clientes', cliente);
    } catch (error) {
      console.log(error);
    }
    // Redireccionar
    navigation.navigate('Inicio');
    // Limpiar el formulario
    guardarNombre('');
    guardarTelefono('');
    guardarCorreo('');
    guardarEmpresa('');
    guardarConsultarAPI(true);
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Esteban"
        onChangeText={texto => guardarNombre(texto)}
        value={nombre}
        style={styles.input}
      />
      <TextInput
        label="Teléfono"
        placeholder="9999999999"
        onChangeText={texto => guardarTelefono(texto)}
        value={telefono}
        style={styles.input}
      />
      <TextInput
        label="Correo"
        placeholder="correo@correo.com"
        onChangeText={texto => guardarCorreo(texto)}
        value={correo}
        style={styles.input}
      />
      <TextInput
        label="Empresa"
        placeholder="Nombre Empresa"
        onChangeText={texto => guardarEmpresa(texto)}
        value={empresa}
        style={styles.input}
      />

      <Button
        icon="pencil-circle"
        mode="contained"
        onPress={() => guardarCliente()}>
        Guardar Cliente
      </Button>

      <Portal>
        <Dialog visible={alerta} onDismiss={() => guardarAlerta(false)}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => guardarAlerta(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;
