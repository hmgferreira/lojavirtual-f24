import Swal from 'sweetalert2';

const Message = {
    success: (msg) => {
        Swal.fire(
            'Sucesso',
            msg,
            'success'
        );
    },
    error: (msg) => {
        Swal.fire(
            'Atenção',
            msg,
            'error'
        );
    },
    info: (msg) => {
        Swal.fire(msg, '', 'info');
    }
};




export default Message;