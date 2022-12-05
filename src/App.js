import { useQuery } from '@tanstack/react-query';
import './App.css';
import TableComponent from './Components/TableComponent/TableComponent';

function App() {


  
  const { isLoading, isError, data: data, error,refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: ()=> fetch('tableTestData.json')
    .then(data=> data.json())
  })







  return (
    <div>
    {/* Table 1 */}
    <TableComponent data= {data}/>     
    {/* Table 2 */}
    <TableComponent/>     
    {/* Table 3 */}
    <TableComponent/>     
    </div>
  );
}

export default App;
