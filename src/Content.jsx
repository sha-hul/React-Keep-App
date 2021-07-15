import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import PlusOneIcon from '@material-ui/icons/PlusOne';
let Content=(props)=>{
// to show the title and item in the noted content
let[curValue,upValue]=useState({
    title:"",
    text:""
})
let inputEvent=(event)=>{
const{name,value}=event.target;
upValue((oldValue)=>{
    return {...oldValue,[name]:value}
})
}
// click to add the notedcontent
let addEvent=()=>{
    props.addnote(curValue);
    upValue(
        {
        title:"",
        text:""
    }
    )
}
// to show the textarea after click
let [expand,upexpand]=useState(false);
let showFull=()=>{
    upexpand(true);
}
//to close the card double click
let closeCard=()=>{
    upexpand(false);
}
    return(
        <>
        <Card  onDoubleClick={closeCard} className="content">
        {/* to show the given */}
       {expand? <input 
         type="text"
         placeholder="Title.." 
         value={curValue.title}
         name="title" 
         onChange={inputEvent}
         autoComplete="off"/>:null}<br/>
        <textarea
        onClick={showFull}
        //  style={{display:expand?"block":"none"}} 
         onChange={inputEvent}
         name="text" 
         value={curValue.text}
         rows="5" cols="30" 
         placeholder="write something.."></textarea>
        <br/>
        {expand?
        <Button 
        onClick={addEvent}
        style={{fontWeight:"bold",float:"right"}}
         className="btn">
         <PlusOneIcon className="plus_"/>
         </Button>:null}
        </Card>
        </>
    )
}

export default Content;