import React,{useState} from "react";
import axios from "axios";

function BookSearch(){

    const [query,setQuery] = useState('');
    const [result,setResult] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const searchBooks = () => {

        try {
            const response = axios.get('http://localhost:9090/api/books',{params: {query}})

            response.then(res => setResult(res.data.items))
        } catch (err) {
            setError('도서 검색에 실패했습니다.')
        }
    }

    const handleSearch = (e) => {
        if(!query){
            alert('검색어를 입력하세요')
            return;
        }
        e.preventDefault();
        searchBooks();
    }

    return(
        <div>
            <h1>네이버 도서 검색</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="책 이름을 입력하세요"
                />
                <button type="submit">검색</button>
            </form>            
            <ul>
                {result.map((book) => (
                    <li key={book.isbn}>
                        <img src={book.image} alt={book.title}/>
                        <p>제목 : {book.title}</p>
                        <p>저자 : {book.author}</p>
                        <p>출판사 : {book.publisher}</p>
                        <p>가격 : {book.discount ? `${book.discount}원`:'가격 정보 없음'}</p>
      
                        <a href={book.link} target="_blank" rel="noopener noreferrer">더보기</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookSearch;