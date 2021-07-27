import React, {useEffect} from 'react';
import BarCalendar from './components/days/BarCalendar';
import Filters from './components/filters/Filters';
import Tabla from './components/results/Tabla';
import Calendario from './components/calendar/Calendario';
import clienteAxios from './config/axios';

function App() {

  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
      
    matches();

  }, []);

  const matches = async () =>{
    const liga = await clienteAxios.get('/soccer/leagues');
    console.log(liga);

    const season = await clienteAxios.get('/soccer/seasons?league_id=13');
    console.log(season);
  }
  

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
