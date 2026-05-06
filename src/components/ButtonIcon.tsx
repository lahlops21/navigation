import {TouchableOpacity, TouchableOpacityProps } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

// Quando formos utilizar o Material Icon obrigatoriamente precisaremos tipar a variável que está guardando o nome do ícone
// indicando assim que esta abriga também a propriedade glyphMap, que assegura que aquele valor realmente está na biblioteca do MaterialIcons. 
type Props = TouchableOpacityProps & {
    nameIcon: keyof typeof MaterialIcons.glyphMap
}

export default function ButtonIcon({nameIcon, ...rest}:Props){
   return(

        <TouchableOpacity {...rest}>
            <MaterialIcons
            name={nameIcon}
            size = {24}
            
            />
        </TouchableOpacity>

   )
}

