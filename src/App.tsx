import React, { ReactElement } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from './Map'

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <></>;
};

function App() {
  if (!process.env.REACT_APP_GOOGLE_KEY) {
    return <h2>Add google key</h2>
  }
  return (
    <div className="App">
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_KEY} render={render}>
        <Map center={{ lat: 31.540407004099254, lng: 74.35057679454006 }} zoom={13} />
      </Wrapper>
    </div>
  );
}

export default App;
