import { ArrayObjectProps, SortingArrayProps } from "../type";
import NumberComponent from "./NumberComponent";
import "../styles/SortingArray.css" 
import { CustomButton } from "./CustomButton";

import {useDeferredValue, useEffect, useState} from 'react'
import { Highlight, HighlightWithTime, StopHighLight } from "../global";

// Shuffle the array 
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



export const SelectionSortingArray = ({ArrayLength} : SortingArrayProps ) => {

    const [iterating, setIterating] = useState<boolean>(false)
    const [showData, setShowData] = useState<boolean>(false)
    const [myObj , setMyObj] = useState<ArrayObjectProps>()
    const [minPosition, setMinPosition] = useState<number>(()=>0)
    const [currentPosition, setCurrentPosition] = useState<number>(()=>0)
    const [firstUnsortedPosition, setFirstUnsortedPosition] = useState<number>(()=>0)


    useDeferredValue(minPosition) 

    useEffect (()=> {
        // setup array of numbers (0 -> chosen length) and shuffle it only on mount
        const createArray = () => {
            let ArrayObject: ArrayObjectProps = {ArrayToSort: []}

            for (let i:number = 0; i < ArrayLength; i++){
                ArrayObject.ArrayToSort.push(i)  
            }
            ArrayObject.ArrayToSort = shuffle(ArrayObject.ArrayToSort) 
            setMyObj(ArrayObject)
            

                
        }
        createArray() 
    },[])

    const FinishIteration = () => {

        // Stop Highlighting previous first unsorted number
        HighLightNumber(firstUnsortedPosition, myObj!, -1, "red")

        // Swap the min number with first unsorted
        SwapNumbers(firstUnsortedPosition, minPosition, myObj!)
        forceRerender() 

        // Highlight Sorted number
        HighLightNumber(firstUnsortedPosition, myObj!, -1, "grey") 

        // new first unsorted, min and current positions
        setFirstUnsortedPosition(pos => pos + 1)
        setMinPosition(firstUnsortedPosition + 1)  
        setCurrentPosition(firstUnsortedPosition + 1)   

        setShowData(false)

        setIterating(false) 

    }


    useEffect(()=>{

        if (!iterating) return 

        // End of an array 
        if (currentPosition >= myObj?.ArrayToSort.length! ) {

            FinishIteration()
            return 
        }


        HighLightNumber(currentPosition, myObj!) 


        // check current number against minimum with delay
        setTimeout(()=>{

            if (currentPosition < myObj?.ArrayToSort.length!  ) { 

                if (myObj?.ArrayToSort[currentPosition]! < myObj?.ArrayToSort[minPosition]!){
                    // set new min
                    setMinPosition(currentPosition)
                }

                setTimeout(()=>{
                    // set new current position with delay
                    setCurrentPosition(pos => pos  + 1) 
                }, 1000) 
            
            }
    
        },1000)
        
    },[currentPosition])

    const forceRerender = () => {

        // create new obj and set our state to it to force rerender
        let newObj1:ArrayObjectProps = {ArrayToSort:[]};
        newObj1.ArrayToSort = myObj?.ArrayToSort!;
        setMyObj(newObj1)   

    }
    const HighLightNumber = (pos: number, obj:ArrayObjectProps, time: number = 2 ,color: string = "chartreuse") => {

        // get element from DOM and Highlight them 
        const elem = document.getElementById(obj.ArrayToSort[pos].toString())  

        if (time == -1)   
            Highlight(elem!, color)
     
        else 
            HighlightWithTime(elem!, time, "red", color)  
    }




    const SwapNumbers = (pos1:number, pos2:number,  obj:ArrayObjectProps) => {
        let proxy: number = 0;
        proxy = obj.ArrayToSort[pos1];
        obj.ArrayToSort[pos1] = obj.ArrayToSort[pos2];
        obj.ArrayToSort[pos2] = proxy; 
    } 


    
    // --------------------
    // START SELECTION SORT:
    const  StartSelectionIteration =   (i: number = 1)  => {

        setIterating(true)   
        setCurrentPosition(i)

    }


    // --------------------
    // Next Iteration of the sort:
    const  NextStep = () => {

        HighLightNumber(firstUnsortedPosition,myObj!,-1,"purple")
      
        StartSelectionIteration(firstUnsortedPosition + 1)  
        
    }
 


    return(
        <div className="content">  
        <div className="sort-array" id="sort-array">
            {myObj?.ArrayToSort.map (num => ( 

    
                <div key={num}> {

                    iterating
                    ? (
                        num === myObj.ArrayToSort[minPosition]
                        ? NumberComponent(num, `${num}`, true)
                        : NumberComponent(num, `${num}`, false)
                    )
                    : NumberComponent(num, `${num}`, false)

                } </div>  
            ))} 

            

        </div>

        <CustomButton disabled={iterating} onClick={NextStep}> Next </CustomButton> 
         

        <CustomButton disabled={!iterating} onClick={()=> {setShowData((prev)=>!prev) }}> {showData? "Hide Details": "Show Details" } </CustomButton>

        <div className={!showData ? `hidden`: `currentData`}>
            <div className="dataSection">
                <p> Min position: {minPosition} </p> 
                <p> Min number: {myObj?.ArrayToSort[minPosition]} </p>  
            </div>
            <div className="dataSection">
                <p> Current position: {currentPosition} </p> 
                <p> Current number: {myObj?.ArrayToSort[currentPosition]} </p>  
            </div>
            <div className="dataSection">
                <p> First unsorted position: {firstUnsortedPosition} </p>  
                <p> First unsorted number: {myObj?.ArrayToSort[firstUnsortedPosition]} </p>  
            </div>
        </div> 
        
        </div> 
    )

}