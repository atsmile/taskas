type Priority = "高" | "中" | "低";

type Task = {
  id: number;
  column: string;
  title: string;
  priority: Priority;
  dueDate: string;
  tags: string[];
};

type Props = {
  task: Task;
  onClose: () => void;
};

const priorityStyle: Record<Priority, string> = {
  高: "bg-red-50 text-red-700",
  中: "bg-amber-50 text-amber-700",
  低: "bg-green-50 text-green-700",
};

export default function TaskModal({ task, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md mx-4">
        <div className="flex items-start justify-between p-5 border-b border-gray-100">
          <p className="text-base font-medium text-gray-900 pr-4">
            {task.title}
          </p>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg leading-none"
          >
            ✕
          </button>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-[80px_1fr] gap-y-3 gap-x-3 text-sm mb-5">
            <span className="text-gray-400">ステータス</span>
            <span className="font-medium">{task.column}</span>
            <span className="text-gray-400">優先度</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium w-fit ${priorityStyle[task.priority]}`}
            >
              {task.priority}
            </span>
            <span className="text-gray-400">期日</span>
            <span>{task.dueDate}</span>
            <span className="text-gray-400">タグ</span>
            <div className="flex flex-wrap gap-1">
              {task.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-purple-50 text-purple-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-400 mb-1">内容</p>
          <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 leading-relaxed">
            内容はまだありません
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-4 border-t border-gray-100">
          <button className="text-sm text-red-400 hover:text-red-600">
            削除
          </button>
          <button className="text-sm px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
            編集する
          </button>
        </div>
      </div>
    </div>
  );
}
