import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';

const PerformanceTimeline = () => {
    // Sample data for demonstration
    const performanceData = [
        { date: '01-01-2024', runningHours: 100, energyConsumption: 50, starts: 10 },
        { date: '01-02-2024', runningHours: 200, energyConsumption: 60, starts: 15 },
        { date: '01-03-2024', runningHours: 150, energyConsumption: 55, starts: 12 },
        { date: '01-04-2024', runningHours: 250, energyConsumption: 65, starts: 20 },
        { date: '01-05-2024', runningHours: 300, energyConsumption: 70, starts: 18 },
        { date: '01-06-2024', runningHours: 350, energyConsumption: 75, starts: 22 },
    ];

    // Extracting data for each metric
    const dates = performanceData.map(data => data.date);
    const runningHours = performanceData.map(data => data.runningHours);
    const energyConsumption = performanceData.map(data => data.energyConsumption);
    const starts = performanceData.map(data => data.starts);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Performance Timeline</Text>
            <View style={styles.chartContainer}>
                <YAxis
                    data={runningHours}
                    contentInset={{ top: 20, bottom: 20 }}
                    svg={{ fill: 'grey', fontSize: 10 }}
                    numberOfTicks={5}
                    formatLabel={(value) => `${value} hrs`}
                />
                <LineChart
                    style={styles.chart}
                    data={runningHours}
                    svg={{ stroke: 'blue' }}
                    contentInset={{ top: 20, bottom: 20 }}
                >
                    <Grid />
                </LineChart>
                <XAxis
                    data={dates}
                    formatLabel={(value, index) => dates[index]}
                    contentInset={{ left: 20, right: 20 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                    numberOfTicks={dates.length}
                />
            </View>
            {/* Repeat the same pattern for energyConsumption and starts */}
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

export default PerformanceTimeline;
