import { Priority } from "@defs/types";
import { PRIORITY_STYLE } from "@defs/constants/task";

type Props = {
  title: string;
  priority: Priority;
  dueDate: string;
  tags: string[];
  onClick?: () => void;
};

export default function TaskCard({
  title,
  priority,
  dueDate,
  tags,
  onClick,
}: Props) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg p-3 mb-2 cursor-pointer hover:border-gray-300 transition-colors"
      onClick={onClick}
    >
      <p className="text-sm font-medium text-gray-900 mb-2">{title}</p>
      <div className="flex flex-wrap gap-1 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-purple-50 text-purple-700"
          >
            {tag}
          </span>
        ))}
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${PRIORITY_STYLE[priority]}`}
        >
          {priority}
        </span>
      </div>
      <p className="text-xs text-gray-400">{dueDate}</p>
    </div>
  );
}
