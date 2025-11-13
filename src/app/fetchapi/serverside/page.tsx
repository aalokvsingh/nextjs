const fetchData = async(props:{searchParams:URLSearchParams}) =>{
    const searchParams = await props.searchParams;
    const name = await searchParams.name;
    if(!name) throw new Error('Name query parameter is required');
    // const res = await fetch(`https://api.genderize.io?name=${name}`);
    const res = await fetch(`https://api.vercel.app/blog`);
    if(!res.ok) throw new Error('Failed to fetch data');
    const data =  await res.json();
    console.log(data);
    return (
        <h1>API Data: {JSON.stringify(data)}</h1>
    );
};
export default fetchData;
