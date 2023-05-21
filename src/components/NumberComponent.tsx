import "../styles/Number.css"

const NumberComponent = (num: number) => {
    return (
        <div className="number">
            <p>
                {num}
            </p>
        </div>
    )
}

export default NumberComponent