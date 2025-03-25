import React, { useState } from "react";
import { trackTitles } from "../../data/TracksData";
import "./RegistrationForm.css";

interface RegistrationFormData {
  fullName: string;
  email: string;
  courseOfStudy: string;
  yearOfStudy: string;
  selectedTrack: string;
}

const TracksRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: "",
    email: "",
    courseOfStudy: "",
    yearOfStudy: "",
    selectedTrack: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic (e.g., API call, validation)
    console.log("Registration submitted:", formData);
    // TODO: Add your form submission handling here
  };

  return (
    <div className="tracks-registration-form">
      <h2 className="registration-form-title">Track Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseOfStudy">Current Course of Study</label>
          <input
            type="text"
            id="courseOfStudy"
            name="courseOfStudy"
            value={formData.courseOfStudy}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearOfStudy">Year of Study</label>
          <input
            type="text"
            id="yearOfStudy"
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedTrack">Select Track</label>
          <select
            id="selectedTrack"
            name="selectedTrack"
            value={formData.selectedTrack}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a Track</option>
            {trackTitles.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default TracksRegistrationForm;
