import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateEvent = () => {
  const event = useLoaderData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (!event) {
    return <div className="text-center mt-20 text-xl font-semibold">Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const updatedEvent = {
      title: form.title.value,
      name: form.name.value,
      datetime: form.datetime.value,
      location: form.location.value,
      description: form.description.value,
      userEmail: event.userEmail, // keep userEmail unchanged
      attendeeCount: event.attendeeCount || 0,
    };

    try {
      const res = await fetch(`https://event-flow-server-three.vercel.app/events/${event._id}`, {
        method: 'PATCH',  // PATCH instead of PUT
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEvent),
      });

      if (res.ok) {
        toast.success('Event updated successfully!');
        navigate('/myevents');
      } else {
        const data = await res.json();
        toast.error(data.message || 'Failed to update event');
      }
    } catch (error) {
      toast.error('Error updating event');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg text-[#004AAD]">
      <h1 className="text-3xl font-bold mb-6 text-center">Update Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="font-semibold">Event Title</span>
          <input
            type="text"
            name="title"
            defaultValue={event.title}
            required
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="font-semibold">Name (Who posted)</span>
          <input
            type="text"
            name="name"
            defaultValue={event.name}
            required
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="font-semibold">Date and Time</span>
          <input
            type="datetime-local"
            name="datetime"
            defaultValue={event.datetime ? event.datetime.slice(0, 16) : ''}
            required
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="font-semibold">Location</span>
          <input
            type="text"
            name="location"
            defaultValue={event.location}
            required
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="font-semibold">Description</span>
          <textarea
            name="description"
            defaultValue={event.description}
            required
            rows={4}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 resize-none"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#004AAD] text-white py-2 rounded hover:bg-[#003080] transition"
        >
          {loading ? 'Updating...' : 'Update Event'}
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
