import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import app from '../../Firebase';
import { getStorage, ref, uploadString } from 'firebase/storage';

export default function CameraContainer() {

    const [hasPermission, setPermission] = useState(false);
    const [camera, setCamera] = useState(null);
    const [uri, setUri] = useState(null);
    const [msg, setMsg] = useState(null);
    // const [hasPermission, setPermission] = Camera.useCameraPermissions();

    async function requestCamera() {
        const permission = await Camera.requestCameraPermissionsAsync();
        const { status } = permission;
        if (status == "granted") {
            setPermission(true);
        }
    }

    async function takePicture() {
        if (camera) {
            const photo = await camera.takePictureAsync();
            const { uri } = photo;
            setUri(uri);
        }
    }

    async function savePhoto(){
        try {
            const firebaseStorage = getStorage(app);
            const photoRef = ref(firebaseStorage, `photo${new Date().getTime()}.jpeg`);
            const uploadReult = await uploadString(photoRef, uri, 'base64', {
                contentType: 'image/jpeg',
                contentEncoding: 'base64',
            });
            setUri(null);
        } catch (error) {
            setMsg(error.message);
        }
    }

    useEffect(() => {
        requestCamera();
    }, []);

    return (
        <View style={styles.container}>
            {msg && <Text>{msg}</Text>}
            {hasPermission && !uri && <>
                <Camera
                    ref={(ref) => {
                        setCamera(ref);
                    }}
                />
                <Pressable
                    onPress={() => takePicture()}>
                    <Text>Capturar</Text>
                </Pressable>
            </>}
            {uri && <>
                <Image style={styles.photo} source={{ uri }} />
                <Pressable
                    onPress={() => savePhoto()}>
                    <Text>Salvar</Text>
                </Pressable>
                <Pressable
                    onPress={() => setUri(null)}>
                    <Text>Excluir</Text>
                </Pressable>
            </>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    photo: {
        flex: 1,
    }
})