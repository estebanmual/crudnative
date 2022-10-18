import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {List, Headline} from 'react-native-paper';
import globalStyles from '../styles/global';

const Inicio = () => {
  const [clientes, guardarClientes] = useState([]);
  useEffect(() => {
    const obtenerClienteApi = async () => {
      try {
        const resultado = await fetch('http://10.0.2.2:3000/clientes');
        const clientes = await resultado.json();
        guardarClientes(clientes);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClienteApi();
  }, []);

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>
        {clientes.length > 0 ? 'Clientes' : 'Aún no hay clientes'}
      </Headline>
      <FlatList
        data={clientes}
        keyExtractor={cliente => cliente.id.toString()}
        renderItem={({item}) => (
          <List.Item title={item.nombre} description={item.empresa} />
        )}
      />
    </View>
  );
};

export default Inicio;
