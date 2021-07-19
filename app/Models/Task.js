import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ title, listId, check, id = generateId() }) {
    this.box = false
    this.id = id
    this.listId = listId
    this.title = title
    this.check = check || false
  }


  get Template() {
    return /*html*/`<li class= "taskCard"><label for="checkbox"><div onclick="app.listsController.toggleCheckbox('${this.id}')"><input type="checkbox" value="" ${this.check ? "checked" : ""} class="m-2">${this.title} 
    <span input="checkbox" class="fa fa-times action" onclick="app.listsController.removeTask('${this.id}')"></span></label></div></li>`
  }
}