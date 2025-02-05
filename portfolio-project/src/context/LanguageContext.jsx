import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  var lang = navigator.language || navigator.userLanguage;
  if (lang.includes("tr")) {
    lang = "en";
  } else {
    lang = "tr";
  }
};
