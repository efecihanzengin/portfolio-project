import React, { createContext, useState, useContext, useEffect } from 'react';
import languagesData from '../data';
import axios from 'axios';
import { toast } from 'react-toastify';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  var lang = navigator.language || navigator.userLanguage;
  if(lang.includes("tr")){
    lang="en"
  }
  else{
    lang="tr"
  }
  const [language, setLanguage] = useState(lang);
  const [translations,setTranslations]=useState({...languagesData});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.post('https://reqres.in/api/workintech', languagesData[language]);
        setTranslations(response.data);
        if(!loading){
          if(language==="tr"){
            toast.success("Dil değişti.")
          }else{
            toast.success("Language changed.")
          }
        }       
      } catch (error) {
        console.error('Error fetching translations:', error);
        toast.error(error)
      } finally {
        setLoading(false);
        if(language==="tr"){
          toast.success("Sayfa yüklendi!")
        }
        else{
          toast.success("Page loaded!")
        }
      }
    };
    fetchTranslations();
  }, [language]);
  
  if (loading) {
    return <h1 className='text-sky-800 font-semibold flex  text-center justify-self-center place-self-center'>LOADİNG.....</h1>;
  }
  

  const translate = (key) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};
