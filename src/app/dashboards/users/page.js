import AdminLayout from '@/components/AdminLayout';
import UserTable from '@/components/UserTable';

export default function AdminPage() {
  return (
    <AdminLayout>

      <h3>داشبورد</h3>
      <p>به پنل مدیریت خوش آمدید 👋</p>

      <div className="row mt-4">
        {[ 
          { title: 'کارمندان', value: 2890 },
          { title: 'نیاز به جابه‌جایی', value: 964 },
          { title: 'درخواست ها', value: 89 },
          { title: 'شکایت ها', value: 12 },
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
        <UserTable />
      </div>

    </AdminLayout>
  );
}