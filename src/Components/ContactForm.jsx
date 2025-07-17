import React, { useState } from 'react';

const ConnectForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'Required field';
    if (!form.lastName) newErrors.lastName = 'Required field';
    if (!form.email) newErrors.email = 'Required field';
    if (!form.message) newErrors.message = 'Required field';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle successful form submission
      console.log('Form submitted:', form);
    }
  };

  return (
    <div className="max-w-sm max-h-11/12 mx-auto mt-9 rounded-3xl overflow-hidden shadow-lg bg-blue-700 border-indigo-300 ScrollEffect">
      <div className="bg-blue-700 text-white px-5 py-6 rounded-t-3xl">
        <h2 className="text-xl font-semibold">Let's Connect</h2>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm rounded-4xl bg-indigo-100">
        <p className="text-gray-700 mb-2">Please complete the form below and we will be in touch soon.</p>

        {/* First Name */}
        <div>
          <label className="block font-semibold uppercase text-xs">First Name</label>
          <input
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">Required field</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-semibold uppercase text-xs">Last Name</label>
          <input
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">[Required]</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold uppercase text-xs">Business Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">[Required]</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold uppercase text-xs">Contact Number</label>
          <input
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-semibold uppercase text-xs">Message</label>
          <input
            name="message"
            type="text"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">[Required]</p>}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-blue-700 text-white w-full py-2 rounded hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </div>

        {/* reCAPTCHA placeholder */}
        <div className="pt-3">
          <div className="border p-3 bg-white rounded shadow flex items-center justify-center">
            <p className="text-sm text-gray-500">[reCAPTCHA here]</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConnectForm;
