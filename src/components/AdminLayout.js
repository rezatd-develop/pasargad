import Sidebar from '@/components/Sidebar';
import { HiUsers } from "react-icons/hi";
import { BsBank2 } from "react-icons/bs";
import '../styles/pages/admin/global.css';

export default function AdminLayout({ children }) {

    const menuItems = [
        {
            id: 1, name: 'کاربران', href: '/dashboards/users', icon: <HiUsers />,
            children: [
                { id: 1001, name: 'کارمندان', href: '/dashboards/users' },
                { id: 1002, name: 'مدیران', href: '/dashboards/users' },
                { id: 1003, name: 'مجریان', href: '/dashboards/users' },
            ]
        },
        {
            id: 2, name: 'شعب', href: '/dashboards/branches', icon: <BsBank2 />,
            children: [
                { id: 2001, name: 'شعب اصلی', href: '/dashboards/branches' },
            ]
        },
    ];

    return (
        <div className="d-flex">
            <Sidebar menuItems={menuItems} />
            <div className="flex-grow-1 p-3">
                {children}
            </div>
        </div>
    );
}