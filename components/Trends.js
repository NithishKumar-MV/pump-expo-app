import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-svg-charts';

const Trends = () => {
    // Sample data for demonstration
    const runningHoursData = [100, 200, 150, 250, 300, 350]; // Sample running hours data
    const energyConsumptionData = [50, 60, 55, 65, 70, 75]; // Sample energy consumption data

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Trends</Text>
            <View style={styles.chartContainer}>
                <LineChart
                    style={styles.chart}
                    data={runningHoursData}
                    svg={{ stroke: 'blue' }}
                    contentInset={{ top: 20, bottom: 20 }}
                />
                <Text>Running Hours</Text>
            </View>
            <View style={styles.chartContainer}>
                <LineChart
                    style={styles.chart}
                    data={energyConsumptionData}
                    svg={{ stroke: 'orange' }}
                    contentInset={{ top: 20, bottom: 20 }}
                />
                <Text>Energy Consumption (kWh)</Text>
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
    chartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    chart: {
        flex: 1,
        height: 200,
    },
});

export default Trends;
