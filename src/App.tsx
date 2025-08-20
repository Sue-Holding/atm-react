import React, { useState } from 'react';
import './App.css';

const BankApp: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [annualDeposit, setAnnualDeposit] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [output, setOutput] = useState<string[]>([]);

const handleDeposit = () => {
  const amount = parseFloat(deposit);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid deposit amount");
    return;
  }
  setBalance(balance + amount);
  setOutput(prev => [...prev, `Deposited: ${amount.toFixed(2)} SEK`]);
  setDeposit("");
};

const handleWithdraw = () => {
  const amount = parseFloat(withdraw);
  if (isNaN(amount) || amount <=0) {
    alert("Invlaid withdrawal amount");
    return;
  }
  setBalance(balance - amount);
  setOutput(prev => [...prev, `Withdrew: ${amount.toFixed(2)} SEK`]);
  setWithdraw("");
}

const handleInterest = () => {
  const dep = parseFloat(annualDeposit);
  const yrs = parseInt(years);
  const rate = parseFloat(interestRate);

  if (isNaN(dep) || dep <= 0 || isNaN(yrs) || yrs <= 0 || isNaN(rate) || rate < 0) {
    alert("Invalid input for interest calculation");
    return;
  }

  const rateDeminal = rate / 100;
  const totalSavings = dep * ((Math.pow(1 + rateDeminal, yrs) -1 ) / rateDeminal);
  const totalInterest = totalSavings - dep * yrs;

  setOutput(prev => [
    ...prev,
    `Total interest after ${yrs} years: ${totalInterest.toFixed(2)} SEK`,
    `Total saving after ${yrs} years: ${totalSavings.toFixed(2)} SEK`,
  ]);

  setAnnualDeposit("");
  setYears("");
  setInterestRate("");
};

return (
  <div>
    <h1>Bank App</h1>
    <h2>Balance: {balance.toFixed(2)} SEK</h2>

    {/* deposit block */}
    <div>
      <input type="number" 
              value={deposit} 
              onChange={e => setDeposit(e.target.value)} 
              placeholder='Deposit'/>
      <button onClick={handleDeposit}>Deposit</button>
    </div>

  {/* withdraw block */}
    <div>
      <input type="number" 
              value={withdraw} 
              onChange={e => setWithdraw(e.target.value)} 
              placeholder='Withdraw'/>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>

  {/* interest calculation */}
    <div>
      {/* annual dep */}
      <input type="number" 
              value={annualDeposit} 
              onChange={e => setAnnualDeposit(e.target.value)} 
              placeholder='Annual Deposit'/>
        {/* years */}
      <input type="number" 
              value={years} 
              onChange={e => setYears(e.target.value)} 
              placeholder='Years'/>
        {/* interest rate */}
      <input type="number" 
              value={interestRate} 
              onChange={e => setInterestRate(e.target.value)} 
              placeholder='Interest Rate'/>

      <button onClick={handleInterest}>Calculate Interesst</button>
    </div>
    
    {/* transactions */}
    <div>
      <h3>Transactions:</h3>
      {output.map((line, idx) => 
      <p key={idx}>{line}</p>)}
    </div>
  </div>
  );
};

export default BankApp;
