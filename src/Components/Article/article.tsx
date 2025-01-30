import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

import { GiWhiteBook } from "react-icons/gi";
import { BiSolidBookHeart } from "react-icons/bi";
import { GiBurningBook } from "react-icons/gi";

const Article: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {isOpen ? "Esconder Conteúdo ⬆" : "Mostrar Artigp ⬇"}
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className={styles.articleContainer}>
          <h2>
            <GiWhiteBook />
            Como Desenvolver o Hábito da Leitura e Transformar Sua Vida.
          </h2>
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

          <h2>
            {" "}
            <BiSolidBookHeart />
            Como Manter o Hábito de Leitura?
          </h2>
          <p>
            <strong>1.Comece Pequeno</strong>
            <br /> Não tente devorar um clássico da literatura logo de cara.
            Escolha livros curtos ou que abordem temas de seu interesse.
            Histórias envolventes ajudam a criar uma conexão emocional com a
            leitura. <br />
            <strong>2.Estabeleça uma Rotina</strong>
            <br /> Dedique um horário específico do dia para ler. Pode ser pela
            manhã, antes de dormir ou durante o trajeto no transporte público.
            Transforme a leitura em um ritual. <br />
            <strong>3.Tenha Metas Realistas</strong>
            <br /> Defina objetivos alcançáveis, como ler 10 páginas por dia ou
            um livro por mês. Conforme avança, ajuste suas metas. <br />
            <strong>4.Crie um Ambiente Convidativo</strong>
            <br /> Escolha um local tranquilo, bem iluminado e sem distrações
            para ler. Um espaço acolhedor pode fazer toda a diferença. <br />
            <strong>5.Tenha Sempre um Livro por Perto</strong>
            <br /> Carregue um livro ou e-reader com você. Assim, é possível
            aproveitar momentos de espera para ler algumas páginas.
          </p>

          <h2>
            <GiBurningBook />
            Como Ler Mais:
          </h2>
          <ul>
            <li>
              <strong>Diversifique os Gênros: </strong>
              Experimente diferentes tipos de literatura, como ficção,
              biografias, poesia e livros técnicos. Isso evita a monotonia.
            </li>
            <li>
              <strong>Participe de Grupos de Leitura:</strong> Compartilhar
              experiências e debater sobre livros motiva a continuar lendo.
            </li>
            <li>
              <strong>Aproveite Tecnologias:</strong> Aplicativos e audiolivros
              são ótimos aliados para quem tem uma rotina corrida.
            </li>
          </ul>

          <h2>Por Onde Começar?</h2>
          <p>
            Se você está perdido na escolha do primeiro livro, aqui estão
            algumas sugestões:
          </p>

          <ul>
            <li>
              <strong>Ficção:</strong> <em>O Pequeno Príncipe</em> (Antoine de
              Saint-Exupéry) <em>ou 1984</em> (George Orwell).
            </li>
            <li>
              <strong>Desenvolvimento Pessoal:</strong>
              <em>Os 7 Hábitos das Pessoas Altamente Eficazes</em> (Stephen
              Covey).
            </li>
            <li>
              <strong>Biografias:</strong> <em>A História de Minha Vida </em>
              (Helen Keller).
            </li>
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
              <strong> Desenvolve a Comunicação:</strong> Ao colocar suas ideias
              no papel, você aprimora sua capacidade de se expressar de forma
              clara e coerente.
            </li>
            <li>
              <strong>Fortalece a Imaginacão:</strong> Criar personagens,
              cenários e tramas estimula o cérebro a pensar fora da caixa.
            </li>
            <li>
              <strong> Promove o Autoconhecimento:</strong> Escrever sobre suas
              experiências ou criar mundos fictícios ajuda a entender melhor
              quem você é e como enxerga o mundo.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Article;
