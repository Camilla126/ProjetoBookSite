import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

const Article: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.Main}>
      <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {isOpen ? "Esconder Conteúdo ⬆" : "Mostrar Artigp ⬇"}
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div>
          <h2>Como Desenvolver o Hábito da Leitura e Transformar Sua Vida.</h2>
          <p>
            A leitura é muito mais do que um passatempo; é uma ferramenta
            poderosa para expandir conhecimentos, desenvolver habilidades
            cognitivas e melhorar a qualidade de vida. Apesar de seus
            benefícios, muitas pessoas enfrentam desafios para criar e manter o
            hábito de leitura.
          </p>
          <p>
            <br />
            Neste artigo, vamos explorar dicas práticas para ler mais, por onde
            começar e como transformar a leitura em um elemento essencial do seu
            dia a dia.
          </p>
          <h2>O Poder da Leitura: Por Quê Ler é Tão Importante?</h2>
          <p>
            Ler estimula o cérebro, melhora o vocabulário e aumenta a capacidade
            de conexão entre ideias. Estudos científicos mostram que a leitura
            regular pode:
          </p>
          <ul>
            <li>
              Reduzir o estresse: Segundo uma pesquisa da Universidade de
              Sussex, apenas seis minutos de leitura por dia podem reduzir os
              níveis de estresse em até 68%.
            </li>
            <li>
              Melhorar a memória: A leitura ativa diferentes áreas do cérebro,
              ajudando a fortalecer as conexões neurais.
            </li>
            <li>
              Aumentar a empatia: Ler ficção nos coloca na pele dos personagens,
              ajudando-nos a entender e respeitar diferentes perspectivas.
            </li>
          </ul>

          <h2>Como Manter o Hábito de Leitura?</h2>
          <p>
            1.Comece Pequeno
            <br /> Não tente devorar um clássico da literatura logo de cara.
            Escolha livros curtos ou que abordem temas de seu interesse.
            Histórias envolventes ajudam a criar uma conexão emocional com a
            leitura. <br /> 2.Estabeleça uma Rotina
            <br /> Dedique um horário específico do dia para ler. Pode ser pela
            manhã, antes de dormir ou durante o trajeto no transporte público.
            Transforme a leitura em um ritual. <br /> 3. Tenha Metas Realistas
            <br /> Defina objetivos alcançáveis, como ler 10 páginas por dia ou
            um livro por mês. Conforme avança, ajuste suas metas. <br /> 4. Crie
            um Ambiente Convidativo
            <br /> Escolha um local tranquilo, bem iluminado e sem distrações
            para ler. Um espaço acolhedor pode fazer toda a diferença. <br /> 5.
            Tenha Sempre um Livro por Perto
            <br /> Carregue um livro ou e-reader com você. Assim, é possível
            aproveitar momentos de espera para ler algumas páginas.
          </p>

          <h2>Como Ler Mais:</h2>
          <ul>
            <li>
              Diversifique os Gênros: Experimente diferentes tipos de
              literatura, como ficção, biografias, poesia e livros técnicos.
              Isso evita a monotonia.
            </li>
            <li>
              Participe de Grupos de Leitura: Compartilhar experiências e
              debater sobre livros motiva a continuar lendo.
            </li>
            <li>
              Aproveite Tecnologias: Aplicativos e audiolivros são ótimos
              aliados para quem tem uma rotina corrida.
            </li>
          </ul>

          <h2>Por Onde Começar?</h2>
          <p>
            Se você está perdido na escolha do primeiro livro, aqui estão
            algumas sugestões:
          </p>

          <ul>
            <li>
              Ficção: O Pequeno Príncipe (Antoine de Saint-Exupéry) ou 1984
              (George Orwell).
            </li>
            <li>
              Desenvolvimento Pessoal: Os 7 Hábitos das Pessoas Altamente
              Eficazes (Stephen Covey).
            </li>
            <li>Biografias: A História de Minha Vida (Helen Keller).</li>
          </ul>

          <h2>Por Que Criar Suas Próprias Histórias?</h2>
          <p>
            Ler histórias é inspirador, mas criar suas próprias histórias é
            transformador. Escrever é uma forma de expressar sentimentos,
            organizar pensamentos e explorar a criatividade. Além disso, a
            prática da escrita:
          </p>

          <ul>
            <li>
              Desenvolve a Comunicação: Ao colocar suas ideias no papel, você
              aprimora sua capacidade de se expressar de forma clara e coerente.
            </li>
            <li>
              Fortalece a Imaginacão: Criar personagens, cenários e tramas
              estimula o cérebro a pensar fora da caixa.
            </li>
            <li>
              Promove o Autoconhecimento: Escrever sobre suas experiências ou
              criar mundos fictícios ajuda a entender melhor quem você é e como
              enxerga o mundo.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Article;
