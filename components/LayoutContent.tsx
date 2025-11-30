"use client";

import { ReactNode } from "react";
import { useLoading } from "./LoadingContext";

export default function LayoutContent({ children }: { children: ReactNode }) {
  const { isLoading } = useLoading();

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
}
