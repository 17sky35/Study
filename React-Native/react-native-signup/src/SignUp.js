import React, { useState } from "react";
import styled from "styled-components";

const View = styled.View`
    margin:20px;
`
const TitleText = styled.Text`
    textAlign:center;
    font-size:50px;
    marginBottom:10px;
`
const AText = styled.Text`
    margin:10px 0px;
    font-size:30px; 
`
const TextInput = styled.TextInput`
    paddingLeft:10px;
    border:1px solid;
    height: 50px;
    font-size:25px; 
    border-radius:10px;
`
const Button = styled.Pressable`
    alignItems:center;
    marginTop:40px;
    background-color:red;
    border-radius:10px;
`

const SignUp = ()=>{
    const [password,setPassword] = useState("");
    const [passwords,setPasswords] = useState("");
    return(
        <View>
            <TitleText>회원가입</TitleText>
            <AText>이름</AText>
            <TextInput placeholder="이름을 입력하세요" />
            <AText>이메일</AText>
            <TextInput placeholder="이메일을 입력하세요" />
            <AText>비밀번호</AText>
            <TextInput onChangeText={setPassword} secureTextEntry={true} placeholder="비밀번호를 입력하세요" />
            <AText>비밀번호 확인</AText>
            <TextInput onChangeText={setPasswords}  secureTextEntry={true} placeholder="비밀번호를 입력하세요" />
            <Button onPress={()=>(password===passwords? alert("가입완료"):alert("비번이다름"))} >
                <AText>가입하기</AText>
            </Button>
        </View>
    )
}

export default SignUp;