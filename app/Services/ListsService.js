import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";

class ListsService {
  addList(emptyList) {
    ProxyState.lists = [...ProxyState.lists, new List(emptyList)]
  }

  addTask(emptyTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(emptyTask)]
  }

  destroy(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id)
  }
  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }
  toggleCheckbox(id) {
    console.log('toggling')
    // if ()
    // let mytask = ProxyState.tasks.find(task => task.id == id)
    // mytask.box = !mytask.box
    // ProxyState.tasks = [...ProxyState.tasks.filter(task => task.id != id), mytask]
  }

}
export const listsService = new ListsService()