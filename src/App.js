import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row vh-100 align-items-center'>

          <div className='col-md-3 form-col text-bg-dark h-100 d-flex flex-column justify-content-center align-items-center'>
            <Form />
          </div>

          <div className='col-md-9 table-col h-100'>
            <Table />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
