import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native'
import axios from 'axios'; 
import {List, Button, Headline} from 'react-native-paper';
import globalStyle from './styles/global';
const Inicio = ({navigation})=>{

    const [clientes, setClientes] = useState([]);
    const [nuevoCliente, setNuevoCliente] = useState(false);
    useEffect(()=>{
        axios.get('http://192.168.1.79:3000/clientes').then(res=>{
            setClientes(res.data);
        })
    },[nuevoCliente]);

    useEffect(()=>{
        if (nuevoCliente){
            setClientes([
                ...clientes,
                nuevoCliente
            ])
        }

    },[nuevoCliente]);

 
    const showClient = (item) => navigation.navigate('client.show', {cliente:item})
    return <View >
        <Headline style={globalStyle.titulo} >Lista de clientes</Headline>
        <Button onPress={()=>navigation.push('client.create', {setNuevoCliente})}>Agregar nuevo</Button>
        <FlatList 
            data={clientes}
            keyExtractor={({id})=>id}
            renderItem={({item})=>(
                <List.Item 
                    title={item.nombre}
                    description={item.empresa}
                    onPress={()=>showClient(item)}
                />
            )} 
        />
     </View>
}

const style = StyleSheet.create({
    contenedor:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#393939'
    }
})
export default Inicio;