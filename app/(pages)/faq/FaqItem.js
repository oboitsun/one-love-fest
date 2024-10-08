"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import styles from "./faq-item.module.scss";
export default function FaqItem({ question, children, open, handleOpen }) {
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);

  useEffect(() => {
    setHeightState(!open ? "0px" : `${content.current.scrollHeight}px`);
  }, [open]);
  return (
    <div onClick={handleOpen} className={`${styles.row} ${open ? styles.open : ""} `}>
      <div className={styles.question}>
        {question}
        <div className="w-8 h-8 bg-mustard justify-center items-center flex flex-shrink-0 rounded-md">
          <ChevronDownIcon
            className={`${!open ? "rotate-0" : "rotate-180"} w-5 transition-all text-white`}
          />
        </div>
      </div>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className={styles.answer}>
        {children}
      </div>
    </div>
  );
}
