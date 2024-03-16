import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Analysis = () => {
    // Sample data for demonstration
    const analysisData = {
        efficiency: '80%',
        powerConsumption: '200 kW',
        maintenanceRequired: 'Yes',
    };

    // Determine if the asset is operating normally
    const isOperatingNormally = analysisData.maintenanceRequired === 'No';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Analysis</Text>
            <View style={styles.row}>
                <Text style={styles.label}>Efficiency:</Text>
                <Text>{analysisData.efficiency}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Power Consumption:</Text>
                <Text>{analysisData.powerConsumption}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Maintenance Required:</Text>
                <Text>{analysisData.maintenanceRequired}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Status:</Text>
                <Text>{isOperatingNormally ? 'Operating Normally' : 'Maintenance Required'}</Text>
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

export default Analysis;