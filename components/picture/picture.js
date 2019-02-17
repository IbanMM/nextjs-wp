import "./picture.scss"
import fetch from 'isomorphic-unfetch';

const Picture = (props) => (
  
 <div className="img-res">
    <img src={props.media.sizes[props.size].source_url} />
 </div> 

)

export default Picture