import React from 'react';
import Review from './reivews';

function App() {

  return (
    <main>
      <section className='container'>
        <div className='title'> 
          <h2 className='ourreview'>Our reviews</h2>
        <div className="underline"></div>
        </div>
        <Review/>
      </section>
    </main>
  );
}

export default App;
