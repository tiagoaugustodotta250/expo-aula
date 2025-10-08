//Tela de consultar simplificada
import { useState, useCallback } from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { supabase } from "../../src/supabaseClient";

export default function ConsultaContatos() {

    // Criação do tipo Contato para que os atributos fiquem tipados, evitando erros com objetos não tipados
    type Contato = {
        id: number;
        nome: string;
        telefone: string;
        email: string;
        msg: string;
    };

    const [contatos, setContatos] = useState<Contato[]>([]);// Estado que armazena a lista de contatos, usando o tipo Contato
    const [carregar, setCarregar] = useState(true);

    const carregarContatos = async () => {
        setCarregar(true);
        const { data, error } = await supabase
            .from("contatoagro23")
            .select("*")
            .order("id", { ascending: false });

        if (error) {
            console.error("Erro ao buscar dados:", error.message);
        } else {
            setContatos(data || []);
        }

        setCarregar(false);

    };

    // Executa a função carregarContatos sempre que a tela recebe foco (útil para atualizar a lista ao voltar para a tela)
    useFocusEffect(useCallback(() => { carregarContatos(); }, []));

    const gerarItem = ({ item }: { item: Contato }) => (
        <View>
            <Text>{item.nome}</Text>
            <Text>{item.telefone}</Text>
            <Text>{item.email}</Text>
            <Text>{item.msg}</Text>
        </View>
    );

    return (
        <SafeAreaView>
            {carregar ? (
                <Text>Carregando...</Text>
            ) : contatos.length === 0 ? (
                <Text>Nenhuma pessoa cadastrada.</Text>
            ) : (
                <FlatList
                    data={contatos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={gerarItem}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
