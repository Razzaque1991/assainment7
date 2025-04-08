import React from 'react';

const Banner = () => {
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: "url('https://i.ibb.co/fVgx1Frr/Banner-min.jpg')" }}
            >
            <div className="flex justify-around items-center w-full py-10 gap-10 mr-96">
                {/* Left */}
                <div >
                    <h1 className="text-3xl font-bold text-white mb-2">Bid on Unique Items from <br /> Around the World</h1>
                    <p className='text-white mb-2'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                    <button className="btn rounded-4xl w-52">Explore Action</button>
                </div>

                {/* Right */}
                <div>
                   
                </div>
                </div>
        </div>

    );
};

export default Banner;
