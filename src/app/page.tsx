"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function Home() {
  const tasks = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);
  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() =>
          createProject({
            name: "New project",
          })
        }
      >
        Add New
      </Button>
      {tasks?.map((task) => (
        <div key={task._id} className="border rounded p-4 flex flex-col">
          <p>{task.name}</p>
          <p>{task.ownerId}</p>
        </div>
      ))}
    </div>
  );
}
