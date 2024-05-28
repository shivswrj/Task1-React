import React from "react";
import Card from "../components/card";
import { IoAddCircle } from "react-icons/io5";
export default function SingleCard() {
  return (
    <div
      className="container-fluid d-flex flex-wrap align-items-center justify-content-center p-5"
      style={{ backgroundColor: "#F7FDFF" }}
    >
      <Card
        variant="#0096C8"
        icon={<IoAddCircle />}
        title="Add your own"
        text="Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page"
        buttontext="Add new "
        onlyone={true}
      />
    </div>
  );
}
