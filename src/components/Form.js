
const Form = (props) => {

    // event handlers functions are being passed down via props from the parent component AnimeScout

    const {handleSubmit, handleChange} = props;
    return (
        <section className="wrapper formSection">
            <div className="scoutDescription">
                <h6>You can try typing the name of a show you remember or a word that is within it to narrow your options!</h6>
                <p></p>
            </div>
            <form onSubmit={handleSubmit} action="">
                <label className="sr-only" htmlFor="userInput">insert query here</label>
                <input value={props.input} onChange={handleChange} type="text" id="userInput" required placeholder="search here" />
                <div className="buttonContainer">
                    <button>Search</button>
                </div>
            </form>
        </section>
    )
}

export default Form;