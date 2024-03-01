;
import React, {useState} from 'react';
import {  Alert, StyleSheet, View  } from 'react-native'
import { TextInput, Paragraph, Dialog, Portal, Headline, Button} from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const Create = ({navigation, route})=>{

    const {setNuevoCliente} = route.params;
 
    const initialState = {
        nombre:'',
        telefono:'',
        empresa:'',
        correo:'',
    }

    const [data, setData] = useState(initialState);
    const [error, setError] = useState(false);
    const leerInput = (key, texto)=>{
        setData({
            ...data,
            [key]:texto
        })
    }

    const guardar = ()=>{
        for (let k in data){
            if(data[k].trim()==='') {
                setError(true);
                return;
            }
        }

        axios.post('http://192.168.1.79:3000/clientes',data)
        .then(res=>{
            setData(initialState);
            console.log('nuevo', res);
            setNuevoCliente(res.data);
            navigation.push('Inicio');
        }).catch(res=>{
            console.log(res);
            Alert.alert('todo mal');
        })

    }
    
    return <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}>Añadir nuevo cliente</Headline>   
        <TextInput style={style.input} label="Nombre" onChangeText={(texto)=>leerInput('nombre', texto)} placeholder="Juan" />
        <TextInput style={style.input} label="Telefono" onChangeText={(texto)=>leerInput('telefono', texto)} placeholder="Ej 3313131313" />
        <TextInput style={style.input} label="Correo" onChangeText={(texto)=>leerInput('correo', texto)} placeholder="Correos" />
        <TextInput style={style.input} label="Empresa" onChangeText={(texto)=>leerInput('empresa', texto)} placeholder="Empresa" />

        <Button onPress={guardar} icon="pencil-circle" mode="contained" >Guardar cliente</Button>
     
        <Portal>
            <Dialog visible={error} onDismiss={()=>setError(false)}>
                <Dialog.Title>Error</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>Todos los campos son obligatorios</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={()=>setError(false)}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
     </View>
}

const style = StyleSheet.create({
    input:{
        marginBottom:20,
        backgroundColor:'transparent'
    }
})
export default Create;