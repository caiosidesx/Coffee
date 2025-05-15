/*Criando eventos JS com o Modal */

const modal = document.getElementById("modal-menu");
const openModal = document.getElementById("btn-open");
const closeModal = document.getElementById("btn-close")

// Função para abrir o modal

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Função para fechar o modal

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Permitir ao usuário enviar mensagem ao Whatsapp da Cafeteria

const mensagem = document.getElementById("whatsappButton").addEventListener("click", function() {
    let telefone = "5579998657485";
    let mensagem = encodeURIComponent("Olá, preciso de ajuda!.");
    let url = `https://wa.me/${telefone}?text=${mensagem}`;
    window.open(url, "_blank");
});