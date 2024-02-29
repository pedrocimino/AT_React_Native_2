import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import EventCard from "../components/EventCard";
import EventPage from "./EventPage";
import Routes from "../routes";

function converter(data) {
    // { idA: {eventA}, idB: {eventA}}
    const ids = Object.keys(data); // [ idA, idB, ...]
    const events = Object.values(data); // [ {eventA}, {eventB} ]
    const eventsList = events.map((event, index) => {
        return {
            _id: ids[index],
            ...event
        }
    });
    return eventsList;
}

export default function EventsPage(props) {

    // const navigation = props.navigation;
    const { navigation } = props;

    const url = 'https://e1-dfe-dmrn-default-rtdb.firebaseio.com';
    const resource = 'events';
    const [events, setEvents] = useState(null);
    // const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        fetch(`${url}/${resource}.json`)
            .then(res => res.json())
            .then(resJson => {
                const convertedList = converter(resJson);
                setEvents(convertedList);
            })
    }, []);

    function selectEvent(event) {
        // setSelectedEvent(event)
        // navigation
        navigation.navigate(Routes.EventPage) // String -> Rota (name)
    }

    const showEvents = () => {
        if (events.length > 0) {
            return events.map((event, index) =>
                <EventCard
                    key={'evento_' + index}
                    event={event}
                    action={selectEvent} />
            );
        } else {
            return (<Text>Nenhum evento cadastrado</Text>);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerMenu}>
                <Pressable onPress={() => setSelectedEvent(null)}>
                    <Text>Voltar</Text>
                </Pressable>
                <Text style={styles.header}>Eventos</Text>
            </View>
            <ScrollView style={styles.container}>
                {events ?
                    showEvents() :
                    <Text>Carregando dados...</Text>
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerMenu: {
        flexDirection: 'row',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        padding: 6,
        margin: 2,
        flexGrow: 1
    },
})