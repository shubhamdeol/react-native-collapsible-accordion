import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from './Header'; 
import Content from './Content';

export default function Accordion({ renderContent, renderHeader }) {
    const [ contentVisibility, setContentVisibility ] = useState(false)
    return (
        <View>
            <Header toggleContent={() => setContentVisibility(!contentVisibility)} >
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
