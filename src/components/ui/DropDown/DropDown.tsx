import { IDropDownProps } from "@/components/ui/DropDown/DropDownTypes";
import { useFileStore } from "@/store/fileStore";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { RiMailFill } from "react-icons/ri";

const slideVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 120, opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

const DropDown: FC<IDropDownProps> = ({
  isOpen,
  subItem,
  title,
  setIsOpen,
  pathname,
}) => {
  const [isContactOpen, setIsContactOpen] = useState(true);

  const tabHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    useFileStore.getState().addFile({
      href: target.href,
      accessKey: target.accessKey,
    });
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <div
        className="p-4 text-1 text-nowrap text-Appearance-Slate-50 border-b border-Appearance-Slate-700 cursor-pointer flex justify-start items-center gap-3"
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaCaretDown className="text-1" />
        </motion.div>
        <h3>{title}</h3>
      </div>

      <AnimatePresence>
        {isOpen && subItem && subItem.length > 0 && (
          <motion.div
            key="subItems"
            className="overflow-hidden border-b border-Appearance-Slate-700"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col px-6 py-4">
              {subItem.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`${item.link === pathname && "text-Appearance-Slate-50"} flex items-center gap-3 text-1 text-Appearance-Slate-400 font-light py-2`}
                  onClick={tabHandler}
                  accessKey={item.title}
                >
                  {item.icon && <item.icon className={item.iconColor} />}
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="ps-4 py-4 text-1 text-nowrap text-Appearance-Slate-50 border-b border-Appearance-Slate-700 cursor-pointer flex justify-start items-center gap-3"
        onClick={() => setIsContactOpen(!isContactOpen)}
      >
        <motion.div
          animate={{ rotate: isContactOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaCaretDown className="text-1" />
        </motion.div>
        <h3>contacts</h3>
      </div>

      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            key="contacts"
            className="overflow-hidden border-b border-Appearance-Slate-700"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col px-6 py-4">
              <Link
                href="mailto:aliihooshangi@gmail.com"
                target="_blank"
                className="flex items-center gap-3 text-1 text-Appearance-Slate-400 font-light py-2"
              >
                <RiMailFill />
                aliihooshangi
              </Link>
              <Link
                href="tel:+989115447316"
                target="_blank"
                className="flex items-center gap-3 text-1 text-Appearance-Slate-400 font-light py-2"
              >
                <MdPhoneIphone />
                +989115447316
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
