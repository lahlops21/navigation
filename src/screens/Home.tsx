import { View } from "react-native";
import Header from "../components/Header";
import ButtonIcon from "../components/ButtonIcon";

//Tela inicial 

export default function Home(){
    return(
    <View style= {{flex:1, padding:32, paddingTop:54}}>
        <Header>
            <ButtonIcon
            nameIcon="add-circle"
            />
        </Header>
    </View>)
}