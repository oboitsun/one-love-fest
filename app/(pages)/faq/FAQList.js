"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import { useState } from "react";
import FaqItem from "./FaqItem";
const options = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node, children) => {
      const transformedChildren = documentToReactComponents(node, {
        renderMark: options.renderMark,
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      });
      return <li>{transformedChildren}</li>;
    },
  },
};

export default function FAQList({ list }) {
  const [openId, setOpenId] = useState(1);
  const handleOpen = (id) => {
    if (id !== openId) {
      setOpenId(id);
      return;
    }
    setOpenId(0);
  };
  return (
    <motion.div
      key="faq"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col lg:h-full lg:flex-grow  bg-white border-2 border-gray-400/50 rounded-10 p-4 2xl:p-8 ">
      {list &&
        list
          ?.sort((a, b) => a.fields.order - b.fields.order)
          .map(({ fields }) => (
            <FaqItem
              key={fields.id}
              question={fields.question}
              handleOpen={() => {
                handleOpen(fields.order);
              }}
              open={openId === fields.order}>
              {documentToReactComponents(fields.answer, options)}
            </FaqItem>
          ))}
    </motion.div>
  );
}
