import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import './App.css'

function App() {

  const mockData = [
    //체크박스, 장소명(성산일출봉), 지역(제주도), 카테고리(자연,관광), 날짜, 버튼*2
    {
        id: 0,
        isDone: false,
        location: '부산',
        content: '해운대',
        date: new Date().getTime(),
        // category
    },
    {
        id: 1,
        isDone: false,
        content: '일본 여행',
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: '대만 여행',
        date: new Date().getTime(),
    }
  ]

  return (
    <div className='wrap'>
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  )
}

export default App
