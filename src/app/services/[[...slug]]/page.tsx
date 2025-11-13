const ServicePage = async (props: {params:{slug?:string[]}}) =>{
    const {slug} = await props.params;
    return(
        <div>
            <h1>Services Page</h1>
            {slug ? (
                <>
                <p>Requested Services: {slug.join(", ")}</p>
                <pre>{JSON.stringify(slug, null, 2)}</pre>
                </>
            ) : (
                <p>No specific service requested.</p>
            )}
        </div>
    );
}

export default ServicePage;