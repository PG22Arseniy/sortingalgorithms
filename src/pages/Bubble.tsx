import { Layout } from "../components/Layout";
import { SortingArray } from "../components/BubbleSortingArray";
import { SortingAlgorithms } from "../type";

export const Bubble = () => { 

    return(
        <Layout algorithm={SortingAlgorithms.BUBBLE}>
            <h1> Sorting Algorithm with bubble </h1> 

            <div>
                <SortingArray algorithm={SortingAlgorithms.BUBBLE} ArrayLength={7}/> 
            </div>


        </Layout>
    )
}