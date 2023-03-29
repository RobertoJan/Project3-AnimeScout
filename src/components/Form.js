
const Form = (props) => {

    const {handleSubmit, handleChange} = props;
    return (
        <div className="wrapper">
            <div className="scoutDescription">
                <h3></h3>
                <p></p>
            </div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="userInput"></label>
                <input onChange={handleChange} type="text" id="userInput" required  />
                <div className="buttonContainer">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;