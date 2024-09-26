import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { MainStack } from "./main"

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    )
}