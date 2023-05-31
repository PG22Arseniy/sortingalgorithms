import { Layout } from "../components/Layout"; 
import { SortingAlgorithms } from "../type";
import { SelectionSortingArray } from "../components/SelectionSortingArray";

export const Selection = () => {

    return(
        <Layout algorithm={SortingAlgorithms.SELECTION}>
            <h1> Sorting Algorithm with selection </h1> 

            <div>
                <SelectionSortingArray ArrayLength={7}/> 
            </div>
 
            {/* <div className = "colorsExplained">
                <h2> What do these colors mean: </h2>
                <ul>
                    <li>
                        <div className="minNumber">
                            
                        </div>
                        <p className = "decription">

                        </p>
                    </li> 
                    <li>
                        <div className="firstUnsorted">
                            
                        </div>
                        <p className = "decription">

                        </p>
                    </li> 
                    <li>
                        <div className="unsorted">
                            
                        </div>
                        <p className = "decription">

                        </p>
                    </li> 
                    <li>
                        <div className="currentNumber">
                            
                        </div>
                        <p className = "decription">

                        </p>
                    </li> 
                </ul>
            </div>     */}
        </Layout>
    )
}