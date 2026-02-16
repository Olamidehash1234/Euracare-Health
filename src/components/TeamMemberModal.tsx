import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { TeamMemberResponse } from '../types/api-responses';

type TeamMemberModalProps = {
    isOpen: boolean;
    onClose: () => void;
    member: TeamMemberResponse;
};

export default function TeamMemberModal({ isOpen, onClose, member }: TeamMemberModalProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full sm:max-w-[550px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="relative mb-4 overflow-hidden rounded-t-[12px] bg-gray-200 h-[270px] lg:h-[390px]">
                                        <img
                                            src={member.profile_picture_url || ''}
                                            alt={member.full_name}
                                            className="w-full object-cover transition-transform duration-300"
                                        />
                                </div>

                                <Dialog.Title
                                    as="h3"
                                    className="text-[18px] font-medium leading-6 text-[#000]"
                                >
                                    {member.full_name}
                                </Dialog.Title>
                                <p className="text-sm text-gray-600 italic mt-1">
                                    {member.role}
                                </p>

                                {member.bio && (
                                    <div className="mt-4 max-h-[140px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                        <p className="text-sm sm:text-[16px] text-gray-500">
                                            {member.bio}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-6">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent bg-[#0C2141] px-4 py-2 text-sm font-medium text-white hover:bg-[#0C2141]/90"
                                        onClick={onClose}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
