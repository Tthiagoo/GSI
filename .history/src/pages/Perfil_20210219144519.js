import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Layout } from '@ui-kitten/components';

export const Perfil = () => (
  <Layout style={styles.container} level='1'>


    <Avatar style={styles.avatar} size='giant' source={require('../../assets/icon.png')}/>

  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    flexWrap: 'wrap',
    padding: 8,
    marginTop:50,
  },
  avatar: {
      
    margin: 8,
  },
});

export default Perfil