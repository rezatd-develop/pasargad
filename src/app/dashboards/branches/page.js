import AdminLayout from '@/components/AdminLayout';
import BranchTable from '@/components/BranchTable';
import UserTable from '@/components/UserTable';

export default function AdminPage() {
    return (
        <AdminLayout>

            <h3>داشبورد</h3>
            <p>به پنل مدیریت خوش آمدید 👋</p>

            <div className="row mt-4">
                {[
                    { title: 'شعبات', value: 217 },
                    { title: 'شعبه های نیاز به کارمند', value: 35 },
                    { title: 'درخواست ها', value: 89 },
                ].map((item, i) => (
                    <div className="col-md-3" key={i}>
                        <div className="p-3 text-center shadow rounded overall-card cursor-pointer">
                            <h5>{item.title}</h5>
                            <h4>{item.value}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <BranchTable />
            </div>

        </AdminLayout>
    );
}