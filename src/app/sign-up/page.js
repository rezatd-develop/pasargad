'use client'

import Image from "next/image";
import '../../styles/pages/home/home.css';
import homeBannerImg from '../../styles/images/pages/home/homeLogo.png'
import { useRouter } from "next/navigation";

export default function SignUp() {

    const router = useRouter()

    return (
        <div className="home d-flex align-items-center justify-content-center row mx-0">
            <div className="d-flex flex-column align-items-center justify-content-center col-10 col-lg-4 col-md-4 col-sm-10 bg-dark rounded-4 shadow-lg py-5 px-3">
                <Image className="home-logo" src={homeBannerImg} alt="home-logo" />
                <div className="row d-flex mx-0 px-0 w-100 mt-4">
                    <div className="col-6 px-1">
                        <div className="text-white mb-2 fs-5">نام</div>
                        <input type="userName" className="form-control" placeholder="نام خود را وارد کنید " />
                    </div>
                    <div className="col-6 px-1">
                        <div className="text-white mb-2 fs-5">نام خانوادگی</div>
                        <input type="password" className="form-control" placeholder="نام خانوادگی خود را وارد کنید" />
                    </div>
                </div>
                <div className="w-100 mt-3">
                    <div className="text-white mb-2 fs-5">کد ملی</div>
                    <input type="password" className="form-control" placeholder="کد ملی خود را وارد کنید" />
                </div>
                <div className="row d-flex mx-0 px-0 w-100 mt-4">
                    <div className="col-6 px-1">
                        <div className="text-white mb-2 fs-5">نام کاربری</div>
                        <input type="userName" className="form-control" placeholder="نام کاربری خود را وارد کنید " />
                    </div>
                    <div className="col-6 px-1">
                        <div className="text-white mb-2 fs-5">کلمه عبور</div>
                        <input type="password" className="form-control" placeholder="کلمه عبور خود را وارد کنید" />
                    </div>
                </div>
                <div className="w-100 mt-2 px-1">
                    <div className="cursor-pointer text-white" onClick={() => router.push('/sign-in')}>در حال حاظر حساب دارم</div>
                </div>
                <button className="py-2 px-5 white-button rounded border-0 shadow-lg mt-5 w-100" onClick={() => router.push('/sign-up')}>ثبت نام</button>
            </div>
        </div>
    );
}
