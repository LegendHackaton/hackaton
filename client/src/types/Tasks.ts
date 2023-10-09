export type TaskStatusType = "Open" | "Process" | "Completed";

export interface TaskType {
  id: number;
  title: string;
  description: string;
  status: TaskStatusType;
}

export type TasksType = {
  [key in TaskStatusType]: TaskType[];
};
