import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { supabase } from '../../src/supabaseClient';

export default function App(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [msg,setMsg] =useState('');
    
    const dados = {
        nome: nome,
        email: email,
        msg: msg
    }

    const enviarDados = async () => {
        const {data, error} = await supabase
            .from('contato')
            .insert([{ nome: nome.trim(), email: email.trim(), msg: msg.trim() }]);
    }

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.titulo}>Fale Conosco</Text>
            <TextInput
                style={style.input}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={setNome}
            />
            <Button title = 'Gravar'/>
            
            <TextInput
                style={style.input}
                placeholder='Digite sua idade'
                value={email}
                onChangeText={setEmail}
            />
            <Button title = 'Gravar'/>
            
            <TextInput
                style={style.input}
                placeholder='Digite a mensagem aqui'
                value={msg}
                onChangeText={setMsg}
            />
            <Button title = 'Gravar'/>

            <TouchableOpacity style={style.botao} onPress={enviarDados}>
                Cadastrar
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    
    container:{
        display: 'flex',
        lineHeight: 40
    },

    input:{
        width: '90%',
        height: 45,
        backgroundColor:'#fff',
        color: '#000',
        padding: 5,
        marginBottom: 10,
        textAlign: 'center'
    },
    
    titulo:{
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        marginVertical: 10
    },

    botao:{
        backgroundColor: '#aaa',
        borderRadius: 10,
        width: '80%',
        textAlign: 'center',
        margin: 'auto',
        marginVertical: 25
    }
})