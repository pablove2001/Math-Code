import Image from "next/image";

interface ModalProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-row justify-between items-center p-2 space-x-4">
          <h2>{title}</h2>
          <Image
            src="/close-icon.png"
            width={25}
            height={25}
            alt="Picture of the author"
            className="hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
