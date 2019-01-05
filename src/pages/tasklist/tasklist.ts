import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Task } from './task'
import { AngularFire } from "angularfire2";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.tasks = af.database.list('/tasks');
  }

  addItem() {
    let theNewTask: string = prompt("New Task");
    if(theNewTask != '') {
      this.tasks.push({title: theNewTask, status: 'open'});
    }
  }

  markAsDone(slidingItem: ItemSliding, task: Task) {
    this.tasks.update(task.$key, { status: 'done' });
    slidingItem.close();
  }

  removeTask(slidingItem: ItemSliding, task: Task) {
    this.tasks.remove(task.$key);
    slidingItem.close();
  }
}
