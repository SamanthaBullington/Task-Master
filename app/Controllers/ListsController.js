import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

//Private
function _draw() {
  let template = ''
  let lists = ProxyState.lists;
  lists.forEach(list => template += list.Template)
  document.getElementById('lists').innertext = template
}

//Public
export default class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', _draw)
    ProxyState.on('tasks', saveState)

    loadState()
    _draw()
  }

  addList() {
    event.preventDefault()
    let form = event.target
    let emptyList = {
      title: form.title.value
    }
    listsService.addList(emptyList)
    form.reset()
  }

  destroy(id) {
    listsService.destroy(id)
  }

  addTask(listId) {
    event.preventDefault()
    let form = event.target
    let emptyTask = {
      listId,
      name: form.task.value
    }
    listsService.addTask(emptyTask)
    form.reset()
  }

  removeTask(id) {
    listsService.removeTask(id)
  }

}
