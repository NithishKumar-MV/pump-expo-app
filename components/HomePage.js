import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Passport from './Passport';
import Analysis from './Analysis';
import RealTimePerformance from './RealTimePerformance';
import Trends from './Trends';
import PerformanceTimeline from './PerformanceTimeline';

const HomePage = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Home Page</Text>
                <Passport />
                <Analysis />
                <RealTimePerformance />
                <Trends />
                <PerformanceTimeline />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomePage;
