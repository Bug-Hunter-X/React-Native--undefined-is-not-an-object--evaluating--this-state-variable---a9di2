import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Access data here; it's guaranteed to be defined */}      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};
export default MyComponent;