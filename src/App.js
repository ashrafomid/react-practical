import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("Mohammad Ashraf Omid");
  const [age, setAge] = useState(26);
  const [showEvent, setShowEvent] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvent) => {
      return [...prevEvent, event];
    });
    setShowModal(false);
  };

  // const handleClose = () => {
  //   setShowModal(false);
  // };

  const handleClick = () => {
    setName("Mustafa Darwishi");
    setAge(27);
    console.log(name);
  };

  const opernInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const handleDelete = (id) => {
    setEvents(
      events.filter((event) => {
        return id !== event.id;
      })
    );
  };
  return (
    <div className="App">
      <Title
        title="Lets start a new JS Library"
        subtitle="I Love this challenge and I am very tuned! :)"
      />
      {!showEvent && (
        <div>
          <button
            onClick={() => {
              setShowEvent(true);
            }}
          >
            show Event
          </button>
        </div>
      )}
      {showEvent && (
        <div>
          <button
            onClick={() => {
              setShowEvent(false);
            }}
          >
            Hide Event
          </button>
        </div>
      )}
      <h1>Hello, My name is {name}</h1>
      <p>I am {age} years old</p>
      <button onClick={handleClick}>Change Name</button>
      {showEvent && <EventList events={events} handleDelete={handleDelete} />}
      {/* <Modal>
       <h2>Hi there, Welcome to this website</h2>
       <p>Use this website to enhance your vision</p>
      </Modal> */}
      {showModal && (
        <Modal isSaleModal={true}>
          <NewEventForm addEvent={addEvent} />
          {/* <a href='http://www.google.com' target='_blank' rel='noreferrer'>learn More</a> */}
          <button
            role="link"
            onClick={() => opernInNewTab("https://hadializada.com")}
          >
            Personal Protfolio
          </button>
        </Modal>
      )}
      {!showModal && (
        <button onClick={() => setShowModal(true)}>showModal</button>
      )}
    </div>
  );
}

export default App;
