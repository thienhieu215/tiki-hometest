import { Modal, Button } from 'react-bootstrap'
import style from './Dialog.module.scss'

const ConfirmDialog = ({ isOpen, handleClose, content, agreeContent, closeContent, func, isConfirmDialog }: ConfirmDialogProps) => {

  return (
    <Modal centered show={isOpen} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body>
        <div className={style.content}>{content}</div>
      </Modal.Body>

      <Modal.Footer>
        {isConfirmDialog
          ?
          <>
            <Button size="sm" onClick={handleClose} variant="outline-secondary">{closeContent}</Button>
            <Button size="sm" variant="danger" onClick={func}>{agreeContent}</Button>
          </>
          :
          <Button onClick={handleClose} variant="outline-primary">{closeContent}</Button>
        }
      </Modal.Footer>
    </Modal>
  );
};

type ConfirmDialogProps = {
  isOpen: boolean,
  handleClose: () => void,
  content: string,
  agreeContent: string,
  closeContent: string,
  func?: () => void,
  isConfirmDialog: boolean
}

export default ConfirmDialog;
