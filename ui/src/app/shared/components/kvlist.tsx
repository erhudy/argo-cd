import React from 'react';

export const KVList = (kvs: {[name: string]: string}) => {
    return (
        <div>
            {
                Object.keys(kvs).map(x => <pre>{x}={kvs[x]}</pre>)
            }
        </div>
    )
}