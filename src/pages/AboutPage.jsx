import { Text, Pressable, ScrollView } from "react-native";
import Routes from "../routes";

export default function AboutPage({ navigation }) {
    return (
        <ScrollView>
            <Text>Desenvolvedores</Text>
            <Text>Contatos</Text>
            <Text>+55 21 99999-9999</Text>
            <Pressable
                onPress={() => {
                    navigation.navigate(Routes.EventsPage);
                }}
                >
                <Text>Eventos</Text>
            </Pressable>
        </ScrollView>
    )
}