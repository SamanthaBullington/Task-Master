import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ title, listId, id = generateId() }) {
    this.box = false
    this.id = id
    this.listId = listId
    this.title = title
  }


  get Template() {
    return `<li class= "taskCard"><label for="c-heckbox"><div onclick="app.listsController.toggleCheckbox('${this.id}')"><input type="checkbox" class ="m-2">${this.title} 
    <span input="checkbox"class="fa fa-times action" onclick="app.listsController.removeTask('${this.id}')"></span></label></div></li>`
  }
}