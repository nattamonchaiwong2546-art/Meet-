"use client"; 

import TopBarButton from "@/components/meet.button/meet-button";
import TopBarTitle from "@/components/meet.text/meet-text"
import type { TopBarProps } from "./type";
import "./topbar.css"

export default function Meet({ textProps, buttonProps }: TopBarProps) {
  return (
    <div className="topbar-container">
    <div className="topbar-container-inner">
      <TopBarTitle {...textProps} />
      <TopBarButton {...buttonProps} />
    </div>
    </div>
  );
}