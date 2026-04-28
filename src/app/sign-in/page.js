'use client'

import Image from "next/image";
import '../../styles/pages/home/home.css';
import homeBannerImg from '../../styles/images/pages/home/homeLogo.png'
import { useRouter } from "next/navigation";

export default function SignIn() {

    const router = useRouter()

    return (
        <div className="home d-flex align-items-center justify-content-center row mx-0">
            <div className="d-flex flex-column align-items-center justify-content-center col-10 col-lg-4 col-md-4 col-sm-10 bg-dark rounded-4 shadow-lg py-5 px-3">
                <Image className="home-logo" src={homeBannerImg} alt="home-logo" />
                <div className="w-100 mt-5">
                    <div className="text-white mb-2 fs-5">نام کاربری</div>
                    <input type="userName" className="form-control" placeholder="نام کاربری خود را وارد کنید" />
                </div>
                <div className="w-100 mt-3">
                    <div className="text-white mb-2 fs-5">رمز عبور</div>
                    <input type="password" className="form-control" placeholder="رمز عبور خود را وراد کنید" />
                </div>
                <div className="d-flex justify-content-between text-white w-100 mt-1">
                    <div className="cursor-pointer" onClick={() => router.push('/forgot-password')}>رمز عبور خود را فراموش کرده ام</div>
                    <div className="cursor-pointer" onClick={() => router.push('/sign-up')}>ثبت نام</div>
                </div>
                <button className="py-2 px-5 white-button rounded border-0 shadow-lg mt-5 w-100" onClick={() => router.push('/dashboard/users')}>ورود</button>
            </div>
        </div>
    );
}
