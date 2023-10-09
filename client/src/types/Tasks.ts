export type TaskStatusType = "Open" | "Process" | "Completed";

export interface TaskType {
  id: number;
  content: string;
  status: TaskStatusType;
}

export type TasksType = {
  [key in TaskStatusType]: TaskType[];
};
