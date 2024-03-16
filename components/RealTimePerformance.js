import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-svg-charts';

const RealTimePerformance = () => {
    // Sample data for demonstration
    const powerData = [10, 15, 20, 18, 25];
    const temperatureData = [25, 26, 27, 28, 29];
    const currentData = [5, 6, 7, 8, 9];
    const voltageData = [220, 225, 230, 235, 240];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Real-Time Performance</Text>
            <View style={styles.chartContainer}>
                <LineChart
                    style={styles.chart}
                    data={powerData}
                    svg={{ stroke: 'green' }}
                    contentInset={{ top: 20, bottom: 20 }}
                />
                <Text style={styles.metric}>Power</Text>
            </View>
            <View style={styles.chartContainer}>
                <LineChart
                    style={styles.chart}
                    data={temperatureData}
                    svg={{ stroke: 'red' }}
                    contentInset={{ top: 20, bottom: 20 }}
                />
                <Text style={styles.metric}>Temperature</Text>
            </View>
            <View style={styles.chartContainer}>
                <LineChart
                    style={styles.chart}
                    data={currentData}
                    svg={{ stroke: 'blue' }}
                    contentInset={{ top: 20, bottom: 20 }}
                />
                <Text style={styles.metric}>Current</Text>
            </View>
            <View style={styles.chartContainer}>
                <LineChart
                    style={styles.chart}
                    data={voltageData}
                    svg={{ stroke: 'orange' }}
                    contentInset={{ top: 20, bottom: 20 }}
                />
                <Text style={styles.metric}>Voltage</Text>
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
        height: 100,
    },
    metric: {
        marginLeft: 10,
    },
});

export default RealTimePerformance;
