"use client";

import { useState } from "react";
import BoardColumn from "@components/board/BoardColumn";
import TaskCard from "@components/task/TaskCard";

const COLUMNS = ["Plan", "Do", "WIP", "Done"];

const SAMPLE_TASKS = [
  {
    id: 1,
    column: "Plan",
    title: "Supabaseスキーマ設計",
    priority: "中" as const,
    dueDate: "5/15",
    tags: ["インフラ"],
  },
  {
    id: 2,
    column: "Plan",
    title: "ブログセクション追加",
    priority: "低" as const,
    dueDate: "6/1",
    tags: ["機能追加"],
  },
  {
    id: 3,
    column: "Do",
    title: "タスクボード実装",
    priority: "高" as const,
    dueDate: "5/3",
    tags: ["機能追加"],
  },
  {
    id: 4,
    column: "WIP",
    title: "AWS EC2 STEP1 設定",
    priority: "高" as const,
    dueDate: "5/5",
    tags: ["インフラ"],
  },
  {
    id: 5,
    column: "Done",
    title: "nvm / .nvmrc 設定",
    priority: "低" as const,
    dueDate: "4/20",
    tags: ["インフラ"],
  },
];

type Task = (typeof SAMPLE_TASKS)[number];

export default function BoardView() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {COLUMNS.map((col) => (
          <BoardColumn key={col} title={col}>
            {SAMPLE_TASKS.filter((t) => t.column === col).map((task) => (
              <TaskCard
                key={task.id}
                {...task}
                onClick={() => setSelectedTask(task)}
              />
            ))}
          </BoardColumn>
        ))}
      </div>
      {selectedTask && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md mx-4 p-6">
            <p className="text-base font-medium mb-4">{selectedTask.title}</p>
            <button
              onClick={() => setSelectedTask(null)}
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </>
  );
}
