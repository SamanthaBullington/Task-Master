import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({ title, color, id = generateId() }) {
    this.color = color
    this.id = id
    this.title = title
  }

  get Template() {
    return `
    <div class="col-4 m-3 taskCard">
      <div class="rounded shadow-light bg-light">
        <div class="d-flex justify-content-around align-items-center rounded-top text-light text-center p-3" style="background-color:${this.color}">
            <h1><b>${this.title}</b></h1>
            <i class="fa fa-trash-o action" title="delete list" onclick="app.listsController.destroy('${this.id}')"></i>
        </div>
        
        <div class="p-2 ">
            <p class="taskCard ">
            <ul class="lighten-50 p-2">
                ${this.MyTasks}
            </ul>
            </p>
        </div>
        <div class= "p-2">
        <form onsubmit="app.listsController.addTask('${this.id}')">
          <input type="text" name="taskAdd" placeholder="Task..." required required minlength="3" maxlength="50">
          <button type="submit" class="btn btnEdit">Add task +</button>
        </form>
        </div>
      </div>
    </div>
    </div>`
  }

  get MyTasks() {
    let template = ''
    let tasksTotal = ''
    let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
    tasks.forEach(t => {
      template += t.Template
    })
    // template += `<li>'To-do:'${tasksTotal}}</li>`
    // if (!template) {
    //   template += "No tasks"
    // }
    return template
  }

}