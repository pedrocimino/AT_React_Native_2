import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EventCard from "../components/EventCard";
import EventPage from "./EventPage";
import Routes from "../routes";
import ListContainer from "../containers/Events/ListContainer";
import ShowContainer from "../containers/Events/ShowContainer";

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
    const [events, setEvents] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${url}/${resource}.json`)
            .then(res => res.json())
            .then(resJson => {
                const convertedList = converter(resJson);
                setEvents(convertedList);
            })
            .finally(_ => setIsLoading(false));
    }, []);

    function selectEvent(event) {
        navigation.navigate(Routes.EventsShowPage, event)
    }

    function StackContainer() {
        return (
            <Stack.Navigator initialRouteName={Routes.EventsListPage}>
                <Stack.Screen name={Routes.EventsListPage}>
                    {() => <ListContainer events={events} action={selectEvent} />}
                </Stack.Screen>
                <Stack.Screen
                    name={Routes.EventsShowPage}
                    component={ShowContainer} />
            </Stack.Navigator>
        );
    }

    if (isLoading) {
        return <ActivityIndicator />;
    } else {
        return <StackContainer />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})