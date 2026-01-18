import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from './state/index'


function App() {
  const state =  useSelector((state)=>state.account)

  const dispatch = useDispatch()
  //*  the next step is to now bind(свезать)

  //* it will return functions that automatically dispatch actions to the store when called.
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreator, dispatch)
  console.log(depositMoney);
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100px', alignItems: 'center', marginLeft: "40%"}}>
      <h1 >{state}</h1>
      <button onClick={()=>depositMoney(1000)}>Deposit</button>
      <button onClick={()=>withdrawMoney(1000)}>Withdraw</button>
    </div>
  )
}

export default App;
