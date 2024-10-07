import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <html lang='en'>

        <head>
          <meta charset='UTF-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>Voluntário Aceito</title>

          <style>
            :root {
              --primaryColor: "blue";
    }

            * {
              margin: 0;
            padding: 0;
            font-family: Poppins, Arial, sans-serif;
            line-height: 1.4;
    }

            body {
              background: #f1f1f1;
    }
          </style>
        </head>

        <body>
          <div class='container' style='max-width: 800px; width: 95%; padding: 20px; margin: 10px auto; '>
            <header class='header'
              style='width: 100%; background-color:var(--primaryColor); display: flex; align-items: center; justify-content: center; padding: 20px 0px; height: 15vh;'>
              <img src={{ logo }} alt='logo empresa' style='margin: 10px auto;' />
            </header>

            <div class='content'
              style='background-color: #fff; padding: 20px 0; min-height: 80vh; width: 100%; position: relative; max-height: 120vh;'>

              <div class='contentMessage'
                style='width: 95%; margin: 10px auto; background-color: #fff; padding: 10px; border-radius: 60px; max-height: 90%; min-height: 80vh; position: relative; overflow-y: auto;'>

                <div class='contentText' style='width: 100%; padding: 10px;'>
                  <h1 class='title' style='color: `${{primaryColor}}`; font-size: 28; text-align: start; margin-bottom: 20px;'>
                    Olá
                    {{ userName }}!
                  </h1>

                  <p class='paragraph' style='text-align: start; font-size: 16px; margin: 10px auto; color: #000;'>
                    Parabéns! É com grande prazer que informamos que você foi
                    aceito(a) para participar da atividade no projeto
                    {{ projectName }}. Agradecemos pelo seu interesse e comprometimento
                    em contribuir para essa iniciativa social.
                  </p>
                  <p class='paragraph' style='text-align: start; font-size: 16px; margin: 10px auto; color: #000;'>
                    Acesse a plataforma para obter mais detalhes e iniciar suas
                    atividades.
                  </p>
                  <p class='paragraph' style='text-align: start; font-size: 16px; margin: 10px auto; color: #000;'>
                    Fique atento(a) às notificações futuras, pois poderemos fornecer
                    atualizações ou informações adicionais antes da atividade. Se
                    tiver alguma dúvida, sinta-se à vontade para acionar o
                    moderador(a) para esclarecimentos.
                  </p>
                  <p class='paragraph' style='text-align: start; font-size: 16px; margin: 10px auto; color: #000;'>
                    Mais uma vez, agradecemos por se juntar ao projeto [NOME DO
                    PROJETO]. Estamos ansiosos para trabalhar com você!
                  </p>
                  <p class='paragraph' style='text-align: start; font-size: 16px; margin: 10px auto; color: #000;'>
                    Convidamos você a acessar o link fornecido para obter mais
                    detalhes sobre a vaga. Seria maravilhoso contar com seu apoio para
                    fazer a diferença na vida de quem precisa. Juntos, podemos criar
                    um impacto positivo!
                  </p>
                  <button
                    style='width: 250px; background-color: `${{primaryColor}}`; font-size: 14px; padding: 10px 2px; border-radius: 4px; margin: 10px 0; border: 0; color: #fff; font-weight: bold;'>
                    <a href='{{url}}' style='text-decoration: none; color: #fff;'>
                      Acesse a plataforma
                    </a>
                  </button>

                  <p class='paragraph' style='text-align: start; font-size: 16px; margin: 10px auto; color: #000;'>
                    Com carinho, [NOME DA OSC/EMPRESA]!
                  </p>
                  <div class='footerContent'
                    style='width: 95%; height: 15vh; margin: 30px 0; padding: 20px; background-color: `${{primaryColor}}`; display: flex; align-items: center; justify-content: space-between;'>
                    <p class='pFooter' style='color: #fff; font-size: 18px; max-width: 300px;'>
                      Este email foi enviado pela plataforma
                      <strong>Volunt</strong>
                      em nome de
                      {{ organizationName }}.
                    </p>
                    <img src='https://app.volunt.me/assets/email/logoVolunt.svg' alt='logo volunt'
                      style='margin: 10px 40px 10px 10px;' />

                  </div>

                </div>
              </div>

            </div>

          </div>

        </body>

      </html>
    </>
  );
}
