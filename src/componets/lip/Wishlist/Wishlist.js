import { WISHLIST } from '../actions/action';
import { toast } from 'react-toastify';

const initialState  = []
const add = (state, action) =>{
  let index = state.findIndex((i) => i.id === action.payload.id);
  let result = state;
  if (index < 0) {
    result = [...state, action.payload];
  } else {
    result = state.filter((i) => i.id !== action.payload.id);
  }
  localStorage.setItem("wishlist", JSON.stringify(result));
  confirm('Like qushildi')
  return result;

}
export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case WISHLIST:
        return  add(state, action);
       
    default:
      return state;
  }
};
