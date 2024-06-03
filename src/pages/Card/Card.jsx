import React from 'react';
import './Card.css'
import { useSelector, useDispatch } from 'react-redux';
import { VscChromeClose } from "react-icons/vsc";
import {toggleCardItem1,toggleCardItem2,toggleCardItem3} from '../../componets/lip/actions/action'



const Card = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cardReducer.value);
    let links = state?.map((inx) =>(
        <>
        <tr key={inx.id}>
          <td onClick={() =>dispatch(toggleCardItem3(inx))}><VscChromeClose style={{fontSize:'20px',marginLeft:'15%',color:'red'}} /></td>
        <td >
                <div className="tr">
                <div className="tr_th">
               <div className="alt">
               <img src={inx.images} alt="img" />
               </div>
                    </div>
                    <div className="tr_th">  
                    <h1>{inx.title}</h1>
                    </div>
                </div>
                </td>
            <td><h1>${inx.price * inx.quantity}</h1></td>
            <td>
              <div className="span">
              <div className="span_all">
                  <button onClick={() =>dispatch(toggleCardItem2(inx))}>-</button>
                </div>
                <div className="span_all">
                <span>{inx.quantity}</span>
                </div>
                <div className="span_all">
                  <button  onClick={() =>dispatch(toggleCardItem1(inx))} >+</button>
                </div>
              </div>
            </td>
            <td> <h1>${inx.price}</h1></td>
           
            </tr>
        </> 
      ))


    
    return (
        <div>
           <div className="aj container">
<table >
  <tr>
    <th>Delet</th>
    <th>PRODUCT</th>
    <th>PRICE</th>
    <th>QTY</th>
    <th>UNIT PRICE</th>

  </tr>
{links}

</table>
</div>
        </div>
    );
}

export default Card;
