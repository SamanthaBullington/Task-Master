import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({ title, id = generateId() }) {
    this.id = id
    this.title = title
    // this.form = form
  }

  get Template() {
    return `
    <div class="col-4 mt-3">
      <div class="bg-dark rounded shadow-light">
        <div class="d-flex justify-content-around align-items-center rounded-top text-light text-center p-3">
            <h3>${this.title.toUpperCase()}</h3>
            <i class="fa fa-trash action text-danger" title="delete list" onclick="app.ListsController.destroy('${this.id}')"></i>
        </div>
        <div class="p-2">
            <p><b>Tasks: </b></p>
            <ul class="bg-gray lighten-40 p-2 pl-4">
                <li>${this.form}</li>
            </ul>
        </div>
        <div class="p-2 ">
            <p><b>Tasks: </b></p>
            <ul class="bg-gray lighten-40 p-2 pl-4">
                ${this.MyTasks}
            </ul>
        </div>
        <form onsubmit="app.ListsController.addTask('${this.id}')"> 
          <input type="text" name="task" placeholder="Task..." required>
          <button type="submit" class="btn btn-outline-success">Add task+</button>
        </form>
      </div>
    </div>`
  }

  get MyTasks() {
    let template = ''
    let tasksTotal = 0
    let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
    tasks.forEach(t => {
      template += t.Template
    })
    template += `<li>'To-do:'${tasksTotal}</li>`
    if (!template) {
      template += "No tasks"
    }
    return template
  }

}