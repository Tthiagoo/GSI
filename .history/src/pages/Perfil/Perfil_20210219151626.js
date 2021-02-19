import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Layout, Input } from '@ui-kitten/components';
import CamposInput from '../../components/CampoInp.js'


export const Perfil = () => (
    <>
        <Layout style={styles.container2} level='1'>


            <Avatar  style={styles.avatar} size='giant' source={require('../../../assets/jonny.jpg')} />

        </Layout>
        <Layout style={styles.campos} level='1'>

            <CamposInput  ></CamposInput>

        </Layout>
    </>


);



export default Perfil