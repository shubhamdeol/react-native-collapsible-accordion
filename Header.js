import React from 'react';
import { View, TouchableOpacity } from 'react-native';

export default function Header({ children, toggleContent }) {
    return (
        <TouchableOpacity onPress={() => toggleContent()}>
            {children}
        </TouchableOpacity>
    )
}
