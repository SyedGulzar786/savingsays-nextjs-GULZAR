import Swal from "sweetalert2";

export const Toast = (icon, title) => {
    let Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    });

    return Toast.fire({ icon, title })
}

export const ShowError = (message) => {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
    })
}

export const ShowOk = (message) => {
    Swal.fire({
        title: '',
        text: message,
        icon: 'success',
    })
}