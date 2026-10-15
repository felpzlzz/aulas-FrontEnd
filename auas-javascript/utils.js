export function saudacao(nome = 'Visitante') {
    console.log(`Olá, ${nome}`);
  }
  
  export const dobro = n => n * 2;
  
  export const formatarMoeda = valor => {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;
  }
  
  export function validarEmail(email) {
      return email.includes("@") && email.includes(".");
  }
  
  export function obterDataFormatada() {
      const data = new Date();
  
      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      const ano = data.getFullYear();
  
      return `${dia}/${mes}/${ano}`;
  }