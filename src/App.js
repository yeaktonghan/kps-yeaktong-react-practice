import './App.css';
import Button from './component/Button';
import InputFieldComponent from './component/InputFieldComponent';
import TableComponent from './component/TableComponent';
import Title from './component/Title';

function App() {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center pt-12'>
      <Title />
      <InputFieldComponent />
      <Button />
      <TableComponent/>
    </div>
  );
}

export default App;
