import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EventCard from "../components/EventCard";
import EventPage from "./EventPage";
import Routes from "../routes";
import ListContainer from "../containers/Events/ListContainer";
import ShowContainer from "../containers/Events/ShowContainer";
import AboutPage from "./AboutPage";

const Stack = createNativeStackNavigator();

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
    const { navigation } = props;
    const url = 'https://e1-dfe-dmrn-default-rtdb.firebaseio.com';
    const resource = 'events';
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        // setSelectedEvent(event._id);
    }

    /* function StackContainer() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name={Routes.EventsListPage}>
                    {() => <ListContainer events={events} action={selectEvent} />}
                </Stack.Screen>
                <Stack.Screen
                    name={Routes.EventsShowPage}
                    component={ShowContainer} />
            </Stack.Navigator>
        );
    } */

    if (isLoading) {
        return <ActivityIndicator />;
    } else {
        // if (!selectedEvent)
            return <ListContainer events={events} action={selectEvent} />;
        /* else if (selectedEvent)
            return (
                <View style={{flex: 1}}>
                    <Pressable onPress={() => setSelectedEvent(null)}>
                        <Text>Voltar</Text>
                    </Pressable>
                    <ShowContainer id={selectedEvent} />
                </View>
            ); */
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})