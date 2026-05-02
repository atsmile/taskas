import { Task } from "@defs/types";

export const SAMPLE_TASKS: Task[] = [
  {
    id: 1,
    column: "Plan",
    title: "Supabaseスキーマ設計",
    priority: "中",
    dueDate: "5/15",
    tags: ["インフラ"],
  },
  {
    id: 2,
    column: "Plan",
    title: "ブログセクション追加",
    priority: "低",
    dueDate: "6/1",
    tags: ["機能追加"],
  },
  {
    id: 3,
    column: "Do",
    title: "タスクボード実装",
    priority: "高",
    dueDate: "5/3",
    tags: ["機能追加"],
  },
  {
    id: 4,
    column: "WIP",
    title: "AWS EC2 STEP1 設定",
    priority: "高",
    dueDate: "5/5",
    tags: ["インフラ"],
  },
  {
    id: 5,
    column: "Done",
    title: "nvm / .nvmrc 設定",
    priority: "低",
    dueDate: "4/20",
    tags: ["インフラ"],
  },
];
