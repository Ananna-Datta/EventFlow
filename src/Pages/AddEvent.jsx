import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';

const AddEvent = () => {
  const { user } = useContext(AuthContext); 
  const [form, setForm] = useState({
    title: '',
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      ...form,
      attendeeCount: 0,
      datetime: `${form.date}T${form.time}`,
      userEmail: user?.email || "anonymous",
      userId: user?.uid || "unknown",
      postedAt: new Date().toISOString()
    };

    try {
      const res = await fetch('https://event-flow-server-three.vercel.app/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success('Event added successfully!');
        setForm({
          title: '',
          name: '',
          date: '',
          time: '',
          location: '',
          description: '',
        });
      } else {
        toast.error('Failed to add event');
      }
    } catch (error) {
      toast.error('Server error!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#004AAD] to-[#00c6ff] px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-[#004AAD] w-full max-w-xl p-10 rounded-3xl shadow-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center mb-4">📅 Add New Event</h2>

        {/* Event Title */}
        <div>
          <label className="block font-semibold mb-1">Event Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#004AAD] focus:outline-none transition"
            placeholder="Enter event title"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#004AAD] focus:outline-none transition"
            placeholder="Who is posting the event?"
          />
        </div>

        {/* Date & Time */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#004AAD] focus:outline-none transition"
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#004AAD] focus:outline-none transition"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#004AAD] focus:outline-none transition"
            placeholder="Enter location"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#004AAD] focus:outline-none transition"
            placeholder="Describe the event..."
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 text-white font-semibold bg-[#004AAD] rounded-xl hover:bg-[#003080] transition"
        >
          ➕ Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
