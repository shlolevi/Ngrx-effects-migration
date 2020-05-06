import * as ShoppingActionTypes from '../actions/shopping.actions';
import {ShoppingItem} from '../models/shopping-item.model';
import {Action, createReducer, on, State} from '@ngrx/store';
import * as shoppingActions from '../actions/shopping.actions';

export interface ShoppingState {
  list: ShoppingItem[];
  loading: boolean;
  error: Error;
}


const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
};

export const ShoppingReducer = createReducer(
  initialState,
  on(shoppingActions.LoadShoping, shoppingActions.AddItem, shoppingActions.deleteIte,
    state => ({
      ...state,
      loading: true
    })
  ),
  on(shoppingActions.LoadShopingSuccess, (state, {payload}) => ({
      ...state,
      list: payload,
      loading: false
    })
  ),
  on(shoppingActions.LoadShopingFailer, (state, {payload}) => ({
      ...state,
      error: payload
    })
  ),
  // on(shoppingActions.AddItem, (state, {payload}) => ({
  //     ...state,
  //     loading: true
  //   })
  // ),
  on(shoppingActions.AddItemSuccess, (state, {payload}) => ({
      ...state,
      list: [...state.list, payload],
      loading: false
    })
  ),
  on(shoppingActions.AddItemFailer, (state, {payload}) => ({
      ...state,
      error: payload,
      loading: false
    })
  ),
  // on(shoppingActions.deleteIte, (state, {payload}) => ({
  //     ...state,
  //     loading: true
  //   })
  // ),
  on(shoppingActions.deleteItemSuccess, (state, {payload}) => ({
      ...state,
      list: state.list.filter(item => item.id !== payload),
      loading: false
    })
  ),
  on(shoppingActions.deleteItemFailer, (state, {payload}) => ({
      ...state,
      error: payload,
      loading: false
    })
  )
  )
;

export function reducer(state: ShoppingState | undefined, action: Action) {
  return ShoppingReducer(state, action);
}

// export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction) {
//   switch (action.type) {
//     case ShoppingActionTypes.LoadShoping:
//       return {
//         ...state,
//         loading: true
//       }
//     case ShoppingActionTypes.LoadShopingSuccess:
//       return {
//         ...state,
//         list: action.payload,
//         loading: false
//       }
//
//     case ShoppingActionTypes.LOAD_SHOPPING_FAILURE:
//       return {
//         ...state,
//         error: action.payload
//       }
//
//     case ShoppingActionTypes.ADD_ITEM:
//       return {
//         ...state,
//         loading: true
//       }
//     case ShoppingActionTypes.ADD_ITEM_SUCCESS:
//       return {
//         ...state,
//         list: [...state.list, action.payload],
//         loading: false
//       };
//     case ShoppingActionTypes.ADD_ITEM_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//         loading: false
//       };
//     case ShoppingActionTypes.DELETE_ITEM:
//       return {
//         ...state,
//         loading: true
//       };
//     case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
//       return {
//         ...state,
//         list: state.list.filter(item => item.id !== action.payload),
//         loading: false
//       }
//     case ShoppingActionTypes.DELETE_ITEM_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//         loading: false
//       };
//     default:
//       return state;
//   }
// }
