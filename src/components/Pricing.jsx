// PremiumPlansPage.js
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import PremiumPlanCard from "./PremiumCard";
import { fadeInAnimation } from "./animation";
import { Link } from "react-router-dom";
import "../CSS/Pricing.css"
// import {
//   slideAnimation,
// } from "../config/motion";

const PremiumPlansPage = () => {
  const plans = [
    {
      title: "Free",
      price: "0",
      use: "Trial",
      features: ["5 URL summaries", "5 Text Summaries", "Unlimited Translations", "Unlimited Downloads"],
    },
    {
      title: "Standard",
      price: "60.00",
      use: "Personal or Freelance",
      features: ["Free inc.","60 URL Summaries", "60 Text Summaries"],
    },
    {
      title: "Premium",
      price: "100.00",
      use: "Business or Enterprise",
      features: [
        "Standard inc.",
        "100 URL Summaries",
        "100 Text Summaries",
        "Customer support",
      ],
    },
  ];

  return (
    <AnimatePresence>
      <motion.section  className="min-h-screen h-auto " {...fadeInAnimation}>
     
        <span className="prempage-header  items-center flex justify-center mt-12 bg-gradient-to-r from-blue-800 to-rose-500 bg-clip-text text-transparent text-4xl font-bold">
          PREMIUM PLANS
        </span>
        <motion.div className="flex flex-wrap m-5 justify-center">
          {plans.map((plan, index) => (
            <PremiumPlanCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              use={plan.use}
            />
          ))}
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default PremiumPlansPage;
