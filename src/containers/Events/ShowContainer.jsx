import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { Image, StyleSheet, Pressable } from 'react-native';
import DetailsContainer from './DetailsContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GalleryContainer from './GalleryContainer';
import HotelsContainer from './HotelsContainer';

const Tabs = createBottomTabNavigator();

export default function ShowContainer(props) {
    const { params } = props.route;
    const { id } = params;
    const [event, setEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [msg, setMsg] = useState(null);


    useEffect(() => {
        const url = 'https://projeto-react-native-6aedb-default-rtdb.firebaseio.com';
        const resource = 'events';
        fetch(`${url}/${resource}/${id}.json`)
            .then(res => res.json())
            .then(event => {
                setEvent({
                    _id: id,
                    ...event
                })
            })
            .catch(error => setMsg(error.message))
            .finally(setIsLoading(false));
    }, [id]);

    return (
        <>
            {isLoading && <ActivityIndicator />}
            {event && <Tabs.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                <Tabs.Screen name='details'>
                    {() => <DetailsContainer event={event} />}
                </Tabs.Screen>
                <Tabs.Screen name='gallery'>
                    {() => <GalleryContainer images={event.images} />}
                </Tabs.Screen>
                <Tabs.Screen name='hotels'>
                    {() => <HotelsContainer hotels={event.hotels} />}
                </Tabs.Screen>
            </Tabs.Navigator>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
    },
    image: {
        width: "100%",
        height: 150,
        resizeMode: 'cover',
    },
    imageController: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
})