import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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

export default function EventsPage() {

    const url = 'https://e1-dfe-dmrn-default-rtdb.firebaseio.com';
    const resource = 'events';
    const [events, setEvents] = useState(null);

    useEffect(() => {
        fetch(`${url}/${resource}.json`)
            .then(res => res.json())
            .then(resJson => {
                const convertedList = converter(resJson);
                setEvents(convertedList);
            })
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Eventos</Text>
            {events ? 
                events.length > 0 ?
                    events.map(event => (
                        <Text style={styles.listItem}>{event.name}</Text>
                    )) :
                    <Text>Nenhum evento cadastrado</Text> :
                <Text>Carregando dados...</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        padding: 6,
        margin: 2
    },
    listItem: {
        padding: 4,
        margin: 2,
        borderColor: 'blue',
        borderWidth: 2,
    }
})