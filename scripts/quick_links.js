const DEFAULT_TEXT = 'Quick Links'
const PRINT_SPEED = 25;
var printInd = 0;

var textToPrint = '';

function resetTooltip() {
    document.getElementById("tooltip").innerHTML = DEFAULT_TEXT;
    document.getElementById("tooltip").style.color = 'white';
    printInd = 0;
    textToPrint = '';
}

function setTooltipText(newText) {
    document.getElementById("tooltip").style.color = 'white';
    document.getElementById("tooltip").innerHTML = '';
    textToPrint = newText;
    printTooltip();
}

function printTooltip() {
    if (printInd < textToPrint.length) {
        document.getElementById("tooltip").innerHTML += textToPrint.charAt(printInd);
        printInd++;
        setTimeout(printTooltip, PRINT_SPEED);
    } else {
        textToPrint = '';
        printInd = 0;
    }
}

const EMAIL_ADDRESS = 'dsrnjhszz@gmail.com';

function copyEmail(email) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(email);
    }
    return new Promise(function (resolve, reject) {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.top = '-9999px';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy') ? resolve() : reject();
        } catch (err) {
            reject(err);
        } finally {
            document.body.removeChild(textArea);
        }
    });
}

function showCopyToast(anchor, message) {
    const toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    const rect = anchor.getBoundingClientRect();
    toast.style.left = rect.left + 'px';
    toast.style.top = (rect.bottom + 8) + 'px';

    requestAnimationFrame(function () {
        toast.classList.add('visible');
    });

    setTimeout(function () {
        toast.classList.remove('visible');
        setTimeout(function () {
            toast.remove();
        }, 200);
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function () {
    const emailLink = document.getElementById('email-link');
    if (!emailLink) {
        return;
    }
    emailLink.addEventListener('click', function (event) {
        event.preventDefault();
        copyEmail(EMAIL_ADDRESS)
            .then(function () {
                showCopyToast(emailLink, 'Email copied');
            })
            .catch(function () {
                showCopyToast(emailLink, EMAIL_ADDRESS);
            });
    });
});