import { Layout } from "../components/Layout";
import NumberComponent from "../components/NumberComponent"
import { SortingArray } from "../components/BubbleSortingArray";
import { SortingAlgorithms } from "../type";

export const Selection = () => {

    return(
        <Layout algorithm={SortingAlgorithms.SELECTION}>
            <h1> Sorting Algorithm with selection </h1> 

            <div>
                <SortingArray algorithm={SortingAlgorithms.SELECTION} ArrayLength={7}/> 
            </div>
        </Layout>
    )
}