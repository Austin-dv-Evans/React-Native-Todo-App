import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function TodoItem({ item, pressHandler }) {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key) }>
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>
                <MaterialIcons name='delete' size={22} color='purple' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 4,
        borderStyle: 'dashed',
        borderRadius: 10,
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        marginLeft: 10,
        color: 'white'
    }
})