// window.onload = function() {
//     console.log("funcionou")
//     const pegarBtn = document.getElementById('form-whatsapp');

//     pegarBtn.addEventListener('click', function(){
//         pegarBtn.showModal();
//     });
// };

function abrirForm(){
    const pegarBtn = document.getElementById('popupWhatsapp');
    pegarBtn.showModal();
}

function fecharForm(){
    const pegarBtn = document.getElementById('popupWhatsapp');
    pegarBtn.close()
}

export {abrirForm, fecharForm}
