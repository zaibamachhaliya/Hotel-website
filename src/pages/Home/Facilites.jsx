import {
  MdWifi,
  MdAcUnit,
  MdLocalParking,
  MdChair,
  MdTv,
} from "react-icons/md";
import {
  FaConciergeBell,
  FaBroom,
  FaShower,
  FaSmokingBan,
  FaSoap,
  FaWater,
  FaBed,
} from "react-icons/fa";

function Facilities() {
  const facilitiesList = [
    {
      icon: <MdWifi size={40} color="#c47a2c" />,
      title: "Free Wi-Fi",
      desc: "Stay connected with high-speed internet throughout the property.",
    },
    {
      icon: <MdAcUnit size={40} color="#c47a2c" />,
      title: "Air Conditioner",
      desc: "Enjoy perfectly cooled rooms with climate-controlled comfort.",
    },
    {
      icon: <MdLocalParking size={40} color="#c47a2c" />,
      title: "Limited Parking",
      desc: "Safe and convenient parking spaces for guests.",
    },
    {
      icon: <FaConciergeBell size={40} color="#c47a2c" />,
      title: "Concierge Service",
      desc: "Assistance for everything you need — from taxis to tours.",
    },
    {
      icon: <FaBroom size={40} color="#c47a2c" />,
      title: "Daily Housekeeping",
      desc: "Clean, fresh rooms maintained daily for your comfort.",
    },
    {
      icon: <FaShower size={40} color="#c47a2c" />,
      title: "Rain Shower",
      desc: "Refresh yourself with a luxurious rain-style shower.",
    },
    {
      icon: <FaSmokingBan size={40} color="#c47a2c" />,
      title: "Non-Smoking Rooms",
      desc: "Smoke-free rooms for a healthy and pleasant stay.",
    },
    {
      icon: <MdChair size={40} color="#c47a2c" />,
      title: "Desk & Chair",
      desc: "Comfortable workspace for business or leisure needs.",
    },
    {
      icon: <MdTv size={40} color="#c47a2c" />,
      title: "Smart TV",
      desc: "Watch your favorite shows with premium entertainment options.",
    },
    {
      icon: <FaSoap size={40} color="#c47a2c" />,
      title: "Fresh Towels & Toiletries",
      desc: "Enjoy daily fresh towels, soap, shampoo, and all essentials.",
    },
    {
      icon: <FaWater size={40} color="#c47a2c" />,
      title: "Hot & Cold Water",
      desc: "24×7 supply of clean hot and cold water.",
    },
    {
      icon: <FaBed size={40} color="#c47a2c" />,
      title: "Cloud Beds",
      desc: "Soft and cozy beds for a restful night’s sleep.",
    },
  ];

  return (
    <section
      className="facilities"
      style={{
        padding: "80px 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.5rem",
            color: "#c47a2c",
            marginBottom: "10px",
          }}
        >
          Our Facilities
        </h2>
        <p
          className="subtitle"
          style={{ color: "#555", fontSize: "1.1rem", marginBottom: "50px" }}
        >
          Experience unmatched comfort with all the modern amenities you
          deserve.
        </p>

        <div
          className="facilities-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          {facilitiesList.map((facility, index) => (
            <div
              key={index}
              className="facility-card"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                padding: "30px 20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                border: "1px solid #f0d9b5",
                cursor: "default",
              }}
            >
              <div style={{ marginBottom: "15px" }}>{facility.icon}</div>
              <h3
                style={{
                  color: "#333",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                {facility.title}
              </h3>
              <p
                style={{
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: "1.4",
                }}
              >
                {facility.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
