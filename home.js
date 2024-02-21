import {View, Button, StyleSheet, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.head}>
                <Image style={styles.slider}
            source={require('../../assets/attelie.jpg')}></Image>
            <Text style={styles.titulo}>Amanda Attelie</Text>
            </View>
            
            
            <View style={styles.divsub}>
                <Text style={styles.sub}>Catálogo de produtos</Text>
            </View>
            
            <View style={styles.divprodutos}>
                <Image style={styles.produtos}
                source={require('../../assets/produtos/abap.jpg')}></Image>
                <Text style={styles.desc}>Quadro Abaporu R$450 </Text>
                <Image style={styles.produtos}
                source={require('../../assets/produtos/anjo.jpg')}></Image>
                <Text style={styles.desc}>Chaveiro Anjo R$30 </Text>
                <Image style={styles.produtos}
                source={require('../../assets/produtos/ovelha.jpg')}></Image>
                <Text style={styles.desc}>Ovelhinha R$55 </Text>
                <Image style={styles.produtos}
                source={require('../../assets/produtos/poodle.jpg')}></Image>
                <Text style={styles.desc}>Poodle R$50 </Text>
                <Image style={styles.produtos}
                source={require('../../assets/produtos/quadro.jpg')}></Image>
                <Text style={styles.desc}>Tela Bordada R$55 </Text>
                <Image style={styles.produtos}
                source={require('../../assets/produtos/saia.jpg')}></Image>
                <Text style={styles.desc}>Saia Carolina GG R$100 </Text>
                <Image style={styles.produtos}
                source={require('../../assets/produtos/santa.jpg')}></Image>
                <Text style={styles.desc}>Santa R$120 </Text>
                <Image style={styles.produtos}
                source={require('../../assets/produtos/santinha.jpg')}></Image>
                <Text style={styles.desc}>Santinha R$45 unid </Text>
                <Image style={styles.produtos}
                source={require('../../assets/produtos/tela.jpg')}></Image>
                <Text style={styles.desc}>Quadro bordado 15x10 R$45 </Text>
            </View>
            </ScrollView>
        </View>
    )
};
const styles =  StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    titulo:{
        fontSize: 40,
        marginTop: -100,
        fontWeight: 'bold',
        color: '#4f106e'
    },
    slider:{
        width:500,
        height:150
    },
    head:{
        alignItems:'center'
    },
    sub:{
        fontSize: 30,
        marginTop: 60,
        fontWeight: 'bold',
        color: '#4f106e',
        marginLeft: 30
    },
    divprodutos:{
        marginTop: 20,
       alignItems:'center' 
    },
    produtos:{
        width:300,
        height:300,
        borderWidth: 7,
        borderColor: '#b03af0',
        borderRadius: 10
    },
    desc:{
        fontSize: 25, 
        color: '#4f106e',
        marginTop: 5,
        marginBottom: 15
    },
});