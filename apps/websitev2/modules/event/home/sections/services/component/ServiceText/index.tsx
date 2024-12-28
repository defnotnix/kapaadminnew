"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mantine/core";

export const ServiceText = ({
  id,
  text = "Service Text",
}: {
  id: string;
  text: string;
}) => {
  return (
    <motion.div
      id={id}
      className="event-header text-capitals"
      style={{
        display: "inline-block",
        overflow: "hidden",
        height: "4rem",
      }}
    >
      {text}
    </motion.div>
  );
};
