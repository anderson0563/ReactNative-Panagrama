import {React, useState} from 'react'
import { Button, Text, TextInput, View } from 'react-native';
import {Check} from '../../src/engines/Panagrama';

export const Panagrama = () => {
    const[p, setP] = useState("");
    return (
        <View>
            <Text>Panagrama</Text>
            <TextInput
                placeholder="informe n"
                onChangeText={palavra => setP(Check(palavra))}
            />
            <Text>{p}</Text>
        </View>
    );
};