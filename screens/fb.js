import React from 'react';

import {View, Image} from 'react-native';

export default class fb extends React.Component 
{
    render()
    {
        return(

            <View style={styles.container}>

            <Image style = {styles.imageStyle}
                   source = {require('../assets/fbimg.png')}/>  

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
    marginTop:50,
    width:370, 
    height:570
   }

})