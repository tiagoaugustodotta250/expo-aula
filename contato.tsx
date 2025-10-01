import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { supabase } from '../../src/supabaseClient';

export default function App(){

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [msg,setMsg] =useState('');
    
    const dados = {
        nome: nome,
        idade: idade,
        msg: msg
    }

    const enviarDados = async () => {
        const {data, error} = await supabase
            .from('contato')
            .insert([{ nome: nome.trim(), idade: idade.trim(), msg: msg.trim() }]);
    }

    return(
        <SafeAreaView style={style.SafeArea}>
            <Text style={style.Text}>Fale Conosco</Text>
            <TextInput
                style={style.TextInput}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={setNome}
            />
            <Button title = 'Gravar'/>
            
            <TextInput
                style={style.TextInput}
                placeholder='Digite sua idade'
                value={idade}
                onChangeText={setIdade}
            />
            <Button title = 'Gravar'/>
            
            <TextInput
                style={style.TextInput}
                placeholder='Digite a mensagem aqui'
                value={msg}
                onChangeText={setMsg}
            />
            <Button title = 'Gravar'/>

            <TouchableOpacity style={style.Touchable} onPress={enviarDados}>
                Cadastrar
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    
    SafeArea:{
        display: 'flex',
        lineHeight: 40
    },

    TextInput:{
        width: '90%',
        height: 45,
        backgroundColor:'#fff',
        color: '#000',
        padding: 5,
        marginBottom: 10,
        textAlign: 'center'
    },
    
    Text:{
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        marginVertical: 10
    },

    Touchable:{
        backgroundColor: '#aaa',
        borderRadius: 10,
        width: '80%',
        textAlign: 'center',
        margin: 'auto',
        marginVertical: 25
    }
})