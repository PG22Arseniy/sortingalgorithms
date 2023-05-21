import { ArrayObjectProps, SortingAlgorithms } from "../type";
import NumberComponent from "./NumberComponent";
import "../styles/SortingArray.css" 
import { CustomButton } from "./CustomButton";

import {useEffect, useState} from 'react'
import { Highlight } from "../global";

type SortingArrayProps = {
    algorithm: SortingAlgorithms,
    ArrayLength: number
}


function shuffle(array: number[]): number[] {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



export const SortingArray = ({algorithm, ArrayLength} : SortingArrayProps ) => {

    const [iterating, setIterating] = useState<boolean>(false)
    const [myObj , setMyObj] = useState<ArrayObjectProps>()
    const [positionToSort, setPositionToSort] = useState<number>()

    useEffect (()=> {
        // setup array of numbers (0 -> chosen length) and shuffle it only on mount
        const createArray = () => {
            let ArrayObject: ArrayObjectProps = {ArrayToSort: []}

            for (let i:number = 0; i < ArrayLength; i++){
                ArrayObject.ArrayToSort.push(i)  
            }
            ArrayObject.ArrayToSort = shuffle(ArrayObject.ArrayToSort) 
            setMyObj(ArrayObject)

            setPositionToSort(0)
        }
        createArray() 
    },[])

    const forceRerender = () => {

        // create new obj and set our state to it to force rerender
        let newObj:ArrayObjectProps = {ArrayToSort:[]};
        newObj.ArrayToSort = myObj?.ArrayToSort!;
        setMyObj(newObj)     
    }
    const HighLightComparedNumbers = (num1: number, num2:number, obj:ArrayObjectProps) => {

        // get elements  from DOM and Highlight them 
        const elem1 = document.getElementById(obj.ArrayToSort[num1].toString())
        const elem2 = document.getElementById(obj.ArrayToSort[num2].toString())

        Highlight(elem1!, 3)
        Highlight(elem2!, 3) 
    }

    const SwapNumbers = (pos1:number, pos2:number,  obj:ArrayObjectProps) => {
        let proxy: number = 0;
        proxy = obj.ArrayToSort[pos1];
        obj.ArrayToSort[pos1] = obj.ArrayToSort[pos2];
        obj.ArrayToSort[pos2] = proxy; 
    } 


    // --------------------
    // BUBLE SORT FUNCTION:
    const  BubbleSort =   (obj:ArrayObjectProps, i: number) : boolean  => {

        setIterating(true)
        
        // highlight neighbors
        HighLightComparedNumbers(i-1, i, obj)

        // Proceed with delay 
        setTimeout(()=> {

            // compare neghbors
             if (obj.ArrayToSort[i-1] > obj.ArrayToSort[i]) { 

                // Swap Numbers and update the state to rerender the UI
                SwapNumbers(i-1, i, obj) 
                forceRerender()   
            }
            if (i >= obj.ArrayToSort.length - 1) { 
                // iteration is over
                setIterating(false) 
                return true
            }  
            BubbleSort( obj ,i+1)
        }, 3000) 

        return false;
    }


    // --------------------
    // SELECTION SORT FUNCTION:
    const  SelectionSort =   (obj:ArrayObjectProps, i: number) : boolean  => {

        setIterating(true)
        
        // highlight neighbors
        HighLightComparedNumbers(i-1, i, obj)

        // Proceed with delay 
        setTimeout(()=> {

            // compare neghbors
             if (obj.ArrayToSort[i-1] > obj.ArrayToSort[i]) { 

                // Swap Numbers and update the state to rerender the UI
                SwapNumbers(i-1, i, obj) 
                forceRerender()   
            }
            if (i >= obj.ArrayToSort.length - 1) { 
                // iteration is over
                setPositionToSort(pos => pos! + 1)
                setIterating(false) 
                return true
            }  
            SelectionSort( obj ,i+1)
        }, 3000) 

        return false;
    }


    // --------------------
    // SELECTION SORT FUNCTION:
    const  InsertionSort =   (obj:ArrayObjectProps, i: number) : boolean  => {

        setIterating(true)
        
        // highlight neighbors
        HighLightComparedNumbers(i-1, i, obj)

        // Proceed with delay 
        setTimeout(()=> {

            // compare neghbors
             if (obj.ArrayToSort[i-1] > obj.ArrayToSort[i]) { 

                // Swap Numbers and update the state to rerender the UI
                SwapNumbers(i-1, i, obj) 
                forceRerender()   
            }
            if (i >= obj.ArrayToSort.length - 1) { 
                // iteration is over
                setIterating(false) 
                return true
            }  
            InsertionSort( obj ,i+1)
        }, 3000) 

        return false;
    }


    // --------------------
    // Next Iteration of the sort:
    const  NextStep = () => {

        if (!myObj) return

        switch (algorithm) {
            case SortingAlgorithms.BUBBLE:

                BubbleSort(myObj, 1)
                break;

            case SortingAlgorithms.INSERTION:
                InsertionSort(myObj, 1)
                break;

            case SortingAlgorithms.SELECTION:
                SelectionSort(myObj, positionToSort!)
                break;

            default:
                break; 
        }


    }
 


    return(
        <div className="content">  
        <div className="sort-array" id="sort-array">
            {myObj?.ArrayToSort.map (num => ( 
                <div key={num}> {
                    NumberComponent(num, `${num}`)
                    
                } </div>  
            ))} 

        </div>

        <CustomButton disabled={iterating} onClick={NextStep}> Next </CustomButton> 
        </div>
    )

}