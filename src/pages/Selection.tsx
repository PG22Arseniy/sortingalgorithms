import { Layout } from "../components/Layout";
import NumberComponent from "../components/NumberComponent"
import { SortingAlgorithms } from "../type";

export const Selection = () => {
    const num = NumberComponent(12);
    return(
        <Layout algorithm={SortingAlgorithms.SELECTION}>
            <h1> Sorting Algorithm with selection </h1> 

            <div>
                {num}
            </div>
        </Layout>
    )
}