import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

export default function BoardColumn({ title, children }: Props) {
  return (
    <div className="bg-gray-100 rounded-lg p-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {title}
        </span>
      </div>
      {children}
      <button className="w-full py-2 text-xs text-gray-400 border border-dashed border-gray-300 rounded-lg hover:bg-white hover:text-gray-500 transition-colors">
        + タスクを追加
      </button>
    </div>
  );
}
