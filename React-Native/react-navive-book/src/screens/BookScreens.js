import React,{useState} from "react";
import { View, TextInput, Button, ScrollView, Text, Image, TouchableOpacity, Alert, Linking,StyleSheet} from "react-native";
import styled from "styled-components";
import axios from "axios";

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:#333;
`
const StyledText = styled.Text`
    font-size:30px;
    color:#ffffff
`
export const BookScreen = () => {
    return(
        <Container>
            <StyledText>
                BOOK
            </StyledText>
        </Container>
    )
}
export const BookListScreen = ({navigation}) => {
    return(
        <Container>
            <Button title="도서검색하러가기" onPress={()=>navigation.navigate("BookDetail")}/>
        </Container>
    )
}
export const BookDetailScreen = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [error, setError] = useState('');

    const searchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:9090/api/books', { params: { query } });
            setResult(response.data.items);
        } catch (err) {
            setError('도서 검색에 실패했습니다.');
            console.error(err);
        }
    };

    const handleSearch = () => {
        if (!query) {
            Alert.alert('검색어를 입력하세요');
            return;
        }
        searchBooks();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={query}
                onChangeText={setQuery}
                placeholder="책 이름을 입력하세요"
            />
            <Button title="검색" onPress={handleSearch} />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <ScrollView>
                {result.map((book) => (
                    <View key={book.isbn} style={styles.bookItem}>
                        {book.image && <Image source={{ uri: book.image }} style={styles.bookImage} />}
                        <Text style={styles.bookTitle}>제목 : {book.title}</Text>
                        <Text>저자 : {book.author}</Text>
                        <Text>출판사 : {book.publisher}</Text>
                        <Text>가격 : {book.discount ? `${book.discount}원` : '가격 정보 없음'}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(book.link)}>
                            <Text style={styles.linkText}>더보기</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export const SettingsScreen = () => {
    return(
        <Container>
            <StyledText>
                설정화면
            </StyledText>
        </Container>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
        borderRadius: 5,
    },
    bookItem: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
    },
    bookImage: {
        width: 100,
        height: 150,
        marginBottom: 10,
    },
    bookTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    linkText: {
        color: 'blue',
        marginTop: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});