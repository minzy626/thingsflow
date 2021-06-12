import { useState } from "react";
import ListDetail from "./ListDetail";

export function ListItem(props){
    const {item}=props;
    const [isShow,setIsShow] =useState(false);
    const dateTypeChange =(date)=>{
        let yyyy =date.substr(0,4);
        let mm =date.substr(5,2);
        let dd =date.substr(8,2);
        return `${yyyy}년 ${mm}월 ${dd}일`
    }
    let id =item.number;
    let title =item.title.length>40? item.title.substr(0,50)+"...": item.title;
    let writer =item.user.login;
    let writerDt =dateTypeChange(item.updated_at);
    let comments =item.comments;

    const openDetail=()=>{
        setIsShow(!isShow);
    }
    return <>
    <div>
        <div style={{display:"flex"}} onClick={()=>{openDetail()}}>
            <div style={{width:"400px"}}>
                <h4 style={{float:"left"}}>#{id} {title}</h4>
                <div className="writerArea">
                    <span style={{float:"left"}}> 작성자: {writer} </span>
                    <span style={{float:"left"}}> 작성일:  {writerDt} </span>
                </div>
            </div>
        </div>
        <div  style={{float:"right",margin:"auto"}}>
            <span>코멘트: {comments}</span>
        </div>
    </div>
    {isShow?<ListDetail item={item}/>:null}
</>}

export default ListItem;
