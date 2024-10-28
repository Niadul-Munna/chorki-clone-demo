"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneForm = () => {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"bd"}
      value={phone}
      onChange={(phone) => setPhone(phone)}
    />
  );
};

export default PhoneForm;
