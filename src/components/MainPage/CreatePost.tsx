'use client'

import React, { useContext, useEffect, useState } from 'react';
import { RoundedImage } from './RoundedImage';
import Modal from '../Modal';
import { AppContext } from '@/app/theme-provider';
import axios from 'axios';

const initialData = Object.freeze({})
export const CreatePost = () => {
    const [postModal, setPostModal] = useState<boolean>(false);
    const [fromData, setFromData] = useState<any>(initialData);
    const {user,token}:any = useContext(AppContext);
    

    const from = new FormData()
    

    // useEffect(()=>{
    //     (async () => {
    //         let res = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/post/socials`,{headers:{
    //             "Authorization":token || " "
    //         }})
    //         let socialMediaStatus = res.data
    //         console.log("🚀 ~ file: CreatePost.tsx:25 ~ socialMediaStatus:", socialMediaStatus)
    //     })()
    // },[])

    return (
        <>
            <div className='bg-white p-7 rounded-[20px] border border-gray flex flex-row justify-center items-center gap-3'>

                <RoundedImage
                    className='w-[50px] h-[50px]'
                    adsImage='/girl.jpg'
                    adsAlt='' />
                <div className='bg-[#ECF1FF] rounded-[50px] w-[320px] p-3'>
                    <button onClick={() => setPostModal(true)} className=''> {`What's on your mind, Md. Aleam?`}</button>
                </div>


            </div>

            <Modal toggleState={postModal} actionOnBlur={() => setPostModal(false)} bodyClass=''>


                <div className="flex items-center justify-between pb-4 md:pb-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Post to all Social Platform
                    </h3>

                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5">

                    <form className="space-y-4" action="#">
                        <div className='flex flex-col gap-4 mb-4'>

                            <textarea className="resize-y rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-smfocus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="What's on your mind?"></textarea>
                            <input type="file" id="myFile" name="filename" />

                            <div className=' flex flex-col items-start bg-white px-7 py-5 gap-2 rounded-[20px] border border-gray '>

                                <h3 className='font-bold text-lg border-b pb-3'>Select your Pages and Groups to Post</h3>

                                {/* Facebook Pages */}

                                <h4 className='font-semibold text-[#017AB6]'>Facebook <span className='text-black text-sm'>({user?.facebook[0]?.name})</span></h4>

                                <div className='pl-3 flex flex-col gap-1'>
                                    <h4 className='font-medium text-sm text-[#017AB6]'>Pages</h4>
                                    { user?.facebook[0]?.pages?.map((page:any,i:number)=>(
                                        <>
                                        <div key={i} className='flex flex-row justify-start items-center gap-2 pl-2'>
                                        <input type="checkbox" className="border-gray-300 rounded h-3 w-3" />
                                            <RoundedImage
                                                className='w-[20px] h-[20px] border-2 !border-blue-400'
                                                adsImage={page?.profilePic}
                                                adsAlt='' />
                                            <p className='text-sm font-light'>{page?.pageName}</p>
                                            
                                        </div>
                                        {page?.instagram &&
                                        <div className='flex flex-row justify-start items-center gap-1 pl-5'>
                                                <h4 className='text-sm font-semibold text-gray-500'>Linked Instagram:</h4>
                                                <input type="checkbox" className="border-gray-300 rounded h-3 w-3" />
                                                <RoundedImage
                                                    className='w-[20px] h-[20px] border-2 !border-rose-300'
                                                    adsImage='/girl.jpg'
                                                    adsAlt='' />
                                                <p className='text-sm font-light'>{page?.instagram?.instagramName}</p>
                                        </div>}</>
                                    ))}
                                    

                                    {/* Linked Instagram */}
                                </div>
                                {/* Facebook Groups */}
                                     <div className='pl-3 flex flex-col gap-1'>
                                    <h4 className='font-medium text-sm text-[#017AB6]'>Groups</h4>
                                {user?.facebook[0]?.groups?.map((group:any,i:number) =>(
                                    <div key={i} className='flex flex-row justify-start items-center gap-2 pl-2'>
                                    <input type="checkbox" className="border-gray-300 rounded h-3 w-3" />
                                        <RoundedImage
                                            className='w-[20px] h-[20px] border-2 !border-blue-400'
                                            adsImage={group?.profilePic}
                                            adsAlt='' />
                                        <p className='text-sm font-light'>{group?.groupName}</p>
                                    </div>
                                ))}
                                </div>
                               

                                {/* Twitter */}
                                <h4 className='font-semibold text-[#017AB6]'>Twitter </h4>
                                <div className='pl-2 flex flex-col gap-1'>
                                    {user?.twitter ?
                                    <div className='flex flex-row justify-start items-center gap-2 pl-2'>
                                        <input type="checkbox" className="border-gray-300 rounded h-3 w-3" />
                                            <RoundedImage
                                                className='w-[20px] h-[20px] border-2 !border-blue-700'
                                                adsImage='/girl.jpg'
                                                adsAlt='' />
                                            <p className='text-sm font-light'>{user?.twitter?.name}</p>
                                    </div>
                                    : ""}
                                    
                                </div>

                                {/* LinkedIn Pages */}
                                <h4 className='font-semibold text-[#017AB6]'>LinkedIn </h4>
                                {user?.linkedin ?
                                <div className='pl-2 flex flex-col gap-1'>
                                <div className='flex flex-row justify-start items-center gap-2 pl-2'>
                                <input type="checkbox" className="border-gray-300 rounded h-3 w-3" />
                                        <RoundedImage
                                            className='w-[20px] h-[20px] border-2 !border-blue-400'
                                            adsImage={user?.linkedin?.proPic}
                                            adsAlt='' />
                                        <p className='text-sm font-light'>{user?.linkedin?.name}</p>
                                    </div>
                                </div> : 'Authenticate your linkedin account'}
                                

                                {/* <h4 className='font-semibold text-[#017AB6]'>Twitter Pages</h4>
                    <div className='pl-2 flex flex-col gap-1'>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                    </div>

             
                    <h4 className='font-semibold text-[#017AB6]'>Instagram Pages</h4>
                    <div className='pl-2 flex flex-col gap-1'>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                    </div> */}

                            </div>

                        </div>


                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">POST</button>

                    </form>
                </div>









            </Modal>

        </>

    )
}
