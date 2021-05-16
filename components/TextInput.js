import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const TextInput = ({
  label = "label",
  error,
  placeholder,
  onChange,
  onBlur,
  value,
  type = "text",
}) => {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(label.toLowerCase().split(" ").join("_"));
  }, []);

  return (
    <div className="w-full h-28">
      <label
        htmlFor={id}
        className="block text-xs md:text-sm font-medium text-gray-200"
      >
        {label}
      </label>
      <motion.input
        onChange={onChange}
        onBlur={() => onBlur(id)}
        placeholder={type === "tel" ? "+94#########" : placeholder}
        animate={
          error && {
            x: [0, 3, 0, -3, 0, 3, 0, -3, 0, 3, 0, -3, 0, 3, 0, -3],
          }
        }
        transition={{ duration: 0.5 }}
        type={type}
        name={id}
        value={value}
        id={id}
        autoComplete={id}
        className={`${
          error
            ? "border-red-600 focus:border-red-600"
            : "border-gray-300 focus:border-gray-600"
        } my-2 px-3 py-2 block w-full text-gray-300 outline-none border bg-transparent focus:border-4 text-xs sm:text-sm rounded-md`}
      />

      <AnimatePresence>
        {error && (
          <motion.h3
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: [0, 3, 0, -3, 0, 3, 0, -3, 0, 3, 0, -3, 0, 3, 0, -3],
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, opacity: 0 }}
            className="text-sm text-red-600"
          >
            {error}
          </motion.h3>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextInput;
