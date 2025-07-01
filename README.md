# EventFlow

**Live Demo:** https://eventflow-e8e79.web.app/

---

## Project Overview

EventFlow is a full-featured Event Management web application built using the MERN stack  
(MongoDB, Express.js, React.js, and Node.js). It allows users to register, authenticate, create and manage events,  
search and filter events efficiently, and join events with an intuitive and responsive user interface.

---

## Features

- **Custom Authentication System:**  
  Users can register and login with email, password, and profile photo URL. All event-related routes are protected.

- **Responsive Navbar:**  
  Displays app logo and name, navigation links, and user profile picture with a dropdown menu including username and logout button.

- **Event Listing (Private Route):**  
  Shows all events sorted by date and time (newest first), with event cards displaying title, organizer name, date/time, location, description, and attendee count.

- **Join Event Functionality:**  
  Users can join an event only once, and attendee count updates dynamically.

- **Search and Filter Events:**  
  Search events by title and filter by today, current week, last week, current month, and last month.

- **Add Event Page (Private):**  
  Authenticated users can add new events with all necessary details through a form.

- **My Events Page (Private):**  
  Users can view, update (via modal or route), and delete their own events with confirmation prompts on deletion.

- **Clear Error Handling:**  
  Friendly error messages are displayed for invalid login, registration errors, and form validation issues.

---

## Technology Stack

- Frontend: React.js  
- Backend: Node.js, Express.js  
- Database: MongoDB  
- Authentication: Firebase 

---
