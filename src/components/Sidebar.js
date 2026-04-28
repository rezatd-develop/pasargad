'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import logoImg from '../styles/images/pages/home/homeLogo.png'
import { HiUsers } from "react-icons/hi";

export default function Sidebar({ menuItems }) {
    const [collapsed, setCollapsed] = useState(false);
    const [openItem, setOpenItem] = useState(null);

    const toggleSidebar = () => setCollapsed(!collapsed);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div
            className={`bg-dark text-white vh-100 d-flex flex-column`}
            style={{
                width: collapsed ? '70px' : '300px',
                transition: 'width 0.3s ease',
            }}
        >
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                {!collapsed && <Image className='logo-image' alt='logo' src={logoImg} />}
                <FaBars style={{ cursor: 'pointer' }} onClick={toggleSidebar} />
            </div>
            <div className="flex-grow-1 overflow-auto mt-2">

                {menuItems.map((item) => {
                    const isOpen = openItem === item.id;

                    return (
                        <div key={item.id}>
                            <div
                                className="d-flex justify-content-between align-items-center px-3 py-2"
                                style={{ cursor: 'pointer', fontSize: '18px' }}
                                onClick={() => toggleItem(item.id)}
                            >
                                <span className="d-flex align-items-center gap-2">
                                    {!collapsed && item?.icon}
                                    {!collapsed && item.name}
                                </span>

                                {!collapsed && (
                                    <FaChevronDown
                                        style={{
                                            transition: 'transform 0.3s',
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        }}
                                    />
                                )}
                            </div>

                            {/* Children with animation */}
                            <div
                                style={{
                                    maxHeight: isOpen ? '500px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {item.children.map((child) => (
                                    <Link
                                        key={child.id}
                                        href={child.href}
                                        className="d-block text-decoration-none text-light px-4 py-2"
                                        style={{ fontSize: '14px' }}
                                    >
                                        {!collapsed && child.name}
                                    </Link>
                                ))}
                            </div>

                        </div>
                    );
                })}

            </div>
        </div>
    );
}