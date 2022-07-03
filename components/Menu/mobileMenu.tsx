import { Menu, MenuButton } from "@reach/menu-button";
import { motion, useReducedMotion } from "framer-motion";

import { MobileMenuList } from "./mobileMenuList";

const variants = {
  open: { rotate: 45, y: 0 },
  closed: { rotate: 0, y: 0 },
};

export const MobileMenu = () => {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : {};
  return (
    <Menu>
      {({ isExpanded }) => {
        const state = isExpanded ? "open" : "closed";
        return (
          <>
            <MenuButton className="opacity-80 hover:opacity-100 text-bodyText focus:outline-none h-14 w-14 inline-flex items-center justify-center p-1 transition">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  animate={state}
                  variants={variants}
                  transition={transition}
                  x="6"
                  y="9"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={variants}
                  transition={transition}
                  x="6"
                  y="15"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={variants}
                  transition={transition}
                  x="6"
                  y="21"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </MenuButton>
            <MobileMenuList />
          </>
        );
      }}
    </Menu>
  );
};
