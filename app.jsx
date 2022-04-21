
const ATMDeposit = ({onChange, isDeposit }) => {
    const choice = ["Deposit", "Withdrawal"];
    return (
      <label className="label huge">
        <h3>{choice[Number(!isDeposit)]}</h3>
        <input type="number" width="200" onChange={onChange}></input>
        <br></br>
        <input className="button" type="submit" width="200" value="Submit"></input>
      </label>
    );
  };

const Account = () => {
    
    let deposit = 0;
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [error, setError] = React.useState(null);
    let status = `Account Balance $ ${totalState}`;

    const handleChange = event => {
        console.log(`handleChange ${event.target.value}`);
        deposit = Number(event.target.value);
    };
    
    const handleSubmit = () => {
        let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
        if (isDeposit === false && deposit > totalState) { 
            setError("Insufficient funds!");
        } else {
            setTotalState(newTotal);
            setError(null);
        }
        event.preventDefault();
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>ATM Machine</h1>
            <h2 id="total">{status}</h2>
            {error && <div style={{color: 'red' }}>{error}</div>}
            <button className="button" onClick={() => setIsDeposit(true)} >Deposit</button>
            <button className="button" onClick={() => setIsDeposit(false)} >Withdrawal</button>
            <br></br>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit} >Deposit</ATMDeposit>
        </form>
    )
}

ReactDOM.render(<Account />, document.getElementById("root"));
