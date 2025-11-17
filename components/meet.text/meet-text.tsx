"use client";
import type { TopBarTitleProps } from "./type";
import "./meet-text.css"; 

export default function TopBarTitle({ title }: TopBarTitleProps) {
  return <div className="meet-text">{title}</div>;
}