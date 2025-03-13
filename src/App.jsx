import React from "react";
import UniversityCard from "./components/UniversityCard";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";

const universities = [
  {
    id: 1,
    name: "Amity University Online",
    image:
      "https://collegevidya.com/_next/image/?url=https%3A%2F%2Fd1aeya7jd2fyco.cloudfront.net%2Fslider%2FTop-Amity-Online-University.jpg&w=3840&q=75",
    logo: "https://i.pinimg.com/736x/8d/53/e2/8d53e2b5968ca906164fcf910da99204.jpg",
    location: "Noida",
    courses: 16,
    fee: "80K - 9L",
    accreditation: [
      "https://i.pinimg.com/736x/c0/e1/66/c0e16620c85bd5cd15bab98cb47a969a.jpg",
      "https://i.pinimg.com/736x/62/fe/dd/62feddab64740e8bde6958531dc0fe6d.jpg",
      "https://i.pinimg.com/474x/d8/09/4a/d8094a5dc9d945f621b1df78859a578e.jpg",
    ],
  },
  {
    id: 2,
    name: "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwRubX99AMYrzpOGAQKqNvzYFETYIPI1KRQ&s",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3DGt2kf4TIBJJaGEdcHkjClv4zbeqeANvA&s",
    location: "Noida",
    courses: 16,
    fee: "80K - 9L",
    accreditation: [
      "https://i.pinimg.com/736x/c0/e1/66/c0e16620c85bd5cd15bab98cb47a969a.jpg",
      "https://i.pinimg.com/736x/62/fe/dd/62feddab64740e8bde6958531dc0fe6d.jpg",
      "https://i.pinimg.com/474x/d8/09/4a/d8094a5dc9d945f621b1df78859a578e.jpg",
    ],
  },
  {
    id: 3,
    name: "NMIS online",
    image:
      "https://collegevidya.com/_next/image/?url=https%3A%2F%2Fd1aeya7jd2fyco.cloudfront.net%2Fslider%2FTop-University-NMIMS.jpg&w=3840&q=75",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3DGt2kf4TIBJJaGEdcHkjClv4zbeqeANvA&s",
    location: "Noida",
    courses: 16,
    fee: "80K - 9L",
    accreditation: [
      "https://i.pinimg.com/736x/c0/e1/66/c0e16620c85bd5cd15bab98cb47a969a.jpg",
      "https://i.pinimg.com/736x/62/fe/dd/62feddab64740e8bde6958531dc0fe6d.jpg",
      "https://i.pinimg.com/474x/d8/09/4a/d8094a5dc9d945f621b1df78859a578e.jpg",
    ],
  },
];

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Top Universities</h1>
        <div className={styles.universityList}>
          {universities.map((university) => (
            <UniversityCard key={university.id} university={university} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
