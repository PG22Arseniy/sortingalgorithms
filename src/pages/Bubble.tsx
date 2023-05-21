import { Layout } from "../components/Layout";
import NumberComponent from "../components/NumberComponent"
import { SortingAlgorithms } from "../type";

export const Bubble = () => {
    const num = NumberComponent(4);
    return(
        <Layout algorithm={SortingAlgorithms.BUBBLE}>
            <h1> Sorting Algorithm with bubble </h1> 

            <div>
                {num}
            </div>
        </Layout>
    )
}