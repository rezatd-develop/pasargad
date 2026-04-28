'use client'

import Image from "next/image";
import '../styles/pages/home/home.css';
import homeBannerImg from '../styles/images/pages/home/homeLogo.png'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (
    <div className="home d-flex align-items-center justify-content-center row mx-0">
      <div className="d-flex flex-column align-items-center justify-content-center col-10 col-lg-4 col-md-4 col-sm-10 bg-dark rounded-4 shadow-lg py-5">
        <Image className="home-logo" src={homeBannerImg} alt="home-logo" />
        <div className="text-white fs-5 text-center shadow-lg my-3">به سیستم مدیریت کارمندان بانک پاسارگاد <br /> خوش آمدید.</div>
        <div className="mt-4 d-flex gap-2">
          <button className="py-2 px-5 white-button rounded border-0 shadow-lg">ثبت نام</button>
          <button className="py-2 px-5 white-button rounded border-0 shadow-lg" onClick={() => router.push('/sign-in')}>ورود</button>
        </div>
      </div>
    </div>
  );
}
