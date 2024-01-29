import Brasil from "../style/assets/images/MapaBrasil.png";
import Awards from "../style/assets/images/Awards.png";

export default function AboutSection() {
  return (
    <div className="content bg-gray-900">
      <h1 className="font-bold text-4xl font-poppins">Sobre a</h1>
      <h1 className="font-bold text-4xl font-poppins text-green">
        EDAN Contabilidade
      </h1>
      <div className="border-t border-lighter my-5"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full">
          <h1 className="font-poppins font-semibold text-2xl text-gray">
            O escritório mais premiado
          </h1>
          <p className="font-poppins text-lg text-justify text-gray">
            Nesses 40 anos de existência a EDAN CONTABILIDADE tem primado pela
            excelência no atendimento, controle e eficácia nas obrigações civis
            de pessoas físicas e jurídicas. se destacando e sendo contemplada
            com premiações e destaques.
          </p>
          <p className="font-poppins text-lg text-gray">
            2019 a 2021 - Destaque Regional.
          </p>
          <p className="font-poppins text-lg text-gray">
            2013 a 2018 - Prêmio Empresarial.
          </p>
          <p className="font-poppins text-lg text-gray">
            2012 - Prêmio Empresarial Qualidade Profissional da Bahia.
          </p>
        </div>
        <div className="w-full">
          <img src={Awards} />
        </div>
        <div>
          <h1 className="font-poppins font-semibold text-2xl text-gray">
            A EDAN atende em todo Brasil?
          </h1>
          <div className="flex w-full">
            <div className="grid grid-cols-2 gap-1">
              <p className="font-poppins text-lg text-gray">
                A EDAN CONTABILIDADE tem 40 anos de história, oferecendo
                excelência no atendimento e gestão das obrigações fiscais. É
                importante escolher serviços contábeis confiáveis, conhecer a
                qualidade e abrangência dos serviços oferecidos antes de
                contratá-los.
              </p>
              <img className="mt-10" src={Brasil} />
            </div>
          </div>
          <p className="font-poppins text-lg text-gray">
            A Edan é uma empresa de contabilidade completa que atende a todas as
            cidades do Brasil, mantendo as finanças organizadas e em ordem.
          </p>
        </div>
        <div className="w-full">
          <h1>Onde nos encontrar?</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.0730045197956!2d-39.035297268035315!3d-14.821160277949616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7390a5df4a80977%3A0x283de9a3dd4420ba!2sEdan%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1706556617983!5m2!1spt-BR!2sbr"
            width="400"
            height="500"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
