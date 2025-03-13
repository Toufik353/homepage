import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/Sidebar.module.css";

const specializations = [
  "Healthcare (Dual)",
  "Hospitality Management",
  "Generative AI",
  "Hospital Administration",
  "Banking and Insurance",
  "HRM and Finance (Dual)",
  "Oil and Gas Management (Dual)",
  "Fintech Management",
  "Digital Marketing E Commerce",
];

const degrees = [
  { name: "B.A.M.S. (Bachelor of Ayurvedic Medicine and Surgery)", count: 197 },
  { name: "B.P.T. (Bachelor of Physiotherapy)", count: 424 },
  { name: "C.A. (Chartered Accountant)", count: 11 },
  { name: "B.A.F. (Bachelor of Accounting and Finance)", count: 26 },
  { name: "M.Tech. (Master of Technology)", count: 2939 },
];

const states = [
  { name: "Andaman & Nicobar", count: 1 },
  { name: "Andhra Pradesh", count: 410 },
  { name: "Arunachal Pradesh", count: 7 },
  { name: "Assam", count: 31 },
  { name: "Bihar", count: 40 },
  { name: "Chandigarh", count: 10 },
];

const studyModes = [
  { name: "Distance Learning", count: 9 },
  { name: "Online", count: 1 },
  { name: "Part Time", count: 32 },
  { name: "Regular", count: 4315 },
];

const feeRanges = [
  { label: "Less than 1 Lakh", count: 3081 },
  { label: "1 to 2 Lakh", count: 1869 },
  { label: "2 to 3 Lakh", count: 1185 },
  { label: "3 to 4 Lakh", count: 588 },
  { label: "4 to 5 Lakh", count: 275 },
  { label: "Greater than 5 Lakh", count: 383 },
];

const Sidebar = () => {
  const [selectedFees, setSelectedFees] = useState([]);

  const handleCheckboxChange = (label) => {
    setSelectedFees((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  return (
    <div className={styles.sidebar}>
      {/* Degree Section */}
      <div className={styles.section}>
        <h3 className={styles.title}>Degree</h3>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
        <ul className={styles.list}>
          {degrees.map((degree, index) => (
            <li key={index} className={styles.listItem}>
              <input type="checkbox" id={`degree-${index}`} />
              <label htmlFor={`degree-${index}`}>
                {degree.name} <span className={styles.count}>({degree.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* State Section */}
      <div className={styles.section}>
        <h3 className={styles.title}>State</h3>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
        <ul className={styles.list}>
          {states.map((state, index) => (
            <li key={index} className={styles.listItem}>
              <input type="checkbox" id={`state-${index}`} />
              <label htmlFor={`state-${index}`}>
                {state.name} <span className={styles.count}>({state.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Study Mode Section */}
      <div className={styles.section}>
        <h3 className={styles.title}>Study Mode</h3>
        <ul className={styles.list}>
          {studyModes.map((mode, index) => (
            <li key={index} className={styles.listItem}>
              <input type="checkbox" id={`study-${index}`} />
              <label htmlFor={`study-${index}`}>
                {mode.name} <span className={styles.count}>({mode.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Fee Range Section */}
      <div className={styles.section}>
        <h3 className={styles.title}>Fee Range</h3>
        <ul className={styles.list}>
          {feeRanges.map(({ label, count }, index) => (
            <li key={index} className={styles.listItem}>
              <input
                type="checkbox"
                id={`fee-${index}`}
                checked={selectedFees.includes(label)}
                onChange={() => handleCheckboxChange(label)}
              />
              <label htmlFor={`fee-${index}`}>
                {label} <span className={styles.count}>({count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Specialisations Section */}
      <div className={styles.section}>
        <h3 className={styles.title}>Specialisations</h3>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
        <ul className={styles.list}>
          {specializations.map((spec, index) => (
            <li key={index} className={styles.listItem}>
              <input type="radio" id={`spec-${index}`} name="specialization" />
              <label htmlFor={`spec-${index}`}>{spec}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
