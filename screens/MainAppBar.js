import React from 'react'
import { Appbar } from 'react-native-paper'

export default function mainAppBar(props) {
    return (
        <Appbar.Header
        mode="center-aligned"
        elevated={true}
        style={{backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,}}
        >
            <Appbar.Content title={props.title} style={{backgroundColor: 'white'}}/>
        </Appbar.Header>
    )
}