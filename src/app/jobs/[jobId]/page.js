export default async function JobDetailsPage({params}){
    const {jobId} = await params;
    // console.log(jobId)
    const res = await fetch(`https://jsonfakery.com/jobs/random/${jobId}`);
    if (!res.ok) throw new Error('Failed to load job data');
    const data = await res.json();
    console.log(data)
    

    return (
    <div>
      <h2>Job</h2>
      <p>category: {data[0].company}</p>
    </div>
  );
}