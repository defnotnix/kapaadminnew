"use client";

import { Burger, Popover } from "@mantine/core";

import { usePathname } from "next/navigation";
import { useWindowScroll } from "@mantine/hooks";
import { useEventContext } from "../event.context";

export function BurgerMenu() {
  const { state, dispatch } = useEventContext();
  const { navStatus } = state;
  const Pathname = usePathname();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Burger
        color={
          navStatus || scroll.y > 200
            ? "dark.9"
            : Pathname == "/celebrations"
              ? "gray.0"
              : ""
        }
        size="sm"
        opened={navStatus}
        onClick={() => {
          dispatch({
            type: "SET_NAV_STATUS",
            payload: !navStatus,
          });
        }}
      />
    </>
  );
}
