import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import estilo from "../estilos";

export default function Box(){
    return(
        /* View com as entradas de dados*/
        <View style={estilo.box}>
        <View style={estilo.viewIcons}>
          <Feather name="user" size={24} color="black" />
          <TextInput style={estilo.input} placeholder="E-mail" />
        </View>

        <View style={estilo.viewIcons}>
          <FontAwesome5 name="key" size={24} color="black" />
          <TextInput style={estilo.input} placeholder="Senha" />
        </View>
        <TouchableOpacity style={{ width: "80%" }}>
          <LinearGradient colors={["#D2691E", "#FF4500"]} style={estilo.button}>
            <Text style={estilo.Text}> Logar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
}