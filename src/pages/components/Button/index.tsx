import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    
}

export function Button({
    onPress,
    children,
    ...rest
}: ButtonProps) {
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            onPress={onPress}
            {...rest}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
};