import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';

export default function DetailsContanier({ event }) {
    const { name, description, images } = event;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: images[0] }} />
            <Text>{name}</Text>
            <ScrollView>
                <Text>{description}</Text>
            </ScrollView>
        </View>
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
});