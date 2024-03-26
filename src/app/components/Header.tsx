"use client";
import { ReactNode } from "react";



type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="max-w-4xl mx-auto py-12 px-6 ">{children}</div>;
}
