"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Menu = () => {
  const [open, setOpen] = useState<"open" | "closed">("closed");

  return (
    <>
      <button
        onClick={() => {
          if (open === "closed") {
            setOpen("open");
          } else {
            setOpen("closed");
          }
        }}
        className="flex flex-col items-center justify-center rounded-[10px] min-h-[50px] min-w-[50px] size-[50px] mr-0 min-[400px]:mr-[10px] min-[460px]:mr-[25px] bg-moon_darkblue py-1.5 px-2 gap-2"
      >
        <motion.span
          animate={open}
          variants={{
            open: { rotate: 45, y: 10, transition: { delay: 0.05 } },
            closed: { rotate: 0 },
          }}
          className="h-0.5 bg-moon_yellow w-full"
        />
        <motion.span
          animate={open}
          variants={{
            open: { opacity: 0, filter: "blur(3px)" },
            closed: {
              opacity: 1,
              transition: { delay: 0.05 },
              filter: "blur(0px)",
            },
          }}
          className="h-0.5 bg-moon_yellow w-full"
        />
        <motion.span
          animate={open}
          variants={{
            open: { rotate: -45, y: -10, transition: { delay: 0.05 } },
            closed: { rotate: 0 },
          }}
          className="h-0.5 bg-moon_yellow w-full"
        />
      </button>
      <AnimatePresence mode="popLayout">
        {open === "open" && (
          <motion.div
            animate={open}
            initial={{ opacity: 0, height: 0 }}
            variants={{
              open: { opacity: 1, height: window.innerHeight },
            }}
            exit={{ opacity: 0, height: 0, transition: { delay: 0.1 } }}
            transition={{ duration: 0.4 }}
            onClick={() => setOpen("closed")}
            className="fixed w-full bg-black/60 h-full top-[120px] right-0 z-40"
          >
            <motion.a
              initial={{ x: window.innerWidth }}
              animate={{ x: 10 }}
              exit={{ x: window.innerWidth }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
              className="absolute top-0 right-0 h-12 w-[300px] flex items-center pl-5 bg-moon_darkblue border border-moon_yellow z-50 rounded-bl-lg"
            >
              Home
            </motion.a>
            <motion.a
              initial={{ x: window.innerWidth }}
              animate={{ x: 10 }}
              exit={{ x: window.innerWidth }}
              transition={{
                duration: 0.8,
                delay: 0.05,
                type: "spring",
                bounce: 0.15,
              }}
              className="absolute top-[47px] right-0 h-12 w-[275px] flex items-center pl-5 bg-moon_darkblue border border-moon_yellow z-50 rounded-bl-lg"
            >
              Calendar
            </motion.a>
            <motion.a
              initial={{ x: window.innerWidth }}
              animate={{ x: 10 }}
              exit={{ x: window.innerWidth }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                bounce: 0.15,
              }}
              className="absolute top-[94px] right-0 h-12 w-[250px] flex items-center pl-5 bg-moon_darkblue border border-moon_yellow z-50 rounded-bl-lg"
            >
              Store Policies
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
