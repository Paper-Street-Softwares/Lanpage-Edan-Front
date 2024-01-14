import "../../src/style/css/componentsStyle/whatsappFormFixed.css"
import "../controllers/ControlarFormularioWhatsapp"
import { FaWhatsappSquare } from "react-icons/fa";
import {abrirForm, fecharForm} from "../controllers/ControlarFormularioWhatsapp";

function ButtonFixedWhatsapp(){
    return(
        <div>
            <div onClick={abrirForm} id="buttonWhatsappPopUp">
                <FaWhatsappSquare />
            </div>

            <div id="wrapPopupWhatsapp">

                <dialog id="popupWhatsapp">

                    <div id="wrap-contentForm">

                        <div id="exitButton"><p onClick={fecharForm}>X</p></div>

                        <div id="mensagem-formWhatsapp">
                            <div id="wrap-mensagem">
                                <p id="mensagemOla-form" >Olá, seja bem-vindo(a).</p>
                                <p id="mensagemInfos-form">Coloque suas informações para entrarmos em contato 😉</p>
                            </div>
                        </div>

                        <div id="inputs-formWhatsapp">
                            <div id="inputs-wrap">
                            <input id="place-name-whatsapp" type="text" placeholder="Nome"></input>
                            <input id="place-email-whatsapp" type="text" placeholder="Email"></input>
                            <input id="place-telefone-whatsapp" type="text" placeholder="Telefone"></input>
                            </div>
                        </div>

                        <div id="wrap-buttonAbrirWhatsapp">
                            <button id="button-abrirWhatsapp">Abrir WhatsApp</button>
                        </div>

                    </div>

                </dialog>

            </div>
        </div>
    )
}

export default ButtonFixedWhatsapp