import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromShopping from '../reducers/shopping.reducer';
import {ShoppingState} from '../reducers/shopping.reducer';


export const selectShoppingState = createFeatureSelector<fromShopping.ShoppingState>('shopping');

export const selectItemIds = createSelector(
  selectShoppingState,
  fromShopping.selectItemIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);
export const selectItemEntities = createSelector(
  selectShoppingState,
  fromShopping.selectItemEntities
);
export const selectAllItems = createSelector(
  selectShoppingState,
  fromShopping.selectAllItems
);
export const selectItemTotal = createSelector(
  selectShoppingState,
  fromShopping.selectItemTotal
);

export const selectShoppingError = createSelector(
  selectShoppingState,
  (state: ShoppingState) => {
    return state.error;
  }
);

export const selectShoppingLoading = createSelector(
  selectShoppingState,
  (state: ShoppingState) => {
    return state.loading;
  }
);

// export const selectCurrentUserId = createSelector(
//   selectUserState,
//   fromShopping.getSelectedUserId
// );
//
// export const selectCurrentUser = createSelector(
//   selectUserEntities,
//   selectCurrentUserId,
//   (userEntities, userId) => userEntities[userId]
// );
