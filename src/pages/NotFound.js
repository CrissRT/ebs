import { jsx as _jsx } from "react/jsx-runtime";
import icon from "/assets/404.png";
const NotFound = () => {
    return (_jsx("div", { className: 'h-screen flex justify-center items-center', children: _jsx("img", { src: icon, className: 'h-screen max-h-[1000px]' }) }));
};
export default NotFound;
