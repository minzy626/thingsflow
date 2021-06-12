import ListItem from "./ListItem";

export function ListDetail(props){
    const {item}=props;
    let content =item.body;
    let profileImg =item.user.avatar_url
    return <>
    <div style={{display:"inline-block"}}> 
       <img src={profileImg} alt="프로필사진" style={{height:"50px",width:"50px"}}/>
       <ListItem item={item}/>
    </div>
       <div>
           {content}
       </div>
</>}

export default ListDetail;
