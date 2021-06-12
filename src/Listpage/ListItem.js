
export function ListItem(props){
    const {item}=props;
    let id =item.number;
    let title =item.title;
    let writer =item.user.login;
    let writerDt =item.updated_at;
    let comments =item.comments;
    return <>
        <div style={{display:"flex"}}>
            <div>
                <h4>#{id} {title}</h4>
                <span> 작성자: {writer}</span>
                <span> 작성일:  {writerDt}</span>
            </div>
            <div>
                <span>코멘트: {comments}</span>
            </div>
        </div>
</>}

export default ListItem;
