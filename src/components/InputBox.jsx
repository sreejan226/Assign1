import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputBox = ({ name, type, id, value, placeholder, icon, onChange }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-full mb-4">
      <input
        name={name}
        type={type === "password" ? (passwordVisible ? "text" : "password") : type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md p-4 bg-gray-300 pl-12 pr-12 border border-gray-300 focus:bg-transparent placeholder:text-black"
      />

      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
        {icon}
      </span>

      
      {type === "password" && (
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
          onClick={() => setPasswordVisible((calVal) => !calVal)}
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}
    </div>
  );
};

export default InputBox;