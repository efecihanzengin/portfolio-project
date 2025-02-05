import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import languagesData from "../data";
import { toast } from "react-toastify";

function LanguageChanger() {
  const { language, setLanguage, translate } = useLanguage();
  const changeLanguage = translate("changeLanguage");
  return (
    <>
      <button
        className="font-semibold"
        onClick={() => {
          if (language === "tr") {
            setLanguage("en");
          } else {
            setLanguage("tr");
          }
        }}
      >
        {language === "en" ? (
          <>
            <span className="text-[#E92577]">{changeLanguage}</span>
            <span className="text-[#777777]">` YE GEÇ</span>
          </>
        ) : (
          <>
            <span className="text-[#777777]">SWITCH TO</span>{" "}
            <span className="text-[#E92577]">{changeLanguage}</span>
          </>
        )}
      </button>
    </>
  );
}
export default LanguageChanger;
