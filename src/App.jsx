import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from './store/slices/counterSlice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold underline">
          Counter
        </h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>Decrement by 5</button>
        <p>Count: {count}</p>
      </div>
    </>
  )
}

export default App
