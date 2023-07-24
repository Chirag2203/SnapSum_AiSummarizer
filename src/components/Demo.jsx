import React, { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
import whatsappIcon from "../assets/whatsapp.png";
import sound from "../assets/sound.gif";
import mute from "../assets/mute.gif";
import axios from "axios";
import { motion } from "framer-motion";
import {
  fadeInAnimation,
  slideLeftAnimation,
  slideRightAnimation,
} from "./animation";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [sumcopy, setSumCopy] = useState("");

  // RTK lazy query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    if (existingArticle) return setArticle(existingArticle);

    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      // update state and local storage
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };
  const handleSumCopy = (copySum) => {
    setSumCopy(copySum);
    navigator.clipboard.writeText(copySum);
    setTimeout(() => setSumCopy(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  const handleDelete = (url) => {
    const updatedArticles = allArticles.filter((item) => item.url !== url);
    setAllArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
  };

  const createWhatsAppShareLink = () => {
    const text = `Check out this article summary: ${article.summary}`;
    const encodedText = encodeURIComponent(text);
    return `https://api.whatsapp.com/send?text=${encodedText}`;
  };

  // Function to handle sharing to WhatsApp
  const handleShareWhatsApp = () => {
    const shareLink = createWhatsAppShareLink();
    window.open(shareLink, "_blank");
  };

  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  useEffect(() => {
    // Function to fetch available languages
    const fetchLanguages = async () => {
      console.log("Fetching Languages...");

      const options = {
        method: "GET",
        url: "https://text-translator2.p.rapidapi.com/getLanguages",
        headers: {
          "X-RapidAPI-Key":
            "6d90c4ceefmsh2a38b0206a4488ep141773jsn534665224174",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        console.log("Fetched Languages:", response.data.data.languages);
        setLanguages(response.data.data.languages);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    // Call the fetchLanguages function when the component mounts
    fetchLanguages();
  }, []);

  // Function to handle language change
  const handleLanguageChange = (e) => {
    console.log("Selected Language:", e.target.value);
    setSelectedLanguage(e.target.value);
  };

  // Function to handle translation

  const handleTranslation = async () => {
    // let texTosum= text(article.summary);
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", "en");
    encodedParams.set("target_language", "fr");
    encodedParams.set("text", article.summary);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "6d90c4ceefmsh2a38b0206a4488ep141773jsn534665224174",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: encodedParams,
    };

    const translateResponse = await axios.request(options);
    try {
      // if (translateResponse && translateResponse.data && translateResponse.data.translations)
      {
        // Update the summary in the state with the translated text
        const translatedText = translateResponse.data.translations.text;

        setArticle((prevArticle) => ({
          ...prevArticle,
          summary: translatedText, // Update the 'summary' property with the translated text
        }));
      }
      // else {
      console.log(translateResponse);
      console.error("Translation response is missing or invalid.");
      // }
    } catch (error) {
      alert("Sorry, something went wrong. Please try again later.");
      console.error("Translation Error:", error);
      console.error("Response Data:", error?.response?.data); // Log the response data for additional information
      console.error("Request Config:", error?.config); // Log the request config for debugging
    }
  };




// Function to speak the translated text
const [isSpeaking, setIsSpeaking] = useState(false);
const speakText = (text) => {
 try{
  const speechSynthesis = window.speechSynthesis;

  //TTS is already speaking then stop it
  if (isSpeaking) {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  
  utterance.rate = 1; // Speech rate (0.1 to 10)
  utterance.pitch = 1; // Speech pitch (0 to 2)

  // Speak the text
  speechSynthesis.speak(utterance);
  setIsSpeaking(true);
 }
 catch(err){
  alert("Sorry, your browser does not support text to speech");
   console.log(err);
 }
};





  return (
    <motion.div {...fadeInAnimation}>
      <section className="mt-16 w-full h-screen max-w-xl ">
        {/* Search */}
        <div className="flex flex-col w-full gap-2 ">
          <form
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <img
              src={linkIcon}
              alt="link-icon"
              className="absolute left-0 my-2 ml-3 w-5"
            />

            <input
              type="url"
              placeholder="Paste the article link"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              onKeyDown={handleKeyDown}
              required
              className="url_input peer" // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
            />
            <button className="s-btn font-satoshi">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                ></path>
              </svg>
              <span>Search</span>
            </button>
          </form>

          {/* Browse History */}
          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto ">
            {allArticles.reverse().map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="link_card flex summary_box"
              >
                <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                  <img
                    src={copied === item.url ? tick : copy}
                    alt={copied === item.url ? "tick_icon" : "copy_icon"}
                    className="w-[40%] h-[40%] object-contain"
                  />
                </div>
                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                  {item.url}
                </p>

                {/* Button to delete the history*/}

                <button
                  class="tooltip del-btn w-10 h-10"
                  onClick={() => handleDelete(item.url)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    height="25"
                    width="25"
                  >
                    <path
                      fill="#2563eb"
                      d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Display Result */}
        <motion.div className="my-10 max-w-full flex items-center justify-center" {...slideLeftAnimation}>
          {isFetching ? (
            <img
              src={loader}
              alt="loader"
              className="w-20 h-20 object-contain"
            />
          ) : error ? (
            <p className="font-inter font-bold text-black text-center">
              Translation has been paused due to major ongoing development. You can explore other Features till then.
              <br />
              <span className="font-satoshi font-normal text-gray-700">
                {error?.data?.error}
              </span>
            </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3 ">
                <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                  Article <span className="blue_gradient">Summary</span>
                </h2>
                <div className="summary_box flex flex-col items-end justify-end">
                  {/* <p className='font-inter font-medium text-sm text-gray-700'> */}
                  {article.translatedSummary ? (
                    <p className="font-inter font-medium text-sm text-gray-700">
                      {article.translatedSummary}
                    </p>
                  ) : (
                    <p className="font-inter font-medium text-sm text-gray-700">
                      {article.summary}
                    </p>
                  )}
                  
                </div>


                <div className="flex  items-cneter justify-between summary_box ">
                    <div className="flex gap-2 items-ceneter  ">
                      {/* Display available languages drop down */}
                    <div className="flex justify-center items-center">
                      {/* <select
                  id="languages"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="w-32 bg-slate-500 border rounded-md mt-1"
                >
                  {languages.map((language) => (
                    <option key={language.language} value={language.language}>
                      {language.name}
                    </option>
                  ))}
                </select> */}
                      {languages.length > 0 ? ( // Conditionally render the select element when languages are available
                        <div className="flex items-center justify-center gap-2">
                          <label
                            htmlFor="languages"
                            className="font-satoshi font-bold text-gray-600"
                          >
                            {" "}
                          </label>
                          <span className="font-semibold font-satoshi">Select Language</span>
                          <select
                            id="languages"
                            value={selectedLanguage}
                            onChange={handleLanguageChange}
                            className="w-32 bg-blue-500 border rounded-md  text-white p-1"
                          >
                            {languages.map((language) => (
                              <option
                                className="bg-blue-200 text-black "
                                key={language.language}
                                value={language.language}
                              >
                                {language.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      ) : (
                        <div class="flex flex-col items-center justify-center m-2 mb-3 gap-3 font-satoshi  mr-3 ">
                          <span className="font-semibold">Select Language</span>
                          <div class="loader2"></div>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={handleTranslation}
                      className="py-1 px-2 border rounded-md bg-blue-500 text-white "
                    >
                      Translate
                    </button>
                    </div>
                    

                    <div className="flex items-center gap-3">
                      {/* copy button */}
                      <button onClick={() => speakText(article.summary)}>
                        <img  src={isSpeaking ? mute : sound} className="w-9 h-9 speaker mix-blend-multiply  " alt=""  />
                        {/* {isSpeaking ? 'Stop' : 'Listen '} */}
                      </button>

                    <button
                      className="w-8 h-8 bg-slate-200 flex items-center justify-center rounded-full "
                      onClick={() => handleSumCopy(article.summary)}
                    >
                      <img
                        src={sumcopy === article.summary ? tick : copy}
                        alt={
                          sumcopy === article.summary
                            ? "tick_icon"
                            : "copy_icon"
                        }
                        className="w-[50%] h-[50%] object-contain"
                      />
                    </button>
                    {/* Whatsapp button */}
                    <button className="w-9 h-9 " onClick={handleShareWhatsApp}>
                      <img src={whatsappIcon} alt="whatsapp_icon" />
                    </button>
                    </div>
                  </div>
                  <div id="translation-box" className="summary_box">
                          
                  </div>
              </div>
            )
          )}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Demo;
