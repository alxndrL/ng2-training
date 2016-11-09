import {Item} from "./item";
import {Injectable} from "@angular/core";


@Injectable()
export class ListService {
    private _items: Item[];

    constructor() {
    this._items = [new Item ('learn ts'), new Item ('learn angular')];
    }

    get items() {
    return this._items;
    }

    public addItem (title: string) {
      this._items.push(new Item(title));
    }

    public removeItem(item: Item) {
      const  index = this._items.indexOf(item);
      this._items.splice(index, 1);
    }
}
