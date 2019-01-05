import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { Task } from './task'

@Component({
  selector: 'page-home',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  tasks: Array<Task> = [];

  constructor(public navCtrl: NavController, public dialogs: Dialogs) {
    this.tasks = [
      {title: 'Milk', status: 'open'},
      {title: 'Eggs', status: 'open'},
      {title: 'Syrup', status: 'open'},
      {title: 'Pancake Mix', status: 'open'},
    ];
  }

  addItem() {
    // let theNewTask: string = prompt("New Task");
    // if(theNewTask != '') {
    //   this.tasks.push({title: theNewTask, status: 'open'});
    // }

    this.dialogs.prompt('Add a task', 'Ionic2Do', ['Ok', 'Cancel', ''], '').then(
      theResult => {
        if ((theResult.buttonIndex == 1) && (theResult.input1 !== '')) {
          this.tasks.push({title: theResult.input1, status: 'open'});
        }
      }
    )
  }

  markAsDone(slidingItem: ItemSliding, task: any) {
    task.status = "done";
    slidingItem.close();
  }

  removeTask(slidingItem: ItemSliding,task: any) {
    task.status = "removed";
    let index = this.tasks.indexOf(task);
    if(index > -1) {
      this.tasks.splice(index, 1);
    }
    slidingItem.close();
  }
}
