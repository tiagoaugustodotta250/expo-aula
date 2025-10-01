import {useState} from 'react';
import {Text, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from '../../src/supabaseClient';

export default function App(){

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [salario, setSalario] = useState('');

    const dados = {
        id:id,
        nome:nome,
        salario:salario
    }

    const enviarDados = async () =>{

        const {data, error} = await supabase
            .from('cargo')
            .insert([{id: id.trim(), nome: nome.trim(), salario: salario.trim()}]);
    }

    const enviarNome = async ()=>{

        const {data,error} = await supabase
            .from('cargo')
            .insert([{nome: nome.trim()}]);
    }

    const enviarSalario = async ()=>{

        const {data,error} = await supabase
            .from('cargo')
            .insert([{salario: salario.trim()}]);
    }
    
    return(

        <SafeAreaView style={style.SafeArea}>

            <Text style = {style.Text}>Fale Conosco</Text>
            <TextInput
                style = {style.TextInput}
                placeholder = 'Digite seu nome'
                value = {nome}
                onChangeText = {setNome}
            />
            <Button title = 'Gravar' onPress = {enviarNome} />

            <TextInput
                style = {style.TextInput}
                placeholder = 'Digite seu salário'
                value = {salario}
                onChangeText = {setSalario}
            />
            <Button title = 'Gravar' onPress = {enviarSalario}/>

            <TouchableOpacity onPress = {enviarDados} style = {style.Touchable}>
                Cadastrar
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({

    SafeArea:{
        display: 'flex',
        backgroundColor: 'darkgray'        

    },

    TextInput:{
        width: '90%',
        margin: 'auto',
        height: 45,
        backgroundColor:'#fff',
        color: '#000',
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'

    },

    Touchable:{
        backgroundColor: '#aaa',
        borderRadius: 10,
        width: '80%',
        textAlign: 'center',
        margin: 'auto',
        marginVertical: 25

    },

    Text:{
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 5

    }

})

