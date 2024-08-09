import React from 'react';
import ReactDOM from 'react-dom';
import MultiStepForm from './components/MultiStepForm.jsx';
import './index.css';

function App() {
  ReactDOM.render(
    <React.StrictMode>
      <section className="area-login">
        <MultiStepForm />
      </section>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default App;
