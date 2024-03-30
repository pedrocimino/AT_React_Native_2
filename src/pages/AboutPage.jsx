import { Text, Pressable, ScrollView } from "react-native";
import Routes from "../routes";

export default function AboutPage({ navigation }) {
    return (
        <ScrollView>
            <Text>Nossa Empresa</Text>
            <Text>Nossa Diretoria</Text>
            <Text>Nossos Colaboradores</Text>
            <Text>Contatos</Text>
            <Text>+55 21 99999-9999</Text>
            <Pressable
                onPress={() => {
                    navigation.navigate(Routes.EventsListPage);
                }}
                >
                <Text>Eventos</Text>
            </Pressable>
        </ScrollView>
    )
}