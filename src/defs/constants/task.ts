import { Priority } from "@defs/types";

export const COLUMNS = ["Plan", "Do", "WIP", "Done"] as const;

export const PRIORITIES: Priority[] = ["高", "中", "低"];

export const PRIORITY_STYLE: Record<Priority, string> = {
  高: "bg-red-50 text-red-700",
  中: "bg-amber-50 text-amber-700",
  低: "bg-green-50 text-green-700",
};
