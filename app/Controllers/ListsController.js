import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

//Private
// function _draw() {
//   let lists = ProxyState.lists;
//   let template = ''
//   lists.forEach(v => template += v.Template)
//   document.getElementById("app").innerHTML = /*html*/`
//   <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
//   <div className="card-columns values">
//       ${template}
//   </div>
//   `
// }

//Public
export default class ListsController {
  constructor() {
    ProxyState.on("lists", _draw);
    _draw()
  }

  addList() {
    listsService.addList()
  }

}
