import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import Calendar from "./pages/Calendar";
import Schedule from "./pages/Schedule";
import EventDashboardOld from "./pages/EventDashboardOld";
import Events from "./pages/Events";
import EventDetails from "./pages/president/EventDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/events-old" element={<EventDashboardOld />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/create" element={<CreateEvent />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/president/schedule" element={<Schedule />} />
          <Route path="/president/event-details" element={<EventDetails />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;