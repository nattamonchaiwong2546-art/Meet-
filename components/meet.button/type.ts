import type { MouseEventHandler, ReactNode } from "react";

export type TopBarButtonProps = {
  buttonText: string | ReactNode;
  buttonOnClick?: MouseEventHandler<HTMLButtonElement>;
};