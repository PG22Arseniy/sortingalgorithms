import { ArrayObjectProps, SortingArrayProps } from "../type";
import NumberComponent from "./NumberComponent";
import "../styles/SortingArray.css" 
import { CustomButton } from "./CustomButton";

import {useEffect, useState} from 'react'
import { Highlight, HighlightWithTime } from "../global";



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



export const InsertionSortingArray = ({ArrayLength} : SortingArrayProps ) => {

    const [iterating, setIterating] = useState<boolean>(false)
    const [myObj , setMyObj] = useState<ArrayObjectProps>()
    const [currentPosition, setCurrentPosition] = useState<number>(()=>1)
    const [sortingPosition, setSortingPosition] = useState<number>(()=>1)

    useEffect (()=> {
        // setup array of numbers (0 -> chosen length) and shuffle it only on mount
        const createArray = () => {
            let ArrayObject: ArrayObjectProps = {ArrayToSort: []}

            for (let i:number = 0; i < ArrayLength; i++){
                ArrayObject.ArrayToSort.push(i)  
            }
            ArrayObject.ArrayToSort = shuffle(ArrayObject.ArrayToSort) 
            setMyObj(ArrayObject)

            if (!myObj) return

              
        }
        createArray() 
       
    },[])



    const forceRerender = () => {

        // create new obj and set our state to it to force rerender
        let newObj:ArrayObjectProps = {ArrayToSort:[]};
        newObj.ArrayToSort = myObj?.ArrayToSort!;
        setMyObj(newObj)     
    }


    const HighLightNumber = (pos: number, obj:ArrayObjectProps, time: number = 2 ,color: string = "chartreuse") => {

        // get element from DOM and Highlight them 
        const elem = document.getElementById(obj.ArrayToSort[pos].toString())  

        if (time == -1)   
            Highlight(elem!, color)
     
        else 
            HighlightWithTime(elem!, time, "red", color)  
    }



    const InsertNumber = (posFrom:number, posTo:number,  obj:ArrayObjectProps) => {

        let proxy: number = obj.ArrayToSort[posFrom];

        obj.ArrayToSort.splice(posFrom, 1)
        if (posTo !== 0) {
            obj.ArrayToSort.splice(posTo+1,0, proxy )
        }
        else {
            obj.ArrayToSort.splice(posTo,0, proxy ) 
        }
    } 



    const FinishIteration = () => {

        HighLightNumber(sortingPosition, myObj!, -1, "red")
        HighLightNumber(sortingPosition + 1, myObj!, -1, "magenta")
        setSortingPosition(pos => pos + 1) 
        setIterating(false) 
    } 


    useEffect(()=>{

        if (!iterating) return 

        // End of an array 
        if (currentPosition < 0 ) {

            FinishIteration()
            return 
        }


        HighLightNumber(currentPosition, myObj!) 
       // HighLightNumber(sortingPosition, myObj!) 


        // check current number against minimum with delay
        setTimeout(()=>{

            if (currentPosition < myObj?.ArrayToSort.length!  ) { 

                if (myObj?.ArrayToSort[currentPosition]! < myObj?.ArrayToSort[sortingPosition]!){


                    HighLightNumber(sortingPosition, myObj!, -1, "red" )

                    InsertNumber(sortingPosition, currentPosition, myObj!)

                    forceRerender() 

                    FinishIteration() 
                }

                else if (currentPosition === 0) {
                    HighLightNumber(sortingPosition, myObj!, -1, "red" )

                    InsertNumber(sortingPosition, currentPosition, myObj!)

                    forceRerender() 

                    FinishIteration()  
                }

                setTimeout(()=>{
                    // set new current position with delay
                    setCurrentPosition(pos => pos  - 1)

                }, 1000) 
            
            }
    
        },1000)
        
    },[currentPosition])


    // Set off insertion sort iteration
    const StartIteration = (i: number = 1) => {

        setIterating(true) 
        setCurrentPosition(i-1)

        if (sortingPosition === 1){
            HighLightNumber(sortingPosition, myObj!, -1, "magenta")  
        }
    }

    // --------------------
    // Next Iteration of the sort:
    const  NextStep = () => {

        StartIteration(sortingPosition)
        
    }
 


    return(
        <div className="content">  
        <div className="sort-array" id="sort-array">
            {myObj?.ArrayToSort.map (num => ( 
                <div key={num}> {
                    NumberComponent(num, `${num}`, false)
                } </div>  
            ))} 

        </div>

        <CustomButton disabled={iterating} onClick={NextStep}> Next </CustomButton> 
        </div>
    )

}