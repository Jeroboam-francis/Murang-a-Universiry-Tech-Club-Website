import { FaClock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
function Contacts() {
  return (
    <div className="header-contacts">
      <HeaderContact text=" tel:+254746261731" icons={<FaPhone />} />
      <HeaderContact text=" zaphtours@gmail.com" icons={<IoMailUnread />} />
      <HeaderContact text=" Nairobi, Kenya" icons={<FaLocationDot />} />
      <HeaderContact text=" 24hrs 7 ays" icons={<FaClock />} />
    </div>
  );
}

export default Contacts;
