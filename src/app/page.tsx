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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-xl font-medium">My board</h1>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {COLUMNS.map((col) => (
          <BoardColumn key={col} title={col}>
            {SAMPLE_TASKS.filter((t) => t.column === col).map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </BoardColumn>
        ))}
      </div>
    </main>
  );
}
