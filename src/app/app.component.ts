import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {v4 as uuid} from 'uuid';

import {AppState} from './store/models/app-state.model';
import {ShoppingItem} from './store/models/shopping-item.model';
// import {AddItemAction, DeleteItemAction, LoadShoppingAction} from './store/actions/shopping.actions';
import * as shoppingActions from './store/actions/shopping.actions';
import {selectAllItems, selectShoppingError, selectShoppingLoading} from './store/selectors/selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  shoppingItems: Observable<ShoppingItem[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  newShoppingItem: ShoppingItem = {id: '', name: ''};

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    // this.shoppingItems = this.store.select(store => store.shopping.list);
    // this.loading$ = this.store.select(store => store.shopping.loading);
    // this.error$ = this.store.select(store => store.shopping.error);

    this.shoppingItems = this.store.pipe(
      select(selectAllItems)
    );
    this.loading$ = this.store.pipe(
      select(selectShoppingLoading)
    );

    this.error$ = this.store.pipe(
      select(selectShoppingError)
    );
    // this.store.dispatch(new LoadShoppingAction());
    this.store.dispatch(shoppingActions.LoadShoping());
  }

  addItem() {
    if (this.newShoppingItem.name === '') {
      console.log('Item name is empty....');
      return;
    }
    this.newShoppingItem.id = uuid();

    // this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.store.dispatch(shoppingActions.AddItem({payload: this.newShoppingItem}));

    this.newShoppingItem = {id: '', name: ''};
  }

  deleteItem(id: string) {
    // this.store.dispatch(new DeleteItemAction(id));
    this.store.dispatch(shoppingActions.deleteIte({payload: id}));
  }

  removeAll() {
    this.store.dispatch(shoppingActions.deleteAll());
  }
}
