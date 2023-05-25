import { Layout } from "../components/Layout";
import { SortingAlgorithms } from "../type";
import { InsertionSortingArray } from "../components/InsertionSortingArray";


export const Insertion = () => {

    return(
        <Layout algorithm={SortingAlgorithms.INSERTION}>
            <h1> Sorting Algorithm with insertion </h1> 

            <div>
            <InsertionSortingArray  ArrayLength={7}/> 
            </div>
        </Layout>
    )
}