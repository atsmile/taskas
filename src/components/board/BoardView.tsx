"use client";

import { useState } from "react";
import { Task } from "@defs/types";
import { COLUMNS } from "@defs/constants/task";
import BoardColumn from "@components/board/BoardColumn";
import TaskCard from "@components/task/TaskCard";
import TaskModal from "@components/task/TaskModal";
import { SAMPLE_TASKS } from "@data/tasks";

export default function BoardView() {
  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleSave = (updated: Task) => {
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
    setSelectedTask(updated);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {COLUMNS.map((col) => (
          <BoardColumn key={col} title={col}>
            {tasks
              .filter((t) => t.column === col)
              .map((task) => (
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
        <TaskModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSave={handleSave}
        />
      )}
    </>
  );
}
