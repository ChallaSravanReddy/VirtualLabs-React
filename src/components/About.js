import React from "react";
import "../styles/about.css"; // Import the new CSS file

export default function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Hey! , Welcome To Our Project . We are Team Made this Virtual LABS . 
        These Labs Have many Advantages That My team will Explain You...
                            Have a Good Day......
      </p>

      <h2>Our Team</h2>
      <div className="team-section">
        <div className="team-card">
          <img src="../assets/image.png" alt="Team Lead" />
          <h3>Sravan</h3>
          <p>2nd Year IT</p>
        </div>
        <div className="team-card">
          <img src="../assets/profile.png" alt="Team Member" />
          <h3>syanvi</h3>
          <p>1st year CSD</p>
        </div>
        <div className="team-card">
          <img src="../assets/profile.png" alt="Team Member" />
          <h3>Krishna</h3>
          <p>1st Year CSD</p>
        </div>
      </div>
    </div>
  );
}
