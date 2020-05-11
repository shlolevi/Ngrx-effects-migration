import {createAction, props} from '@ngrx/store';
import {Action} from '@ngrx/store';
import {ShoppingItem} from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
  DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure'
}

export const LoadShoping = createAction(ShoppingActionTypes.LOAD_SHOPPING);
export const LoadShopingSuccess = createAction('[SHOPPING] Load Shopping Success', props<{ payload: Array<ShoppingItem> }>());
export const LoadShopingFailer = createAction('[SHOPPING] Load Shopping Failure', props<{ payload: Error}>());

export const AddItem = createAction('[SHOPPING] Add Item', props<{ payload: ShoppingItem }>());
export const AddItemSuccess = createAction('[SHOPPING] Add Item Success', props<{ payload: ShoppingItem }>());
export const AddItemFailer = createAction('[SHOPPING] Add Item Failure', props<{ payload: Error }>());


export const deleteIte = createAction('[SHOPPING] Delete Item', props<{ payload: string }>());
export const deleteItemSuccess = createAction('[SHOPPING] Delete Item Success', props<{ payload: string }>());
export const deleteItemFailer = createAction('[SHOPPING] Delete Item Failure', props<{ payload: Error }>());

export const deleteAll = createAction(('[shopping] - delete all'));

// export class LoadShoppingAction implements Action {
//   readonly type = ShoppingActionTypes.LOAD_SHOPPING;
// }
//
// export class LoadShoppingSuccessAction implements Action {
//   readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
//
//   constructor(public payload: Array<ShoppingItem>) {
//   }
//
// }
//
// export class LoadShoppingFailureAction implements Action {
//   readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;
//
//   constructor(public payload: string) {
//   }
// }
//
// export class AddItemAction implements Action {
//   readonly type = ShoppingActionTypes.ADD_ITEM;
//
//   constructor(public payload: ShoppingItem) {
//   }
// }
//
// export class AddItemSuccessAction implements Action {
//   readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
//
//   constructor(public payload: ShoppingItem) {
//   }
// }
//
// export class AddItemFailureAction implements Action {
//   readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
//
//   constructor(public payload: Error) {
//   }
// }

// export class DeleteItemAction implements Action {
//   readonly type = ShoppingActionTypes.DELETE_ITEM;
//
//   constructor(public payload: string) {
//   }
// }
//
// export class DeleteItemSuccessAction implements Action {
//   readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
//
//   constructor(public payload: string) {
//   }
// }
//
// export class DeleteItemFailureAction implements Action {
//   readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;
//
//   constructor(public payload: string) {
//   }
// }

// export type ShoppingAction = AddItemAction |
//   AddItemSuccessAction |
//   AddItemFailureAction |
//   DeleteItemAction |
//   DeleteItemSuccessAction |
//    DeleteItemFailureAction
  // Loadshop |
  // LoadShoppingFailureAction |
  // LoadShoppingSuccessAction
