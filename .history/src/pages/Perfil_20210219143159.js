import React from 'react';
import { Input, Text } from '@ui-kitten/components';


const Perfil = ()=>(

<Input
  textStyle={{width: 64, height: 64,alignItems: 'center'}}
  caption={evaProps => <Text {...evaProps}>Teaaaaate</Text>}
  label={evaProps => <Text {...evaProps}>Label</Text>}

/>

);


export default Perfil

