import React from "react";
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
let NotedContent=(props)=>{
    let onDelete=()=>{
      props.onSubmit(props.id)
    }
    return(
        <>
     <Card className="note">
    <h3>{props.title}</h3>
    <br/>
    <p style={{fontSize:"14px"}}>{props.text}</p>
    <DeleteIcon onClick={onDelete} className="delete_icon" style={{float:"right"}}/>
    </Card>
    </>
    )
}
export default NotedContent;