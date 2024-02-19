import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';

export default function App() {

  const [msg, setMsg] = useState("Cabeçalho Nível 2");
  const [count, setCount] = useState(0);

  const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

  const configImg = {
    uri: 'https://images.pexels.com/photos/20161587/pexels-photo-20161587/free-photo-of-agricultura-interior-colheita-safra.jpeg'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Cabeçalho Nível 1</Text>
      <Text style={styles.header2}>{count}</Text>
      <ScrollView>
        <Text style={styles.paragraph}>{content}</Text>
      </ScrollView>
      <Image style={styles.img} source={configImg} />
      <Button
        color={'#fb8500'}
        title='Aperte Aqui!'
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
        }}
        style={styles.btn}
      >
        <View>
          <Text style={styles.header1}>Clique Aqui!</Text>
          <Text style={styles.btnLabel}>Clique Aqui!</Text>
        </View>
      </TouchableOpacity>

      <TouchableHighlight
        onPress={() => {
          setCount(count + 1);
        }}
        style={styles.btn}
      >
        <View>
          <Text style={styles.header1}>Clique Aqui!</Text>
          <Text style={styles.btnLabel}>Clique Aqui!</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header1: {
    backgroundColor: '#8ecae6',
    padding: 10,
    margin: 5,
    textAlign: 'center',
    fontSize: 26,
  },
  header2: {
    backgroundColor: '#219ebc',
    padding: 8,
    margin: 3,
    textAlign: 'center',
    fontSize: 24,
  },
  paragraph: {
    padding: 8,
    margin: 3,
    textAlign: 'justify',
    fontSize: 24,
  },
  img: {
    width: 200,
    height: 200,
  },
  btn: {
    backgroundColor: '#023047',
    padding: 10,
    margin: 10,
  },
  btnLabel: {
    color: '#fefae0',
  }
});
