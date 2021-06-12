
export function ListItem(props){
    const {item}=props;

    return <>
        <div style={{display:"flex"}}>
            <h4>{item.title}</h4>
            <span> 작성자: {item.grade}</span>
            <span> 작성일:  {item.genre}</span>
            <div style={{display:"inline-grid"}}>
                <span>코멘트: {item.actor}</span>
            </div>
        </div>
</>}

export default ListItem;
