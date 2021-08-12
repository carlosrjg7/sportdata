import React from 'react';
import BarCalendar from './components/days/BarCalendar';
import Filters from './components/filters/Filters';
import Calendario from './components/calendar/Calendario';
import DataState from './context/date/DataState';
import LigasState from './context/ligas/LigasState';
import SeasonState from './context/season/SeasonState';
import MatchesState from './context/matches/MatchesState';
import LoaderProvider from './context/loader/LoaderProvider';
import Results from './components/results/Results';

function App() {

  return (
    <DataState>
      <LigasState>
        <SeasonState>
          <LoaderProvider>
            <MatchesState>
              <div className="sportData">
                <div className="toolCalendar">
                    <BarCalendar />
                    <Calendario />
                </div>
                <Filters/>
                <Results/>
              </div>
            </MatchesState>
          </LoaderProvider>
        </SeasonState>
      </LigasState>
    </DataState>
  );
}

export default App;
