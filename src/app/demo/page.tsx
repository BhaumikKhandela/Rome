"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";

export default function DemoPage() {
  const [res, setRes] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const handleBlocking = async () => {
    setLoading(true);
    const response = await fetch("/api/demo/blocking", { method: "POST" });
    if (response.ok) {
      console.log(response);
      setRes(response);
    }
    setLoading(false);
  };
  return (
    <div className="p-8 space-x-4">
      <Button onClick={handleBlocking} disabled={loading}>
        Blocking
      </Button>
      {loading ? <Spinner /> : <p>{JSON.stringify(res)}</p>}
    </div>
  );
}
