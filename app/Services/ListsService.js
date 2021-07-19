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
  toggleCheckbox(taskId) {
    console.log('toggling')
    let found = ProxyState.tasks.find(t => taskId == t.id)
    found.check = !found.check
    ProxyState.tasks = ProxyState.tasks
  }

}
export const listsService = new ListsService()