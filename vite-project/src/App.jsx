import { useState } from 'react'
import { InputBox } from './Components'
import {useCurrencyinfo} from './Hooks/useCurrencyinfo'
//import index from './Components/index'

function App() {
  const [amount, setAmount] = useState(0)
  const [from ,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)
  const Currencyinfo=useCurrencyinfo(from)
  const options =Object.keys(Currencyinfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>{
  setConvertedAmount(amount*Currencyinfo[to])}
  return (
      <div  className="w-full h-screen flex-wrap justify-center items-center bg-cover bg-no-repeat ">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto
           border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form 
            onSubmit={(e)=> {
              e.preventDefault();
              convert() }}>
              <div className="w-full mb-1">
                <InputBox 
                label ="from"
                amount={amount}
                currencyoptions={options}
                oncurrencychange={(currency)  => setAmount(amount)}
                selectcurrency={from}/>
           </div>
           <div>
            <button 
            type='button'
            className='absolute left-1/2'
            onClick={swap}>
            swap</button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
              label="To"
              amount={convertedAmount}
                currencyoptions={options}
                oncurrencychange={(currency) => setTo(currency)}
                selectcurrency={from}
                amountDisable/>
            </div>
                <button type='submit'
                className='w-full bg-blue-600
                text-white px-4 py-3 rounded-lg'>
                  convert {from.toUppercase()} to {to.toUpperCase()}
                </button>
              </form>
          </div>
        </div>
   </div>
  );
  }
export default App;
