'use client'

import Image from "next/image";
import '../../../styles/pages/home/home.css';
import homeBannerImg from '../../../styles/images/pages/home/homeLogo.png'
import { useRouter } from "next/navigation";

export default function ForgotPasswordOtp() {

    const router = useRouter()

    return (
        <div className="home d-flex align-items-center justify-content-center row mx-0">
            <div className="d-flex flex-column align-items-center justify-content-center col-10 col-lg-4 col-md-4 col-sm-10 bg-dark rounded-4 shadow-lg py-5 px-3">
                <Image className="home-logo" src={homeBannerImg} alt="home-logo" />
                <div className="row d-flex mx-0 px-0 w-100 mt-4">
                    <div className="col-6 px-1">
                        <div className="text-white mb-2 fs-5">کد تایید</div>
                        <input type="userName" className="form-control" placeholder="کد تاییدی که دریافت نمودید را وارد کنید" />
                    </div>
                    <div className="col-6 px-1">
                        <div className="text-white mb-2 fs-5">کلمه عبور</div>
                        <input type="password" className="form-control" placeholder="کلمه عبور جدید خود را وارد کنید" />
                    </div>
                </div>
                <button className="py-2 px-5 white-button rounded border-0 shadow-lg mt-5 w-100" onClick={() => router.push('/sign-in')}>تغییر رمز عبور</button>
            </div>
        </div>
    );
}
