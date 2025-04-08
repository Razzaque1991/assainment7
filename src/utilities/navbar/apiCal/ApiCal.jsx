import React, { useEffect, useState } from 'react';
import Table from '../container_div/Table';

const ApiCal = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('/watch.json')
      .then(res => res.json())
      .then(data => setDatas(data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="p-6">
      {datas.length > 0 ? (
        datas.map((data, index) => (
          <Table key={index} data={data} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiCal;
