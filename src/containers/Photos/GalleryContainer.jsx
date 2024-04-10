import { useState, useCallback } from "react";
import { Image, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import app from "../../Firebase";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { useFocusEffect } from '@react-navigation/native';

export default function GalleryContainer() {

    const [photos, setPhotos] = useState([]);

    async function getPhotos() {
        try {
            const firebaseStorage = getStorage(app);
            const photosRef = ref(firebaseStorage);
            const list = await listAll(photosRef);
            const urls = [];
            for (let fileRef of list.items) {
                const photoRef = ref(firebaseStorage, fileRef);
                const url = await getDownloadURL(photoRef);
                urls.push(url);
            }
            setPhotos(urls);
        } catch (error) {
            console.error("Error getting photos:", error);
        }
    }

    useFocusEffect(useCallback(() => { getPhotos() }, []));

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {photos.length > 0 ? (
                photos.map((uri, index) => (
                    <Image key={`photo_${index}`} style={styles.image} source={{ uri }} />
                ))
            ) : (
                <Text>No photos available</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
        margin: 2,
        borderRadius: 5,
    },
});
