import React from 'react'

const SideBar: React.FC = () => {
    return (
        <div className=" bg-black w-[50px] space-y-10 m-auto pl-2  h-[900px] pt-6">
            <div><i className="ri-home-line text-[#a19c9c] text-2xl"></i></div>
            <div><i className="ri-search-2-line text-[#a19c9c] text-2xl"></i></div>
            <div><i className="ri-book-read-line text-[#a19c9c] text-2xl"></i></div>
            <div><i className="ri-bookmark-line text-[#a19c9c] text-2xl"></i></div>
            <div><i className="ri-tools-fill text-[#a19c9c] text-2xl"></i></div>
        </div>
    )
}
export default SideBar