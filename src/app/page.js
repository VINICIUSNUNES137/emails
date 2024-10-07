import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const logo = "https://volunt.me/wp-content/uploads/2020/06/logo-da-volunt.png";
  const userName = "Volunt.me";
  const projectName = "My project";
  const organizationName = "Name Organization";
  const primaryColor = "#3498db"; // Definição da cor primária
  const url = "volunt.me"; // Exemplo de URL

  return (
    <div
      className="container"
      style={{
        maxWidth: "800px",
        width: "95%",
        padding: "20px",
        margin: "10px auto",
      }}
    >
      <header
        className="header"
        style={{
          width: "100%",
          backgroundColor: primaryColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 0",
          height: "15vh",
        }}
      >
        <img src={logo} alt="logo empresa" style={{ margin: "10px auto" }} />
      </header>

      <div
        className="content"
        style={{
          backgroundColor: "#fff",
          padding: "20px 0",
          minHeight: "80vh",
          width: "100%",
          position: "relative",
          maxHeight: "120vh",
        }}
      >
        <div
          className="contentMessage"
          style={{
            width: "95%",
            margin: "10px auto",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "60px",
            maxHeight: "90%",
            minHeight: "80vh",
            position: "relative",
            overflowY: "auto",
          }}
        >
          <div className="contentText" style={{ width: "100%", padding: "10px" }}>
            <h1
              className="title"
              style={{
                color: primaryColor,
                fontSize: "28px",
                textAlign: "start",
                marginBottom: "20px",
              }}
            >
              Olá {userName}!
            </h1>

            <p
              className="paragraph"
              style={{
                textAlign: "start",
                fontSize: "16px",
                margin: "10px auto",
                color: "#000",
              }}
            >
              Parabéns! É com grande prazer que informamos que você foi aceito(a) para participar da
              atividade no projeto {projectName}. Agradecemos pelo seu interesse e comprometimento
              em contribuir para essa iniciativa social.
            </p>
            <p
              className="paragraph"
              style={{
                textAlign: "start",
                fontSize: "16px",
                margin: "10px auto",
                color: "#000",
              }}
            >
              Acesse a plataforma para obter mais detalhes e iniciar suas atividades.
            </p>
            <p
              className="paragraph"
              style={{
                textAlign: "start",
                fontSize: "16px",
                margin: "10px auto",
                color: "#000",
              }}
            >
              Fique atento(a) às notificações futuras, pois poderemos fornecer atualizações ou
              informações adicionais antes da atividade. Se tiver alguma dúvida, sinta-se à vontade
              para acionar o moderador(a) para esclarecimentos.
            </p>
            <p
              className="paragraph"
              style={{
                textAlign: "start",
                fontSize: "16px",
                margin: "10px auto",
                color: "#000",
              }}
            >
              Mais uma vez, agradecemos por se juntar ao projeto {projectName}. Estamos ansiosos
              para trabalhar com você!
            </p>
            <p
              className="paragraph"
              style={{
                textAlign: "start",
                fontSize: "16px",
                margin: "10px auto",
                color: "#000",
              }}
            >
              Convidamos você a acessar o link fornecido para obter mais detalhes sobre a vaga.
              Seria maravilhoso contar com seu apoio para fazer a diferença na vida de quem precisa.
              Juntos, podemos criar um impacto positivo!
            </p>
            <button
              style={{
                width: "250px",
                backgroundColor: primaryColor,
                fontSize: "14px",
                padding: "10px 2px",
                borderRadius: "4px",
                margin: "10px 0",
                border: "0",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              <a href={url} style={{ textDecoration: "none", color: "#fff" }}>
                Acesse a plataforma
              </a>
            </button>

            <p
              className="paragraph"
              style={{
                textAlign: "start",
                fontSize: "16px",
                margin: "10px auto",
                color: "#000",
              }}
            >
              Com carinho, {organizationName}!
            </p>
            <div
              className="footerContent"
              style={{
                width: "95%",
                height: "15vh",
                margin: "30px 0",
                padding: "20px",
                backgroundColor: primaryColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className="pFooter" style={{ color: "#fff", fontSize: "18px", maxWidth: "300px" }}>
                Este email foi enviado pela plataforma <strong>Volunt</strong> em nome de{" "}
                {organizationName}.
              </p>
              <img
                src={logo}
                alt="logo volunt"
                style={{ margin: "10px 40px 10px 10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
