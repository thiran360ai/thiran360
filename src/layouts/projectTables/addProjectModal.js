import React, { useState } from 'react';
import Modal from 'react-modal';

const AddProjectModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    companyName: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log('Form Data:', formData);
    // Close modal after submission
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Project Modal"
      style={{
        overlay: {
          zIndex: 100,
        },
        content: {
          zIndex: 100,
        },
      }}
    >
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="" disabled>Select Location</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="US">US</option>
          </select>
        </div>
        <button type="submit">Add Project</button>
      </form>
    </Modal>
  );
};

export default AddProjectModal;
