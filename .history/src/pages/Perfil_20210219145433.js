import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Layout,Input  } from '@ui-kitten/components';
import CamposInput from '../components/CampoInp.js'


export const Perfil = () => (
    <>
  <Layout style={styles.container2} level='1'>


    <Avatar style={styles.avatar} size='giant' source={require('../../assets/jonny.jpg')}/>
   
  </Layout>
  <CamposInput></CamposInput>
  </>


);

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    flexWrap: 'wrap',
    padding: 8,
    marginTop:50,
  },
  avatar: {
      width:150,
      height:150,
    margin: 8,
  },
});

export default Perfil