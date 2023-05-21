import { Layout } from "../components/Layout";
import { SortingArray } from "../components/BubbleSortingArray";
import { SortingAlgorithms } from "../type";


export const Insertion = () => {

    return(
        <Layout algorithm={SortingAlgorithms.INSERTION}>
            <h1> Sorting Algorithm with insertion </h1> 

            <div>
            <SortingArray algorithm={SortingAlgorithms.INSERTION} ArrayLength={7}/> 
            </div>
        </Layout>
    )
}