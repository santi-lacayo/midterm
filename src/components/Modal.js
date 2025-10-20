import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

const Modal = (props) => {
  const { title, children, onClose, actionBar, crazy, transparent } = props;

  // disable page scroll when modal is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  //overlay color logic
  const overlayClass = transparent
    ? 'fixed inset-0 bg-black bg-opacity-80 z-40' // darker overlay for image modal
    : 'fixed inset-0 bg-gray-300 bg-opacity-50 z-40'; // lighter overlay for buy modal

  //modal window logic
  const windowClass = cx('fixed inset-0 flex items-center justify-center z-50', {
    'inset-40 p-10 bg-white rounded-lg': !transparent, // white box for normal modals
    'p-0 bg-transparent': transparent, // no box for image modal
    'rounded-lg': crazy,
  });

  return ReactDOM.createPortal(
    <>
      {/* single overlay — closes modal when clicked */}
      <div onClick={onClose} className={overlayClass}></div>

      {/* modal window (content area) */}
      <div className={`${windowClass} pointer-events-none`}>
        <div className="relative flex flex-col justify-center items-center h-full text-center pointer-events-autor">
          {/* title only for non-transparent modals */}
          {!transparent && title && <h2 className="text-2xl mb-4">{title}</h2>}

          {/* children content */}
          {children}

          {/* action bar only for non-transparent modals */}
          {!transparent && (
            <div className="flex justify-end mt-6">{actionBar}</div>
          )}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;