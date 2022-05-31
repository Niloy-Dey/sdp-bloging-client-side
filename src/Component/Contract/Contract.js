import React from 'react';

const Contract = () => {
    return (
        <div>
            <div class="card mx-auto  w-96  my-40  bg-green-50 shadow-xl">
                <div class="card-body">
                    <h1 className="text-xl font-bold text-center">CONTRACT</h1>
                    <input className='py-2 border-2 my-3' placeholder='  enter name ' type="text" name="name" id="" />
                    <input className='py-2 border-2 my-3'  placeholder="  enter email " type="email" name="email" id="" />
                    <button class="btn btn-primary">Contract</button>
                </div>
            </div>
        </div>
    );
};

export default Contract;