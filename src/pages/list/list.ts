export class ListItem {

  public taskId: string;
  public taskName: string;
  public taskDescription: string;
  public startDateTime: string;
  public endDateTime: string;
  public comments: string;
  public taskStatus: string;

  constructor(
    taskId: string = '',
    taskName: string = '',
    taskDescription: string = '',
    startDateTime: string = '',
    endDateTime: string = '',
    comments: string = '',
    taskStatus: string = '') {
      this.taskId = taskId;
      this.taskName = taskName;
      this.taskDescription = taskDescription;
      this.startDateTime = startDateTime;
      this.endDateTime = endDateTime;
      this.comments =  comments;
      this.taskStatus = taskStatus;
  }
}
