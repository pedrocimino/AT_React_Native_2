import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../routes";
import ListContainer from "../containers/Events/ListContainer";

const Stack = createNativeStackNavigator();

function converter(data) {
    const ids = Object.keys(data);
    const events = Object.values(data);
    const eventsList = events.map((event, index) => {
        return {
            _id: ids[index],
            ...event
        }
    });
    return eventsList;
}

export default function EventsPage(props) {
    const { navigation } = props;
    const url = 'https://projeto-react-native-6aedb-default-rtdb.firebaseio.com';
    const resource = 'events';
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(`${url}/${resource}.json`)
            .then(res => res.json())
            .then(eventsJson => {
                const events = converter(eventsJson);
                setEvents(events);
            })
            .finally(_ => setIsLoading(false));
    }, []);

    function selectEvent(event) {
        navigation.navigate(Routes.EventsShowPage, { id: event._id });
    }

    const filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Procurar eventos..."
                onChangeText={setSearchTerm}
                value={searchTerm}
            />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ListContainer events={filteredEvents} action={selectEvent} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5,
    },
});
