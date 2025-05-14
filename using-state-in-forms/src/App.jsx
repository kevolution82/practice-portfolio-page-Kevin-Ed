import React, { useState } from 'react';
import './App.css';

function App() {
  // all form data lives here as it's cleaner than tracking each input separately
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  // universal change handler that reads the input’s name to know what to update
  const handleChange = (e) => {
    const { name, value } = e.target;

    // feedback gets a 200-character max. Nothing else is capped
    if (name === 'feedback' && value.length > 200) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault(); // prevents page refresh
  alert("Form Submitted! Thank you for your feedback.");
};

  // button stays disabled if any field is blank
  const isFormIncomplete = !formData.name || !formData.email || !formData.feedback;

  return (
    <div className="form-wrapper">
      <h1>User Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        {/* name input that's tied to state, updates on every keystroke */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        {/* email input with same idea */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        {/* feedback textarea that has a limit and a counter */}
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Share your thoughts"
          />
        </div>

        {/* live character count that updates as you type */}
        <p className="char-count">{formData.feedback.length}/200 characters</p>

        {/* button stays inactive until the form is complete */}
        <button type="submit" disabled={isFormIncomplete}>
          Submit
        </button>
      </form>

      {/* really real preview shows exactly what you typed */}
      <div className="preview">
        <h2>Live Preview</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Feedback:</strong> {formData.feedback}</p>
      </div>
    </div>
  );
}

export default App;
