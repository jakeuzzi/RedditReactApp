import Popup from 'reactjs-popup';
import '../popup.css';

const PopupCustom = (props) => {
    return (
        <Popup open={props.open} closeOnDocumentClick onClose={props.closeModal}>
        <div className="modal">
          <a className="close" onClick={props.closeModal}>
            &times;
          </a>
          {props.children}
        </div>
      </Popup>
    );
}

export default PopupCustom;
