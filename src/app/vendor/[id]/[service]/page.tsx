const ServicePage = async (props: {params:{service:string, id:string}}) =>{
    const {service, id} = await props.params;
    return(
        <div>
            <h1>Service: {service} for Vendor ID: {id}</h1>
            <p>This is the page for service {service} of vendor with ID: {id}.</p>
        </div>
    );
}

export default ServicePage;
