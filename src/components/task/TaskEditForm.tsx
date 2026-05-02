"use client";

import { useState } from "react";
import { Priority, Task } from "@defs/types";
import { COLUMNS, PRIORITIES } from "@defs/constants/task";

type Props = {
  task: Task;
  onCancel: () => void;
  onSave: (task: Task) => void;
};

export default function TaskEditForm({ task, onCancel, onSave }: Props) {
  const [title, setTitle] = useState(task.title);
  const [column, setColumn] = useState(task.column);
  const [priority, setPriority] = useState<Priority>(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [tags, setTags] = useState<string[]>(task.tags);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="p-5 space-y-4">
      <div>
        <label className="text-xs text-gray-400 mb-1 block">タイトル</label>
        <input
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">ステータス</label>
          <select
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
            value={column}
            onChange={(e) => setColumn(e.target.value)}
          >
            {COLUMNS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">優先度</label>
          <select
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            {PRIORITIES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="text-xs text-gray-400 mb-1 block">期日</label>
        <input
          type="date"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div>
        <label className="text-xs text-gray-400 mb-1 block">タグ</label>
        <div className="flex flex-wrap gap-1 border border-gray-200 rounded-lg px-3 py-2 min-h-[40px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-purple-50 text-purple-700"
            >
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="text-purple-400 hover:text-purple-600"
              >
                ✕
              </button>
            </span>
          ))}
          <input
            className="text-sm outline-none flex-1 min-w-[80px]"
            placeholder="+ タグを追加"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
          />
        </div>
      </div>
      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
        <button
          onClick={onCancel}
          className="text-sm text-gray-400 hover:text-gray-600"
        >
          キャンセル
        </button>
        <button
          onClick={() =>
            onSave({ ...task, title, column, priority, dueDate, tags })
          }
          className="text-sm px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
        >
          保存する
        </button>
      </div>
    </div>
  );
}
