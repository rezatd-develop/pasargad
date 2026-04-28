'use client'

import Image from "next/image";
import '../../styles/pages/home/home.css';
import homeBannerImg from '../../styles/images/pages/home/homeLogo.png'
import { useRouter } from "next/navigation";

export default function ForgotPassword() {

    const router = useRouter()

    return (
        <div className="home d-flex align-items-center justify-content-center row mx-0">
            <div className="d-flex flex-column align-items-center justify-content-center col-10 col-lg-4 col-md-4 col-sm-10 bg-dark rounded-4 shadow-lg py-5 px-3">
                <Image className="home-logo" src={homeBannerImg} alt="home-logo" />
                <div className="w-100 mt-3">
                    <div className="text-white mb-2 fs-5">کد ملی</div>
                    <input type="password" className="form-control" placeholder="کد ملی خود را وارد نمایید" />
                </div>
                <div className="w-100 mt-3">
                    <div className="text-white mb-2 fs-5">شماره تلفن</div>
                    <input type="userName" className="form-control" placeholder="شماره تلفن خود را وارد نمایید" />
                </div>
                <div className="d-flex justify-content-between text-white w-100 mt-2">
                    <div className="cursor-pointer" onClick={() => router.push('/sign-up')}>ثبت نام</div>
                </div>
                <button className="py-2 px-5 white-button rounded border-0 shadow-lg mt-5 w-100" onClick={() => router.push('/forgot-password/otp')}>دریافت کد تایید</button>
            </div>
        </div>
    );
}
