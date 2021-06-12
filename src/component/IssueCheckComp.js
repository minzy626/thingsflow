import React, { useEffect, useState } from 'react';
import { ListItem ,ListHeader} from '../Listpage';
import { getAngluarIssue} from '../Service/ApiService';

export function IssueCheckComp(){
    const [issueList, setIssueList] =useState([]);
    
    useEffect(()=>{
        getAngluarIssue().then(res => {
            setIssueList(res);
                })
            .catch(err =>console.log(err));
                },[])
    
return <>
    <ListHeader title="Angular / Angular-cli"/>
    {issueList.map((itm,idx)=><>{idx!==4?<ListItem item={itm}/>:<img src="https://placehold.it/500x100?text=ad" onClick={()=>window.open("https://thingsflow.com/ko/home")}></img>}</>)}
</>
};
export default IssueCheckComp;