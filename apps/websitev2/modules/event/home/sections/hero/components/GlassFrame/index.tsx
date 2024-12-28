"use client";

import cx from "clsx";
import classes from "./glassframe.module.css";

export function GlassFrame() {
  return <div className={cx(classes.root, classes.has_clip)}></div>;
}
