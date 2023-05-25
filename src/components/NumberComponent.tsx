import "../styles/Number.css"
import { minIcon } from "./minIcon"

const NumberComponent = (num: number, numId: string, minNumber: boolean) => {
    
    return (
        <div className="number" id = {numId}>  
            <p>
                {num}
            </p>
            {  
                minNumber
                ? 
                    <div className="minIcon"> min </div>
                :
                    <> </>
            }
        </div>
    )
}

export default NumberComponent