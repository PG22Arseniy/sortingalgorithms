import "../styles/Number.css"

const NumberComponent = (num: number, numId: string) => {
    return (
        <div className="number" id = {numId}>  
            <p>
                {num}
            </p>
        </div>
    )
}

export default NumberComponent