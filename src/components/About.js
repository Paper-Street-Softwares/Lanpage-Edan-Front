import "../style/css/componentsStyle/about.css";

function About() {
  return (
    <div className="qwerty">
      <div className="wrapper-About">
        <div className="sectionLeft">
          <div className="titleAbout">
            <h5>SOBRE A EDAN</h5>
          </div>
          <p>
            É a Contabilidade responsável pela analise de natureza econômica de
            sua empresa. Informamos seus ativos, passivos, receitas, custos e
            despesas. Com essa assessoria, alinhada à produtividade da mão de
            obra, se pode realizar um bom planejamento tributário resultando em
            lucratividade. ‌
          </p>
          <br />
          <p>
            Neste contexto a EDAN CONTABILIDADE, que no ano de 2023 completou 40
            anos de bons serviços prestados à comunidade, destaca-se por sua
            agilidade e excelência, quer seja na área contábil, fiscal ou de
            pessoal.
          </p>
          <br />
          <p>
            Vivemos em um tempo que códigos e manuais são atualizadas
            constantemente, e essas mutações, oferecem grande risco ao
            patrimônio empresarial caso este não esteja aos cuidados de uma
            contabilidade ágil e atenta a essas variações, haja vista que o
            descumprimento de tais normas, difusas na maioria das vezes, geram
            multas exorbitantes.
          </p>
          <br />
          <p>
            Nesses 40 anos de existência a EDAN CONTABILIDADE tem primado pela
            excelência no atendimento, controle e eficácia nas obrigações civis
            de pessoas físicas e jurídicas.
          </p>
          <br />
          <p>
            Atuamos também em serviços corriqueiros, emissão de DECORE, calculo
            e transmissão de Imposto de Renda (pessoa física e jurídica),
            imposto territorial rural – ITR, abertura, alteração e baixa de
            empresas, cobranças extrajudiciais, etc..
          </p>
          <br />
          <p>
            Em janeiro 2024 lançamos nosso aplicativo EDAN que pode ser baixado
            em todas as plataformas. Com ele, o cliente pode ter na palma da mão
            todos os seus pagamentos, impostos e obrigações, com um clique,
            baixando em PDF e enviando em tempo real para quem está solicitando.
            Tudo isso na palma mão, 24 horas por dia. E tem mais, no aplicativo
            EDAN, em forma de calendário mensal, fica disponível todos os
            pagamentos de FGTS, FOLHA DE PAGAMENTO, DAS, SIMPLES NACIONAL, ICMS,
            ISS, PIS, COFINS, PARCELAMENTOS – cada um no dia do seu vencimento.
            Virtual e real ao mesmo tempo. Prático e fácil. Aliás praticidade e
            facilidade é a nossa meta.
          </p>
          <br />
        </div>
        <div className="sectionRight">
          <form>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>

            <div>
              <label htmlFor="telefone">Telefone:</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>

            <div>
              <label htmlFor="site">Site:</label>
              <input type="url" id="site" name="site" />
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem"></textarea>
            </div>

            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
