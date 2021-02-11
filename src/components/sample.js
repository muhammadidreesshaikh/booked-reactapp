import React, { useEffect } from 'react';
import '../assets/css/about.css';

function Sample(props) {

    // state
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');

    useEffect(() => {
        this.getData();
    });

    // API Call
    getData = () => {
        setData('Idrees');
    }

    // in this method state is updating
    updateCount = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>Hello, Idrees</h1>
            <p>{count}</p>
            <p>{data}</p>
        </div>
    );
  }