import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-10'>
                <h1 className='text-3xl font-bold mb-8 mt-16'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full '>
                    <div className='w-full border bg-zinc-600 p-10'>
                        <h1 className='text-3xl font-bold mb-8'>What is an access token?</h1>
                        <p>When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.</p>
                        <p>OAuth 2.0 does not define a format for access tokens. At Auth0, for example, access tokens issued for the Management API and access tokens issued for any custom API that you have registered with Auth0 follow the JSON Web Token (JWT) standard. Their basic structure conforms to the typical JWT structure, and they contain standard JWT claims asserted about the token itself</p>
                    </div>
                    <div className='w-full border bg-zinc-700  p-10'>
                        <h1 className='text-3xl font-bold mb-8'>What Is a Refresh Token?</h1>
                        <p>As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>
                    </div>
                </div>
                <div className='w-full min-h-16 bg-zinc-700  pt-10 mb-10'>
                    <h1 className='text-3xl font-bold mb-8'>How do they work and where should we store them on the client-side?</h1>
                    <p>You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. This is also known as the backend for frontend (BFF) proxy.</p>
                </div>
            </div>
            <h1 className='text-3xl font-bold mb-8 mt-16'>2. Compare SQL and NoSQL databases?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full '>
                <div className='w-full border bg-zinc-700 p-10'>
                    <h1 className='text-3xl font-bold mb-8'> SQL Databases?</h1>
                    <p className='text-left text-black m-1.5'>1. SQL databases are relational</p>
                    <p className='text-left text-black m-1.5'>2. SQL databases use structured query language (SQL) and have a predefined schema</p>
                    <p className='text-left text-black m-1.5'>3. SQL databases are vertically scalable</p>
                    <p className='text-left text-black m-1.5'>4. SQL databases are table-based</p>
                    <p className='text-left text-black m-1.5'>5. SQL databases are better for multi-row transactions</p>
                </div>
                <div className='w-full border bg-zinc-700  p-10'>
                    <h1 className='text-3xl font-bold mb-8'>NoSQL databases</h1>
                    <p className='text-left text-black m-1.5'>1. NoSQL databases are non-relational</p>
                    <p className='text-left text-black m-1.5'>2. NoSQL databases have dynamic schemas for unstructured data.</p>
                    <p className='text-left text-black m-1.5'>3. NoSQL databases are horizontally scalable.</p>
                    <p className='text-left text-black m-1.5'>4. NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                    <p className='text-left text-black m-1.5'>5. NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <h1 className='text-3xl font-bold mb-8 mt-16'>3. What is express js? What is Nest JS?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full '>
                <div className='w-full border bg-zinc-700 p-10'>
                    <h1 className='text-3xl font-bold mb-8'> What is express js?</h1>
                    <p>
                        NestJS is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. NestJS uses a modular architecture, making it easy to maintain and scale applications as they grow.
                    </p>
                </div>
                <div className='w-full border bg-zinc-700  p-10'>
                    <h1 className='text-3xl font-bold mb-8'> What is Nest JS?</h1>
                    <p>
                        Express is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. It is a lightweight and unopinionated framework that allows developers to create applications with their preferred tools and libraries. Express is popular among developers due to its simplicity and ease of use.
                    </p>
                </div>
            </div>
            <h1 className='text-3xl font-bold mb-8 mt-16'>4. What is MongoDB aggregate and How does it work ?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full '>
                <div className='w-full border bg-zinc-700 p-10'>
                    <h1 className='text-3xl font-bold mb-8'> What is express js?</h1>
                    <p>
                    In MongoDB, aggregation can be defined as the operation that is used for processing various types of data in the collection, which returns a calculated result. The concept of aggregation mainly clusters out your data from multiple different documents which are then used and operates in lots of ways (on these clustered data) to return a combined result which can bring new information to the existing database. You can relate aggregation to that of the count(*) along with the group by used in SQL since both are equivalent in terms of the working.
                    </p>
                </div>
                <div className='w-full border bg-zinc-700  p-10'>
                    <h1 className='text-3xl font-bold mb-8'>How does it work ?</h1>
                    <p>
                    MongoDB offers three different ways of performing aggregation:
                    </p>
                    <div>
                        <p>1. The aggregation pipeline</p>
                        <p>2. The map-reduce function.</p>
                        <p>3. Single purpose aggregation methods.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;