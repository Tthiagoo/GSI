import React from 'react';
import { Input, Text } from '@ui-kitten/components';


const Perfil = ()=>(

<Input
  textStyle={{alignSelf: 'center'}}
  caption={evaProps => <Text {...evaProps}>Teaaaaate</Text>}
  label={evaProps => <Text {...evaProps}>Label</Text>}

/>

);


export default Perfil

