import React from "react";

export type InputsModel = {
  nameSpan: string;
  classNameGrid: string;
  mask?: string;
} & React.ComponentProps<"input">;
