export function ListHeader(props){
    const {title}=props;                  //props로 영화랑 타입받음
    return <>
        <div style={{display:"flex"}}>
           {title}
        </div>
</>}

export default ListHeader;