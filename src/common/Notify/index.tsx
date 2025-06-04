import {toast} from 'react-toastify';

export const SuccessNotifier = (status:string) => toast.success(status, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress:undefined
});

export const ErrorNotifier = (status:string) => toast.error(status, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress:undefined
});

export const WarningNotifier = (status:string) => toast.warning(status, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress:undefined
});

export const InfoNotifier = (status:string) => toast.info(status, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress:undefined
});