import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="border-t-2 border-[#b39a815c] mt-28 text-gray-700 py-10 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-lg font-bold mb-4">فروشگاه دیجی شاپ</h2>
          <p className="text-sm leading-6 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد،
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">لینک های مهم</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/shop">فروشگاه</Link>
            </li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">شبکه های اجتماعی</h3>
          <div className="flex space-x-4">
            <FaInstagram className="text-2xl cursor-pointer ml-3" />
            <FaWhatsapp className="text-2xl cursor-pointer ml-3" />
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white shadow-md p-6 rounded-lg flex flex-col items-start md:flex-row justify-around md:items-center">
        <div className="flex items-center space-x-2">
          <FaClock className="text-2xl ml-3" />
          <p className="text-sm">ساعت کاری: شنبه تا پنجشنبه: 10 الی 22</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <FaPhone className="text-2xl ml-3" />
          <p className="text-sm">09911464171</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <FaSearchLocation className="text-2xl ml-3" />
          <p className="text-sm"> تبریز - چایکنار - مجتمع ارک </p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        کلیه حقوق این سایت متعلق به فروشگاه دیجی شاپ میباشد
      </p>
    </div>
  );
};
export default Footer;
