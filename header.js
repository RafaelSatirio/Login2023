import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from 'react-native';
import estilo from "../estilos";

export default function Header(){
return (
<LinearGradient
    colors={["black", "#FF4500"]}
    style={estilo.gradientBackground}
  >

      <Image source = {{ uri :'https://observatoriodocinema.uol.com.br/wp-content/uploads/2023/01/the-last-of-us-hbo-1672749554.jpg'}}
      style = {estilo.Image}
      /> 


  </LinearGradient>
)

}
