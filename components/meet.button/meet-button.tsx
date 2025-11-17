"use client";

import type { TopBarButtonProps } from "./type";
import "./meet-button.css";

export default function TopBarButton({ buttonText, buttonOnClick }: TopBarButtonProps) {
  return (
    <button
      onClick={buttonOnClick}
      className="meet-button"
    >
      <span>+</span>
      {buttonText}
    </button>
  );
}