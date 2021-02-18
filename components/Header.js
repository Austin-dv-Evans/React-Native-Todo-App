import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        paddingTop: 50,

        backgroundColor: 'teal',
    },
    title: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    }
})