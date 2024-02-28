import Image from "next/image";
import { useState } from "react";
import SettingModal from "@/components/SettingModal";

export default function SettingIcon() {
  const [showModal, setShowSettingModal] = useState(false);

  const closeModal = (): void => {
    setShowSettingModal(false);
  };

  return (
    <div className="fixed top-4 right-4 flex justify-center">
      <Image
        src="/configuration-icon.png"
        width={40}
        height={40}
        alt="Picture of the author"
        onClick={() => {
          setShowSettingModal(true);
        }}
        className="hover:cursor-pointer"
      />
      {showModal && <SettingModal onClose={closeModal} />}
    </div>
  );
}
