import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Layout,Input  } from '@ui-kitten/components';
const smallInputState = useInputState();
const mediumInputState = useInputState();
const largeInputState = useInputState();
const multilineInputState = useInputState();
export const Perfil = () => (
  <Layout style={styles.container2} level='1'>


    <Avatar style={styles.avatar} size='giant' source={require('../../assets/jonny.jpg')}/>

  </Layout>



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