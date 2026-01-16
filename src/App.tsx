import "./App.css";
import Banner from "./components/Banner/Banner.tsx";
import TimeCalendar from "./components/TimeCalendar/TimeCalendar.tsx";
import Location from "./components/Location/Location.tsx";

function App() {
  return (
    <>
      <Banner />
      <TimeCalendar />
      <Location />
    </>
  );
}

export default App;
