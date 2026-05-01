"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user
    console.log(user, "profile");
    return (
        <div className='max-w-5xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-3  gap-10 my-10'>

            <div className='border border-gray-200 rounded-2xl shadow-2xl lg:col-span-1 space-y-3 p-2'>
                <div>
                    <div className='flex justify-center items-center '>
                    <Avatar className='h-35 w-35 mt-5 border-4 border-indigo-700 shadow-2xl p-2'>
                        <Avatar.Image
                            alt={user?.name}
                            src={user?.image}
                            referrerPolicy='no-referrer'
                        />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                </div>
                </div>

                <div className='text-center'>
                    <h3 className='text-2xl font-bold text-[#0B1C30]'>{user?.name}</h3>
                    <p className='text-xs text-[#777587]'>{user?.email}</p>
                </div>

                <div className='p-4 space-y-3'>
                    <p className='flex items-center justify-center p-2 bg-indigo-100 rounded-xl gap-3 text-sm'>
                        <FaGraduationCap size={20} className="text-indigo-600" />
                        Senior Learning Path</p>
                    <p className='flex items-center justify-center p-2 bg-indigo-100 rounded-xl gap-3 text-sm'>
                        <RiVerifiedBadgeFill size={20} className="text-green-600" />
                        12 Certificates Earned</p>
                </div>
                <div className='p-4'>
                    <button className='btn btn-primary w-full'><FaPencil />Update Information</button>
                </div>
            </div>

            <div className='col-span-1 lg:col-span-2 p-6 border border-gray-200 shadow space-y-3 rounded-2xl'>
                <div>
                    <h2 className='text-[#0B1C30] text-2xl font-semibold'>Profile Settings</h2>
                    <p className='text-sm text-[#777587]'>Manage your public identity and digital presence across SkillSphere.</p>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-5'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-xs font-semibold text-[#464555]">Name</legend>
                        <input type="text" className="input bg-base-200 " placeholder="Enter Name" />
                    </fieldset>

                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-xs font-semibold text-[#464555]">Email</legend>
                        <input type="text" className="input bg-base-200" placeholder="Enter Email" />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[#464555]">Image URL</legend>
                        <input type="text" className="input lg:w-full bg-base-200" placeholder="Enter Image URL" />
                        <p className="label text-xs text-gray-400">Provide a direct link to your preferred avatar image.</p>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[#464555]">Your bio</legend>
                        <textarea className="textarea h-24 bg-base-200" placeholder="Bio"></textarea>
                        
                    </fieldset>
                </div>
                <div className='flex flex-col gap-3 sm:flex-row justify-between items-center'>
                    <button className='btn btn-primary btn-outline w-full sm:w-auto'>Cancel Change</button>
                    <button className='btn btn-primary w-full sm:w-auto'>Update Information</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;