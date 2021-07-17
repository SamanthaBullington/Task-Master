import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

class ListsService {
  addList() {
    ProxyState.lists = [...ProxyState.lists, new List()]
  }
}
export const listsService = new ListsService();