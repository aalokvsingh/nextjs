const VendorPage = async (props:{params:{id:string}}) =>{
    const {id} = await props.params;

    return(
        <div>
            <h1>Vendor ID: {id}</h1>
            <p>This is the page for vendor with ID: {id}.</p>
        </div>
    );
}

export default VendorPage;