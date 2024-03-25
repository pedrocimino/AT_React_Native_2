import { Text, View } from "react-native";
import app from "../../Firebase";
import { getStorage, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export default function GalleryContainer() {

    const [photos, setPhotos] = useState([]);

    async function getPhotos() {
        try {
            const firebaseStorage = getStorage(app);
            const photosRef = ref(firebaseStorage);
            const list = await listAll(photosRef);
            console.dir(list);
            setPhotos(list.items);
        } catch (error) {
            // ...
        }
    }

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <View>
            <Text key={"photos_length"}>{photos.length}</Text>
        </View>
    )
}