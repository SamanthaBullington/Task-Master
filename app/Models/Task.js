
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ title, listId, id = generateId() }) {
    this.id = id
    this.listId = listId
    this.title = title
  }


  get Template() {
    return `<li>${this.title} 
    <span class="action" onclick="app.listsController.removeTask('${this.id}')">x</span></li>`
  }
}