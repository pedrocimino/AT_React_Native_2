import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function EventCard({ event, action }) {

    const { name, price, images } = event;
    const imgConfig = { uri: images[0] };

    return (
        <Pressable onPress={() => action(event)}>
            <View style={styles.container}>
                <Image style={styles.cardImage} source={imgConfig} />
                <View style={styles.cardInfo}>
                    <Text style={styles.listItem}>{name}</Text>
                </View>
                <View>
                    <Text style={styles.listItem}>R$ {price.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 2,
        marginVertical: 1,
        // padding: 2,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowRadius: 3.84,
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.25,
        elevation: 1
        // width: '100%',
        // borderColor: 'blue',
        // borderWidth: 2,
        // flexShrink: 1,
    },
    imageContainer: {

    },
    cardImage: {
        width: 100,
        height: 100,
    },
    cardInfo: {
        flexGrow: 1,
    },
    listItem: {
        padding: 4,
        margin: 2,
    },
    description: {
        width: '50%',
    }
})