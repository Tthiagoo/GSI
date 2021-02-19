import React from 'react';
import { Input, Text } from '@ui-kitten/components';


const Perfil = ()=>(

<Input
  textStyle={{marginTop:45}}
  caption={evaProps => <Text {...evaProps}>Teaaaaate</Text>}
  label={evaProps => <Text {...evaProps}>Label</Text>}

/>

);


export default Perfil

