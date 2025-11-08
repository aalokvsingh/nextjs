# 🚀 Next.js App Router – Dynamic Routing Explained

Dynamic routing in **Next.js App Router** is both powerful and expressive.  
This guide covers **four core routing patterns** with TypeScript examples — helping you understand how to handle URL parameters effectively in modern Next.js apps.

---

## 1️⃣ Dynamic Route Segment

**Use:** Captures a single path segment as a parameter.

**Example**

```tsx
// app/vendor/[id]/page.tsx

const VendorPage = async (props: { params: { id: string } }) => {
  const { id } = await props.params;

  return (
    <div>
      <h1>Vendor ID: {id}</h1>
      <p>This is the page for vendor with ID: {id}.</p>
    </div>
  );
};

export default VendorPage;
```

## 2️⃣ Nested Dynamic Route Segment

**Use:** Combine multiple dynamic folders for deeper routes; each segment’s params are available in that file.

**Example**

```tsx
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

//url: http://localhost:3000/vendor/alok%20singh/network

```

## 3️⃣ Catch-All Route Segment

**Use:** Capture one or more segments as an array.

**Example**

```tsx
const ServicePage = async (props: {params:{slug:string[]}}) =>{
    const {slug} = await props.params;
    return(
        <div>
            <h1>Services Page</h1>
                <p>Requested Services: {slug.join(", ")}</p>
                <pre>{JSON.stringify(slug, null, 2)}</pre>
        </div>
    );
}

export default ServicePage;

// http://localhost:3000/services/netowk/security

```

## 4️⃣ Optional Catch-All Route Segment

**Use:** Capture zero or more segments — param may be undefined.

**Example**

```tsx
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

// Url: http://localhost:3000/services
// Url: http://localhost:3000/services/network/security
```
---
#Nextjs #React #WebDevelopment #TypeScript #Frontend #JavaScript #Learning #Routing

```
