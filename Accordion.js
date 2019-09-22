import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from './Header'; 
import Content from './Content';

export default function Accordion({ renderContent, renderHeader, onChangeVisibility }) {
    const [ contentVisibility, setContentVisibility ] = useState(false)

    useEffect(() => {
        onChangeVisibility(contentVisibility)
    }, [contentVisibility])

    return (
        <View>
            <Header toggleContent={() => {
                setContentVisibility(!contentVisibility)
            }}>
                { renderHeader() }
            </Header>
            {
                contentVisibility && (
            <Content>
                { renderContent() }                
            </Content>
                )
            }
        </View>
    )
}
