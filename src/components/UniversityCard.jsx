import React from "react";
import styles from "../styles/UniversityCard.module.css";
import { FaMapMarkerAlt, FaRegHeart, FaDownload } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const UniversityCard = ({ university }) => {
    return (
      
      <div className={styles.card}>
            <div className={styles.featured}>Featured</div>

     <div className={styles.imageContainer}>
  <img
    src={university.image}
    alt={university.name}
    className={styles.universityImage}
  />
</div>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.iconsContainer}>
            <FaRegHeart className={styles.icon} />
            <FaDownload className={styles.iconDisabled} />
          </div>
          <img
            src={university.logo}
            alt={`${university.name} Logo`}
            className={styles.universityLogo}
          />
        </div>
        <h2 className={styles.universityName}>{university.name}</h2>
        <div className={styles.details}>
          <span>
            <IoMdSchool /> <strong>{university.courses}</strong> Courses
          </span>
          <span>
            <FaMapMarkerAlt /> {university.location}
          </span>
          <span>💰 Fee {university.fee}</span>
        </div>
        <div className={styles.accreditation}>
          <div className={styles.accreditation_container}>
            {university.accreditation.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Accreditation"
                className={styles.accreditation_logo}
              />
            ))}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <HiOutlineClipboardDocumentList className={styles.docIcon} />
          <button className={styles.applyBtn}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
