import { ReactNode } from "react"
import "../styles/Header.css"
import { SortingAlgorithms } from "../type"

type LayoutProps = {
    children: ReactNode,
    algorithm?: SortingAlgorithms
}



export const Layout = ({children, algorithm}:LayoutProps) => {

    return (
        <> 
        <header> 
            <title> Sorting Algorithms </title>
            <meta name="description" content="Visualized Sorting Algorithms" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
           <h3>Sort with: </h3>

            <nav>
                <a 
                    title="bubble" 
                    href="/bubble" 
                    className={algorithm===SortingAlgorithms.BUBBLE? `selected`:``}>
                Bubble </a>
                <a 
                    title="selection" 
                    href="/selection" 
                    className={algorithm===SortingAlgorithms.SELECTION? `selected`:``}> 
                Selection </a>
                <a 
                    title="insertion" 
                    href="/insertion" 
                    className={algorithm===SortingAlgorithms.INSERTION? `selected`:``}> 
                Insertion </a> 
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p> Copyright Arseniy Skudaev</p>
        </footer>
        </> 
    )
}
