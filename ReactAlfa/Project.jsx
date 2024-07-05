import React, { useState } from 'react';

const Project = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    age: '',
    rollNumber: ''
  });
  const [selectedCourse, setSelectedCourse] = useState('');
  
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    age: false,
    rollNumber: false
  });
  const [courseError, setCourseError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormErrors({
      ...formErrors,
      [name]: false
    });
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
    setCourseError('');
  };

  const isFormValid = () => {
    const errors = {
      firstName: !formData.firstName,
      age: !formData.age,
      rollNumber: !formData.rollNumber
    };
    for (const key in errors) {
      if (errors[key]) {
        setFormErrors(prevErrors => ({ ...prevErrors, [key]: true }));
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid() && selectedCourse) {
      setSubmittedData({
        ...formData,
        selectedCourse
      });
      setCourseError('');
    } else {
      setCourseError('Please fill out all fields and select a course.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={formErrors.firstName ? 'error' : ''}
        />
        {formErrors.firstName && <p>Please enter your first name.</p>}
        <br />

        <label>Age</label>
        <input
          type="date"
          placeholder="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className={formErrors.age ? 'error' : ''}
        />
        {formErrors.age && <p>Please enter your age.</p>}
        <br />

        <label>Roll Number</label>
        <input
          type="number"
          placeholder="Roll Number"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          className={formErrors.rollNumber ? 'error' : ''}
        />
        {formErrors.rollNumber && <p>Please enter your roll number.</p>}
        <br />

        <div>
          <h2>Select Your Course:</h2>
          <label htmlFor="Course">Choose a Course:</label>
          <select
            id="Course"
            name="Course"
            value={selectedCourse}
            onChange={handleCourseChange}
            className={courseError ? 'error' : ''}
          >
            <option value="">--Please choose an option--</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Data Science">Data Science</option>
          </select>
          {courseError && <p>{courseError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p><strong>First Name:</strong> {submittedData.firstName}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Roll Number:</strong> {submittedData.rollNumber}</p>
          <p><strong>Course:</strong> {submittedData.selectedCourse}</p>
        </div>
      )}
    </div>
  );
};

export default Project;
