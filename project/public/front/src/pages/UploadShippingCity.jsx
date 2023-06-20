import axios from 'axios'
import Papa from 'papaparse';
import {useState,useRef,useEffect} from 'react'
const UploadShippingCity=()=>{
    const [data, setData] = useState(null);
    const [array, setArray] = useState([])
    const [fileI,setFile]=useState()
    const button = useRef(null)

    const handleFileUpload = (e) => {
           const file = e.target.files[0];
           setFile(file);
           Papa.parse(file, {
             header: true,
             dynamicTyping: true,
            skipEmptyLines: true,
            delimiter: ';',
             complete: (results) => {
               setData(results.data);
               console.log(results.data)
           },
           });
           console.log(data)
    };

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(fileI);
          console.log(fileI)
          const reader = response.body.getReader();
          const result = await reader.read();
          const decoder = new TextDecoder("utf-8");
          const csvData = decoder.decode(result.value);
          const parsedData = Papa.parse(csvData, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true
          }).data;
          setData(parsedData);
        };
        fetchData();
        console.log(data)
      }, [fileI]);

    const AddShippings=()=>{
        const form = new FormData()
        form.append('csv',csvData)
        console.log(csvData)
        axios.post('http://localhost:8000/api/addShippingcities',form)
        .then(res=>res.data)
    }
    return <div  className='UploadShippingCity' >
        <p className='SlidersContentManagement' >Shipping cities</p>
        <input type='file' onChange={handleFileUpload} />
    </div>
}
export default UploadShippingCity
