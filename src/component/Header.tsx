import React from 'react';

const Header: React.FC = () => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-IN', {
        day: '2-digit',
        month: 'short',
        weekday: 'long'
    }).format(date);

    return (
        <>
            <div className='flex justify-between pt-8'>
                <div className='pl-8'>
                    <span className='text-2xl font-medium'>Hello, Hemant</span>
                    <div>{formattedDate}</div>
                </div>
                <div className='flex space-x-5 pr-5'>
                    <div>
                        <i className="ri-search-line bg-[#3e3c3c] rounded-full text-xl p-2"></i>
                    </div>
                    <div className='bg-[#363535] rounded-full text-white flex justify-center items-center  h-[20px] p-4 '>
                        <div>
                            <i className="ri-compass-3-line"></i>
                            <span>foryou</span>

                        </div>
                    </div>
                    <div className='bg-[#363535] rounded-full text-white flex justify-center items-center  h-[20px] p-4'>
                        <div >
                            <i className="ri-screenshot-2-fill"></i>
                            <span>screener</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;
