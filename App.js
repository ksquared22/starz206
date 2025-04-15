import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const steps = [
    <div className="screen"><h1>Welcome to Starz Transportation</h1><button onClick={() => setStep(1)}>Login</button></div>,
    <div className="screen"><h2>Pickup Location</h2><input value={pickup} onChange={(e) => setPickup(e.target.value)} /><button onClick={() => setStep(2)}>Next</button></div>,
    <div className="screen"><h2>Destination</h2><input value={destination} onChange={(e) => setDestination(e.target.value)} /><button onClick={() => setStep(3)}>Request Ride</button></div>,
    <div className="screen"><h2>Searching for Driver...</h2><button onClick={() => setStep(4)}>Simulate Match</button></div>,
    <div className="screen"><h2>Driver Found</h2><p>Driver arriving in 4 minutes</p><button onClick={() => setStep(5)}>Start Ride</button></div>,
    <div className="screen"><h2>Ride in Progress</h2><button onClick={() => setStep(6)}>End Ride</button></div>,
    <div className="screen"><h2>Trip Complete</h2><button onClick={() => { setStep(0); setPickup(""); setDestination(""); }}>New Ride</button></div>,
  ];

  return <div style={{ padding: 20 }}>{steps[step]}</div>;
}

export default App;