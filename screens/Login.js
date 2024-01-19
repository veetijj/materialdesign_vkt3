import * as React from 'react';
import { Appbar, TextInput } from 'react-native-paper'
import  MainAppBar  from './MainAppBar';
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function Login() {

    const [formData, setFormData] = React.useState({username: '', password: ''})
    const [showError, setShowError] = React.useState(false)

    const validateAndSubmit = () => {
        setShowError(true)
        if (formData.username.length > 0 && formData.password.length > 8) {
            setFormData({username: '', password: ''})
            setShowError(false)
        }
    }
    return (
        <>
        <MainAppBar title="Login" />
        
        <View style={styles.container}>
            <TextInput label="Username"
             style={styles.input_field}
             value={formData.username}
             onChangeText={text => setFormData({...formData,username: text})}
             error={formData.username.length === 0 && showError}
              />
            <TextInput label="Password" 
             style={styles.input_field} 
             keyboardType='visible-password'
             value={formData.password}
             onChangeText={text => setFormData({...formData,password: text})}
             error={formData.password.length < 8 && showError}
             />
            <Button mode="contained" 
            style={styles.button} 
            onPress={validateAndSubmit}
            >Submit
            </Button>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    input_field: {
        backgroundColor: 'white',
        margin: (16, 10, 16, 10),
    },
    button: {
        margin: (16, 26, 16, 26),
        backgroundColor: 'red',
    }
});

