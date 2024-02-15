import { View, Text, Button, StyleSheet } from "react-native";

export default function Toggle({
    label, value, options, action
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.optionsContainer}>
                {options.map((option, index) => (
                    <Button
                        color={option === value ? '#023047' : '#adb5bd'}
                        onPress={() => action(option)}
                        title={option}
                        key={`${option}_${index}`}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 12,
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        padding: 4,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
})
