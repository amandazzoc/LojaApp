import React, {useEffect} from 'react';
import {View,StyleSheet} from 'react-native';
import GifPlayer from 'react-native-gif';

const GifSplash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 5000);
    },[]);

    return(
        <View style={styles.container}>
           <GifPlayer
            source= {require('../../assets/giphy.gif')}
            autoplay
            style={{flex: 1}}
            resizeMode='contain'
            >
                </GifPlayer> 
        </View>
    )
};
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    }
});
export default GifSplash;