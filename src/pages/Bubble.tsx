import { Layout } from "../components/Layout";
import { BubbleSortingArray } from "../components/BubbleSortingArray";
import { SortingAlgorithms } from "../type";

export const Bubble = () => { 

    return(
        <Layout algorithm={SortingAlgorithms.BUBBLE}>
            <h1> Sorting Algorithm with bubble </h1> 

            <div>
                <BubbleSortingArray  ArrayLength={7}/> 
            </div>


        </Layout>
    )
}