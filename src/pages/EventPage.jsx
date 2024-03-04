import { useState } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, Pressable } from 'react-native';

export default function EventPage(props) {

    const { params } = props.route;
    
    // const { name, description, images } = event;
    const { name, description, images } = params;
    const [image, setImage] = useState(0);
    const [msg, setMsg] = useState(null);

    const voltarImage = () => {
        if (image > 0) {
            setMsg("Voltar");
            setImage(image - 1);
        }
    }

    const avancarImage = () => {
        if (image < image.length - 1) {
            setMsg("Avançar");
            setImage(image + 1);
        }
    }

    function btnImageControler(label, action) {
        return (
            <Pressable onPress={() => action()}>
                <Text>{label}</Text>
            </Pressable>
        );
    }

    return (
        <View style={styles.container}>
            <Text>{image}</Text>
            <Text>{msg}</Text>
            <Image style={styles.image} source={{ uri: images[image] }} />
            <View style={styles.imageController}>
                {btnImageControler('Anterior', voltarImage)}
                {btnImageControler('Próxima', avancarImage)}
            </View>

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
})