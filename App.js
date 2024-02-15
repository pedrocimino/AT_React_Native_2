import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toggle from './components/Toggle';

export default function App() {

  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('center');
  const [alignItems, setAlignItems] = useState('center');

  const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical';
  const secundaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal';

  const layoutStyle = {
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
  };

  const flexDirectionOptions = ['row', 'column'];
  const justifyContentOptions = [
    'flex-start', 'center', 'flex-end', 'stretch',
    'space-around', 'space-between', 'space-evenly'
  ];
  const alignItemsOptions = [
    'flex-start', 'center', 'flex-end', 'stretch'
  ];

  // View
  return (
    <View style={styles.container}>
      <Toggle
        label={'Primary Axis (FlexDirection)'}
        value={flexDirection}
        options={flexDirectionOptions}
        action={(option) => {
          setFlexDirection(option);
        }}
      />
      <Toggle
        label={`${primaryAxis} dist. (JustifyContent)`}
        value={justifyContent}
        options={justifyContentOptions}
        action={(option) => {
          setJustifyContent(option);
        }}
      />
      <Toggle
        label={`${secundaryAxis} dist. (AlignContent)`}
        value={alignItems}
        options={alignItemsOptions}
        action={(option) => {
          setAlignItems(option);
        }}
      />
      <View style={[styles.boxContainer, layoutStyle]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
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
  boxContainer: {
    flex: 1,
    backgroundColor: '#e9c46a',
  },
  box: {
    padding: 25,
    borderWidth: 2,
    backgroundColor: 'blue',
  }
});
