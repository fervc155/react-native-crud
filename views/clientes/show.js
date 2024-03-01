import React from 'react';
import { StyleSheet, View } from 'react-native'
import {Headline, Text, Subheading} from 'react-native-paper';
import globalStyle from '../styles/global';

const Show = ({navigation, route})=>{

    const {cliente} = route.params;
     
    return <View style={globalStyle.contenedor} >
        <Headline style={globalStyle.titulo}>{cliente.nombre}</Headline>
        <Text  style={style.texto }>Empresa: <Subheading>{cliente.empresa}</Subheading>}</Text>
        <Text  style={style.texto }>Correo: <Subheading>{cliente.correo}</Subheading>}</Text>
        <Text  style={style.texto }>Telefono: <Subheading>{cliente.telefono}</Subheading>}</Text>
     </View>
}

const style = StyleSheet.create({
    texto:{
        marginBottom:20,
        fontSize:10,
    }
})
export default Show;