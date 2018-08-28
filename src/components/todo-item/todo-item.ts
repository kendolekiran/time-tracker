export class TodoItem {

  public taskId: string;
  public taskDescription: string;
  public completeBy: string;

  constructor(taskId: string = '', taskDescription: string = '', completeBy: string = '') {
    this.taskId = taskId;
    this.taskDescription = taskDescription;
    this.completeBy = completeBy;
  }
}
