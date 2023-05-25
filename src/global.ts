export const HighlightWithTime = (elem: HTMLElement, time:number, prevColor:string = "red" ,color:string = "chartreuse") => {
    
    elem.style.backgroundColor = color;
    setTimeout(()=>{
        StopHighLight(elem, prevColor)
    }, time* 1000)
}

export const StopHighLight = (elem: HTMLElement, prevColor:string) => {
    elem.style.backgroundColor = prevColor;  
}

export const Highlight = (elem: HTMLElement ,color:string = "chartreuse") => {
    
    elem.style.backgroundColor = color;

} 