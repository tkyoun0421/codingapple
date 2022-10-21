import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [likeCount , setLikeCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {
          글제목.map(function(data, i){
              return (
                <div className="list">
                <h4 onClick={() => { setModal(!modal); setTitle(i) }}>{ 글제목[i] } 
                    <span onClick={ (e) => { 
                        e.stopPropagation();
                        let copy = [...likeCount];
                        copy[i] = copy[i] + 1;
                        setLikeCount(copy); 
                    }}>👍🏼</span> { likeCount[i] } 
                </h4>
                <p>
                  2월 17일 발행
                </p>
                <button onClick={ () => {
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                } }>삭제</button>
              </div>
              );
            })
      }

      <input onChange={ (e) => { 입력값변경(e.target.value);} }></input>
      <button onClick={ () => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      } }>글발행</button>

      {
          modal == true ? <Modal title = {title} 글제목 = {글제목}/> : null
      }

    </div>
  );
}

function Modal(props){
    return (
        <div className="modal">
            <h4>{ props.글제목[props.title] }</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글 수정</button>
        </div>
    )
}

export default App;
