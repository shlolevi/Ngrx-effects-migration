import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ShoppingService} from 'src/app/shopping.service';
import * as shoppingActions from '../actions/shopping.actions';
import {ShoppingItem} from '../models/shopping-item.model';
import {Injectable} from '@angular/core';

// ShoppingActionTypes,

@Injectable()
export class ShoppingEffects {

  loadShopping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shoppingActions.LoadShoping),
      mergeMap(
        () => {
          return this.shoppingService.getShoppingItems()
            .pipe(
              map((data: Array<ShoppingItem>) => {
                return shoppingActions.LoadShopingSuccess({payload: data});
              }),
              catchError((error: Error) => of(shoppingActions.LoadShopingFailer({payload: error})))
            );
        }
      ),
    )
  );


  addShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shoppingActions.deleteIte),
      mergeMap(
        (data) => this.shoppingService.deleteShoppingItem(data.payload)
          .pipe(
            map(() => shoppingActions.deleteItemSuccess({payload: data.payload})),
            catchError(error => of(shoppingActions.deleteItemFailer({payload: error})))
          )
      )
    )
  );

  deleteShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shoppingActions.deleteIte),
      mergeMap(
        (data) => this.shoppingService.deleteShoppingItem(data.payload)
          .pipe(
            map(() => shoppingActions.deleteItemSuccess({payload: data.payload})),
            catchError(error => of(shoppingActions.deleteItemFailer({payload: error})))
          )
      )
    )
  );


  // @Effect() loadShopping$ = this.actions$
  //   .pipe(
  //     ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
  //     mergeMap(
  //       () => this.shoppingService.getShoppingItems()
  //         .pipe(
  //           map(data => {
  //             return new LoadShoppingSuccessAction(data)
  //           }),
  //           catchError(error => of(new LoadShoppingFailureAction(error)))
  //         )
  //     ),
  //   )

  // @Effect() addShoppingItem$ = this.actions$
  //   .pipe(
  //     ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
  //     mergeMap(
  //       (data) => this.shoppingService.addShoppingItem(data.payload)
  //         .pipe(
  //           map(() => new AddItemSuccessAction(data.payload)),
  //           catchError(error => of(new AddItemFailureAction(error)))
  //         )
  //     )
  //   )

  // @Effect() deleteShoppingItem$ = this.actions$
  //   .pipe(
  //     ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
  //     mergeMap(
  //       (data) => this.shoppingService.deleteShoppingItem(data.payload)
  //         .pipe(
  //           map(() => new DeleteItemSuccessAction(data.payload)),
  //           catchError(error => of(new AddItemFailureAction(error)))
  //         )
  //     )
  //   )

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {
  }
}
