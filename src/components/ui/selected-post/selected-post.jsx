import { Modal, ModalImage } from './styled';

export default function SelectedPost({ post, onClose }) {
  return (
    <Modal onClick={() => onClose()}>
      <ModalImage
        src={`/${post.image}`}
        alt={post.alternativeText}
      />
    </Modal>
  );
}
