import React from 'react';

const Table = ({ data }) => {
  if (!data) return null;  

  const { title, description, currentBidPrice, timeLeft, bidsCount, image } = data;

  return (
    <div className="overflow-x-auto my-4">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bids</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img src={image} alt={title} />
                </div>
              </div>
            </td>
            <td className="font-bold">{title}</td>
            <td>{description}</td>
            <td>${currentBidPrice}</td>
            <td>{timeLeft}</td>
            <td>{bidsCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
