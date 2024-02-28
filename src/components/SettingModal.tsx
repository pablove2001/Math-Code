import Modal from "@/components/Modal";

export default function SettingModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose} title="Setting">
      <div className=" bg-yellow-100">
        <h1>Test </h1>
      </div>
    </Modal>
  );
}
