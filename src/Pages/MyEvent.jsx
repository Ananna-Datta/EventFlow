// EventPage.jsx
import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch('https://event-flow-server-three.vercel.app/events');
      let data = await res.json();
      data.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
      setEvents(data);
    } catch {
      toast.error('Failed to load events');
    }
  };

  const handleJoin = async (event) => {
    const joined = localStorage.getItem(`joined-${event._id}`);
    if (joined) return toast.warning('You have already joined this event');

    try {
      const res = await fetch(`https://event-flow-server-three.vercel.app/events/${event._id}/join`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: user?.email }),
      });
      const result = await res.json();

      if (result.modifiedCount > 0) {
        localStorage.setItem(`joined-${event._id}`, 'true');
        toast.success('Joined event!');
        setEvents((prev) =>
          prev.map((e) =>
            e._id === event._id ? { ...e, attendeeCount: e.attendeeCount + 1 } : e
          )
        );
      } else {
        toast.info(result.message || 'Already joined');
      }
    } catch {
      toast.error('Failed to join event');
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://event-flow-server-three.vercel.app/events/${id}`, {
          method: 'DELETE'
        });
        const data = await res.json();

        if (data.deletedCount > 0) {
          setEvents((prev) => prev.filter((e) => e._id !== id));
          Swal.fire('Deleted!', 'Your event has been removed.', 'success');
        } else {
          throw new Error('Deletion failed');
        }
      } catch {
        toast.error("❌ Failed to delete event");
      }
    }
  };

  const applyFilters = (event) => {
    const today = new Date();
    const eventDate = new Date(event.datetime);

    switch (filter) {
      case 'today':
        return eventDate.toDateString() === today.toDateString();
      case 'this-week': {
        const start = new Date(today);
        start.setDate(today.getDate() - today.getDay());
        const end = new Date(start);
        end.setDate(end.getDate() + 6);
        return eventDate >= start && eventDate <= end;
      }
      case 'last-week': {
        const start = new Date(today);
        start.setDate(today.getDate() - today.getDay() - 7);
        const end = new Date(start);
        end.setDate(end.getDate() + 6);
        return eventDate >= start && eventDate <= end;
      }
      case 'this-month': {
        const now = new Date();
        return eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear();
      }
      case 'last-month': {
        const now = new Date();
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        return eventDate.getMonth() === lastMonth.getMonth() && eventDate.getFullYear() === lastMonth.getFullYear();
      }
      default:
        return true;
    }
  };

  const filteredEvents = events
    .filter((event) => event.title.toLowerCase().includes(search.toLowerCase()))
    .filter(applyFilters);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004AAD] to-[#00c6ff] py-12 px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">🎉 All Events</h1>

      <div className="max-w-6xl  mx-auto mb-8  flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-xl text-[#004AAD] bg-white"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-xl text-[#004AAD] bg-white"
        >
          <option value="all">All Events</option>
          <option value="today">Today</option>
          <option value="this-week">Current Week</option>
          <option value="last-week">Last Week</option>
          <option value="this-month">Current Month</option>
          <option value="last-month">Last Month</option>
        </select>
      </div>

      <div className="grid grid-cols-1 font-white md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredEvents.map((event) => (
          <div
            key={event._id}
            className="bg-white text-[#004AAD] p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition"
          >
            <h2 className="text-2xl font-bold mb-1">{event.title}</h2>
            <p className="text-sm font-medium text-gray-600">By: {event.name}</p>
            <p className="text-sm text-gray-500 mb-2">🕒 {new Date(event.datetime).toLocaleString()}</p>
            <p className="text-sm text-gray-600 mb-2">📍 {event.location}</p>
            <p className="text-sm text-gray-700 mb-3 line-clamp-3">{event.description}</p>
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm font-semibold">👥 {event.attendeeCount} Attending</p>
              <button
                onClick={() => handleJoin(event)}
                className="bg-[#004AAD] text-white px-4 py-1 rounded-full text-sm hover:bg-[#003080]"
              >
                Join
              </button>
              <Link
                to={`/updateEvent/${event._id}`}
                className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm hover:bg-yellow-600"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(event._id)}
                className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
