import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Passport = () => {
    // Sample data for demonstration
    const passportData = {
        waterLevel: 'Normal',
        current: '10 A',
        status: 'On',
        voltage: '220 V',
        temperature: '30°C',
        motorSpeed: '1500 RPM'
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Passport</Text>
            <View style={styles.row}>
                <Text style={styles.label}>Water Level:</Text>
                <Text>{passportData.waterLevel}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Current:</Text>
                <Text>{passportData.current}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Status:</Text>
                <Text>{passportData.status}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Voltage:</Text>
                <Text>{passportData.voltage}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Temperature:</Text>
                <Text>{passportData.temperature}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Motor Speed:</Text>
                <Text>{passportData.motorSpeed}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
    },
});

export default Passport;
