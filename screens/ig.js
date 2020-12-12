import React from 'react';

import {View, Image} from 'react-native';

export default class ig extends React.Component 
{
    render()
    {
        return(

            <View style={styles.container}>

            <Image style = {styles.imageStyle}
                   source = {require('../assets/igimg.png')}/>   

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    imageStyle:
    {
        width:400, 
        height:600
    }
})