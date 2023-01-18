import React, { useState, useEffect } from 'react';

export default function DocumentList() {
    
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        (async function () {
            const response = await( await fetch(`/api/message`)).json();
            console.log( response );
        })();
    });

    useEffect(() => {
    (async function () {
        const { body } = await( await fetch(`/api/documentlist`)).json();
        setDocs( body );
    })();
    });

    return (
        <div>
            {docs}
        </div>
    )
}