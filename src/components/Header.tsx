import { View } from "react-native";

// React.ReactNode -> É um tipo que represent qualquer coisa que possa ser 
// renderizada pelo React, como elementos, componentes, strings, numeros, etc

export default function Header({children}: {children: React.ReactNode}){
   return(
   <View
   style = {{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', // direção horizontal
    alignItems: 'center', // direção vertical
    marginBottom: 54,
   }}>
    {children}
   </View>
   )
}