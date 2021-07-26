import React from 'react';
import BarCalendar from './components/days/BarCalendar';
import Filters from './components/filters/Filters';
import Tabla from './components/results/Tabla';
import Calendario from './components/calendar/Calendario';


function App() {
  return (
    <div className="sportData">
      <div className="toolCalendar">
          <BarCalendar />
          <Calendario />
      </div>
      <Filters/>
      <Tabla name={"Copa Libertadores"}/>
    </div>
  );
}

export default App;
