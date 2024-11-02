import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import SignUp from "./SignUp";

const Container = styled.View`
    flex:1;
    background-color:${props => props.theme.background};
    align-items:center;
    justify-content:center;
`

export default function App(){
    return(
        <View>
            <SignUp />
        </View>
    )
}