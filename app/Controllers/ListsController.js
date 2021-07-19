import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

//Private
function _draw() {
  let template = ''
  let lists = ProxyState.lists
  lists.forEach(list => template += list.Template)
  document.getElementById('lists').innerHTML = template
}

//Public
export default class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', _draw)
    ProxyState.on('tasks', saveState)

    loadState()
  }

  addList() {
    event.preventDefault()
    let form = event.target
    let emptyList = {
      title: form.listname.value,
      color: form.colorPicker.value
    }
    listsService.addList(emptyList)
    form.reset()
    console.log(`addlist event ${emptyList}`)
  }

  destroy(id) {
    listsService.destroy(id)
  }

  addTask(Id) {
    event.preventDefault()
    let form = event.target
    let emptyTask = {
      listId: Id,
      title: form.taskAdd.value
    }
    listsService.addTask(emptyTask)
    form.reset()
  }

  removeTask(id) {
    if (confirm("Remove Task?")) {
      listsService.removeTask(id)
      console.log("task removed");
    } else {
      console.log("Task not removed!");
    }
  }

  toggleCheckbox(id) {
    listsService.toggleCheckbox(id)
    console.log('id')
  }

}
