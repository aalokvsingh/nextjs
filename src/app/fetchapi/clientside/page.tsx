'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect,useState } from 'react';

export default function FetchData(){
    const [data1, setData] = useState({});

    const searchParams = useSearchParams();
    const name =  searchParams.get('name');
    if(!name) throw new Error('Name query parameter is required');
    
    const APIcall = async () => {
            const res = await fetch(`https://fakestoreapi.com/users/${name}`);
            if(!res.ok) throw new Error('Failed to fetch data');
            const data1 =  await res.json();
            setData(data1);
            // console.log(data);
        }

    useEffect(() => {
        // This will run on the client side after the component mounts
        console.log('Component mounted');
        
        APIcall();
    }, []);
    
    return (
        <pre><h1>API Data: {JSON.stringify(data1, null, 2)}</h1></pre>
    );
};

