import { useState } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, Pressable } from 'react-native';

export default function EventPage({ event }) {
    
    // const { name, description, images } = event;
    const { name, description, images } = {
        "name": "Concerto de Jazz no Parque",
        "description": "Uma tarde relaxante de música jazz ao ar livre.",
        "location": "Parque da Cidade",
        "date": 1645622400000,
        "price": 100.00,
        "images": [
            "https://images.pexels.com/photos/442540/pexels-photo-442540.jpeg",
            "https://images.pexels.com/photos/2530176/pexels-photo-2530176.jpeg"
        ],
        "hotels": [
            {
                "name": "Hotel Luxo",
                "address": "Rua das Flores, 123",
                "proximity": 500,
                "dailyRate": 250.00
            },
            {
                "name": "Hotel Econômico",
                "address": "Avenida Central, 456",
                "proximity": 1000,
                "dailyRate": 120.00
            }
        ]
    };
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