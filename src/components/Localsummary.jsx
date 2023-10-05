import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleActions from "./ArticleActions";
import { motion } from "framer-motion";
import { fadeInAnimation, fadeOutAnimation, slideLeftAnimation } from "./animation";
import PDFDownloadButton from '../Buttons/PDFDownloadButton'; 


const Localsummary = () => {
  const [textInput, setTextInput] = useState("");
  const [Lsummary, setLsummary] = useState("");
  const [summaryParagraph, setSummaryParagraph] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summarySize, setSummarySize] = useState("");
  //to show the loader when api has been called
  const [apiAttempted, setApiAttempted] = useState(false);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };
  const handleSummarySize = (event) => {
    setSummarySize(event.target.value);
  };

  const handleSummarizeClick = async () => {
    setApiAttempted(true);
    setLoading(true); // Show loading state while fetching data
    // console.log(textInput)
    const options = {
      method: "POST",
      url: "https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "6d90c4ceefmsh2a38b0206a4488ep141773jsn534665224174",
        "X-RapidAPI-Host": "text-analysis12.p.rapidapi.com",
      },
      data: {
        language: "english", //default source language
        summary_percent: summarySize,
        text: textInput,
      },
    };

    try {
      console.log("Fetching summary...");
      const response = await axios.request(options);
      const ans = response.data.summary;
      setLsummary(ans);
      console.log(response.data.msg);
      setLoading(false); // Hide loading state after fetching data
    } catch (error) {
      alert(
        "Error fetching summary, either your text is invalid or our serveres are down. Please try again later."
      );
      console.error("Error fetching summary:", error);
      setLoading(false); // Hide loading state if there's an error
    }
  };

  useEffect(() => {
    // When Lsummary changes, update the div with id "sum-result"
    const sumResultDiv = document.getElementById("sum-result");
    if (sumResultDiv) {
      if (loading) {
        sumResultDiv.innerHTML = '<div class="loader2"></div>'; // Show the loader
      } else {
        // Show the summary when loading is false and Lsummary is available
        sumResultDiv.innerHTML = Lsummary
          ? Lsummary
          : "No summary found. Make sure to select correct size and text.";
      }
    }
  }, [loading, Lsummary]);



  return (
    <motion.div className="w-full h-screen  sm:w-2/3" {...fadeInAnimation}>
      <span className="text-center block blue_gradient font-poppins text-3xl p-3">
        Summarize Any Text
      </span>
      <span className="text-center block _gradient font-poppins text-xl p-3 indigo_gradient  font-semibold">
        Paste your text below and select Summary size
      </span>
      {/* text input  */}
      <textarea
        placeholder="paste your text here"
        type="textarea"
        className="summary_box w-full h-32 input-box mb-3 overflow-hidden resize-vertical flex flex-row items-start justify-start outline-none  border-blue-800 focus:border-blue-500 hover:border-amber-400 ease"
        name=""
        id=""
        value={textInput}
        onChange={handleInputChange}
      ></textarea>
      <div className="flex justify-end gap-3">
        {/* summary size input box */}
        <input
          type="number"
          id="summary-size"
          className=" sm:w-auto w-1/3 bg-blue-500 border-none rounded-md  hover:bg-blue-600 text-sm text-center placeholder-blue-100 italic text-white"
          placeholder="Size (10-100)"
          onChange={handleSummarySize}
          required
        />
        <button
          id="sum-text-btn"
          className="bg-blue-500 hover:bg-blue-600 text-white p-1 px-2  rounded-lg w-1/2 h-auto sm:w-auto"
          onClick={handleSummarizeClick}
        >
          Summarize this
        </button>
      </div>
      {loading ? (
        <div className="loader2 flex justify-center ml-64 mt-16"></div>
      ) : Lsummary ? (
        <motion.div {...fadeInAnimation}>
          <h2 className="font-satoshi font-bold text-gray-600 text-xl mt-3">
            Text <span className="blue_gradient">Summary</span>
          </h2>
          <div
            className="summary_box w-full mb-3 flex items-center justify-center "
            id="sum-result"
          >
            {/* Rendering the summary here */}
            {Lsummary}
          </div>
           {/* Pass the userSummary to the PDFDownloadButton */}
          <ArticleActions 
          articleSummary={Lsummary}
          link={null} 
          />
        </motion.div>
      ) : (
        <>
          {apiAttempted && !loading && !Lsummary && (
            <motion.div {...fadeInAnimation}>
              <div className="summary_box text-slate-500 mt-3">
                No summary found. Make sure you have select correct size and
                text.
              </div>
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  );
};
export default Localsummary;
