import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  todos = [];
  isTaskLoading: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.isTaskLoading = true;
    setTimeout(() => {
      this.dataService.getUser().subscribe((res: any[]) => {
        this.isTaskLoading = false;
        console.log(res);
        this.todos = res;
      });
    }, 10000);
  }
}
