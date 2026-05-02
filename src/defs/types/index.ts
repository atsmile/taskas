export type Priority = "高" | "中" | "低";

export type Task = {
  id: number;
  column: string;
  title: string;
  priority: Priority;
  dueDate: string;
  tags: string[];
};
