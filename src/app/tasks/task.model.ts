
export class Task {
  public description: string;
  public priority: string;
  public dueDate: string;
  public done: boolean;

  constructor(desc: string, priority: string, dueDate: string, done: boolean) {
    this.description = desc;
    this.priority = priority;
    this.dueDate = dueDate;
    this.done = done;
  }
}
