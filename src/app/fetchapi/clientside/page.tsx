'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect,useState } from 'react';

const fetchData = () =>{
    const [data, setData] = useState({});

    const searchParams = useSearchParams();
    const name =  searchParams.get('name');
    if(!name) throw new Error('Name query parameter is required');
    
    useEffect(() => {
        // This will run on the client side after the component mounts
        console.log('Component mounted');
        const APIcall = async () => {
            const res = await fetch(`https://fakestoreapi.com/users/${name}`);
            if(!res.ok) throw new Error('Failed to fetch data');
            const data =  await res.json();
            setData(data);
            // console.log(data);
        }
        
        APIcall();
    }, []);
    
    return (
        <pre><h1>API Data: {JSON.stringify(data, null, 2)}</h1></pre>
    );
};
export default fetchData;
