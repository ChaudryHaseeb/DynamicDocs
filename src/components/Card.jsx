import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ Data,refernce }) => {
  <React />;
  return (
    <motion.div drag dragConstraints={refernce} whileDrag={{scale:1.2}} dragElastic={.1} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="relative w-40 h-52 rounded-3xl bg-zinc-400 p-3 overflow-hidden">
      <FaRegFileAlt />
      <p className="leading-tight text-sm font-semibold mt-3">{Data.desc}.</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-2 mx-3 mb-1">
          <h5>{Data.id.file}</h5>
          <span className="bg-zinc-600 rounded-full flex items-center justify-center w-6 h-6">
            {Data.id.close ? (
              <IoIosCloseCircle />
            ) : (
              <FiDownload size=".8em" color="white" />
            )}
          </span>
        </div>
        {Data.isOpen && (
          <div
            className={`tag w-full py-2 ${
              Data.color ? "bg-yellow-400" : "bg-sky-800"
            }  flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{Data.download}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
