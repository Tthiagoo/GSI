import React from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem } from '@ui-kitten/components';


const data = new Array(8).fill({
    title: 'Item',
  });
  
  export const Perfil = () => {
  
    const renderItem = ({ item, index }) => (
      <ListItem title={`${item.title} ${index + 1}`}/>
    );
  
    return (
      <List
        style={styles.container}
        data={data}
        renderItem={renderItem}
      />
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        marginTop:180,
      maxHeight: 180,
    },
  });


export default Perfil

