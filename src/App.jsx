import React, { useState } from "react"; 
import Heading from "./Heading";
import Footer from "./Footer";
import Content from "./Content";
import NotedContent from "./NotedContent";
let App=()=>{
    let[setItem,upItem]=useState([])
    let addItem=(curValue)=>{
        upItem((oldValue)=>{
            return[...oldValue,curValue]
        })
    }
    let deletItem=(id)=>{
        upItem((oldValue)=>{
            return oldValue.filter((arrValue,index)=>{
                return index !== id;
            })
        })
    }
    return(
    <>
    <Heading/>
    <Content
     addnote={addItem}/><br/><br/>
    {/* <NotedContent/> */}
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {
        setItem.map((val,index)=>{
            return(
                <NotedContent
                    key={index}
                    id={index}
                    title={val.title}
                    text={val.text}
                    onSubmit={deletItem}
                />
            )
        })
    }
    </div>
    <Footer/>
    </>
    )
}
export default App;