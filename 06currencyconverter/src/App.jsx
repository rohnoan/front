import { useState } from 'react';
import './App.css';
import InputBox from "./components/InputBox"
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const[from,setFrom]=useState('usd')
  const[to,setTo]=useState('inr')
  const[convertedAmount,setConvertedAmount]=useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className='w-full '>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30  '>
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1 '>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>
                setFrom(currency)
              }
              onAmountChange={(amount)=>setAmount(amount)}
              selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
                <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}>
                  swap
                </button>
            </div>
            <div className='w-full mb-1 '>
              <InputBox
              label="to"
              amount={convertedAmount}
              amountDisabled={true}
              currencyOptions={options}
              onCurrencyChange={(currency)=>
                setTo(currency)
              }
              selectedCurrency={to}
              />
            </div>
            <button
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg
            '
            type='submit'
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
