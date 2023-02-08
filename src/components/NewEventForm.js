import { useState } from "react";
import "./NewEventForm.css";
export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("jaghori");
  const resetState = () => {
    setTitle("");
    setDate("");
    setLocation("jaghori");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };
    addEvent(event);
    resetState();
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Location</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="jaghori">Jaghori</option>
          <option value="kabul">Kabul</option>
          <option value="dikondi">Dikondi</option>
          <option value="bamian">Bamian</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
