"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState<"open" | "closed">("closed");
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setPageHeight(document.documentElement.offsetHeight + 200);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          if (menuOpen === "closed") {
            setMenuOpen("open");
          } else {
            setMenuOpen("closed");
          }
        }}
        className="flex flex-col items-center justify-center rounded-[10px] min-h-[50px] min-w-[50px] size-[50px] mr-0 min-[400px]:mr-[10px] min-[460px]:mr-[25px] bg-moon_darkblue py-1.5 px-2 gap-2"
      >
        <motion.span
          animate={menuOpen}
          variants={{
            open: { rotate: 45, y: 10, transition: { delay: 0.05 } },
            closed: { rotate: 0 },
          }}
          className="h-0.5 bg-moon_yellow w-full"
        />
        <motion.span
          animate={menuOpen}
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
          animate={menuOpen}
          variants={{
            open: { rotate: -45, y: -10, transition: { delay: 0.05 } },
            closed: { rotate: 0 },
          }}
          className="h-0.5 bg-moon_yellow w-full"
        />
      </button>
      <AnimatePresence mode="popLayout">
        {menuOpen === "open" && (
          <motion.div
            animate={menuOpen}
            initial={{ opacity: 0, height: 0 }}
            variants={{
              open: { opacity: 1, height: pageHeight },
            }}
            exit={{ opacity: 0, height: 0, transition: { delay: 0.1 } }}
            transition={{ duration: 0.4 }}
            onClick={() => setMenuOpen("closed")}
            className="absolute w-full bg-black/60 h-full top-[120px] right-0"
          >
            <motion.a
              initial={{ x: window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: window.innerWidth }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
              href="/"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 h-[65px] w-[300px] flex items-center pl-5 bg-moon_darkblue border border-moon_yellow z-50 rounded-bl-lg text-white border-r-0"
            >
              Home
            </motion.a>
            <motion.a
              initial={{ x: window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: window.innerWidth }}
              transition={{
                duration: 0.8,
                delay: 0.05,
                type: "spring",
                bounce: 0.1,
              }}
              href="/calendar"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-[64px] right-0 h-[65px] w-[275px] flex items-center pl-5 bg-moon_darkblue border border-moon_yellow z-50 rounded-bl-lg text-white border-r-0"
            >
              Calendar
            </motion.a>
            <motion.a
              initial={{ x: window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: window.innerWidth }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                bounce: 0.1,
              }}
              href="/shop-policies"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-[128px] right-0 h-[65px] w-[250px] flex items-center pl-5 bg-moon_darkblue border border-moon_yellow z-50 rounded-bl-lg text-white border-r-0"
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
