import { Layout } from "../components/Layout";
import NumberComponent from "../components/NumberComponent"
import { SortingAlgorithms } from "../type";


export const Insertion = () => {
    const num = NumberComponent(3);
    return(
        <Layout algorithm={SortingAlgorithms.INSERTION}>
            <h1> Sorting Algorithm with insertion </h1> 

            <div>
                {num}
            </div>
        </Layout>
    )
}