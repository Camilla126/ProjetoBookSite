import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import IntersectImage1 from "../../assets/IMG_home/Group 2.png";
import IntersectImage2 from "../../assets/IMG_home/Group 3.png";
import IntersectImage3 from "../../assets/IMG_home/Group 4.png";
import { GiWhiteBook, GiBurningBook } from "react-icons/gi";
import { BiSolidBookHeart } from "react-icons/bi";

const Article: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <article className={styles.main}>
      <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {isOpen ? "Esconder Conteúdo ⬆" : "Mostrar Artigo ⬇"}
      </button>

      <motion.section
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className={styles.articleContainer}>
          <header>
            <h2>
              <GiWhiteBook className={styles.icons} /> Como Desenvolver o Hábito
              da Leitura e Transformar Sua Vida
            </h2>
          </header>
          <section>
            <p>
              A leitura é muito mais do que um passatempo; é uma ferramenta
              poderosa para expandir conhecimentos, desenvolver habilidades
              cognitivas e melhorar a qualidade de vida. Apesar de seus
              benefícios, muitas pessoas enfrentam desafios para criar e manter
              o hábito de leitura.
            </p>
            <p>
              Neste artigo, vamos explorar dicas práticas para ler mais, por
              onde começar e como transformar a leitura em um elemento essencial
              do seu dia a dia.
            </p>
          </section>

          <section>
            <h2>O Poder da Leitura: Por Que Ler é Tão Importante?</h2>
            <p>
              Ler estimula o cérebro, melhora o vocabulário e aumenta a
              capacidade de conexão entre ideias. Estudos científicos mostram
              que a leitura regular pode:
            </p>
            <ul>
              <li>
                Reduzir o estresse: Apenas seis minutos de leitura por dia podem
                reduzir o estresse em até 68%.
              </li>
              <li>
                Melhorar a memória: Ativa diferentes áreas do cérebro,
                fortalecendo conexões neurais.
              </li>
              <li>
                Aumentar a empatia: Ler ficção nos coloca na pele dos
                personagens, ajudando a compreender diferentes perspectivas.
              </li>
            </ul>
            <img src={IntersectImage1} alt="Livro aberto" />
          </section>

          <section>
            <h2>
              <BiSolidBookHeart className={styles.icons} /> Como Manter o Hábito
              de Leitura?
            </h2>
            <ol>
              <li>
                <strong>Comece Pequeno:</strong> Escolha livros curtos e
                envolventes.
              </li>
              <li>
                <strong>Estabeleça uma Rotina:</strong> Defina um horário fixo
                para ler diariamente.
              </li>
              <li>
                <strong>Tenha Metas Realistas:</strong> Exemplo: 10 páginas por
                dia ou um livro por mês.
              </li>
              <li>
                <strong>Crie um Ambiente Convidativo:</strong> Escolha um local
                tranquilo e confortável.
              </li>
              <li>
                <strong>Tenha Sempre um Livro por Perto:</strong> Leve um livro
                ou e-reader com você.
              </li>
            </ol>
          </section>

          <section>
            <h2>
              <GiBurningBook className={styles.icons} /> Como Ler Mais
            </h2>
            <ul>
              <li>
                <strong>Diversifique os Gêneros:</strong> Leia ficção,
                biografias, poesia e livros técnicos.
              </li>
              <li>
                <strong>Participe de Grupos de Leitura:</strong> Compartilhar
                experiências motiva a leitura.
              </li>
              <li>
                <strong>Aproveite Tecnologias:</strong> Use aplicativos e
                audiolivros.
              </li>
            </ul>
            <img src={IntersectImage2} alt="Pessoas lendo juntas" />
          </section>

          <section>
            <h2>Por Onde Começar?</h2>
            <p>Se não sabe por onde começar, aqui estão algumas sugestões:</p>
            <ul>
              <li>
                <strong>Ficção:</strong> <em>O Pequeno Príncipe</em> ou
                <em>1984</em>.
              </li>
              <li>
                <strong>Desenvolvimento Pessoal:</strong>
                <em>Os 7 Hábitos das Pessoas Altamente Eficazes</em>.
              </li>
              <li>
                <strong>Biografias:</strong> <em>A História de Minha Vida</em>
                (Helen Keller).
              </li>
            </ul>
          </section>

          <section>
            <h2>Por Que Criar Suas Próprias Histórias?</h2>
            <p>
              Escrever permite expressar sentimentos, organizar pensamentos e
              estimular a criatividade.
            </p>
            <ul>
              <li>
                <strong>Desenvolve a Comunicação:</strong> Melhora a clareza na
                expressão.
              </li>
              <li>
                <strong>Fortalece a Imaginação:</strong> Criar personagens e
                cenários expande a criatividade.
              </li>
              <li>
                <strong>Promove o Autoconhecimento:</strong> Escrever ajuda a
                compreender a própria visão de mundo.
              </li>
            </ul>
            <img src={IntersectImage3} alt="Pessoa escrevendo" />
          </section>
        </div>
      </motion.section>
    </article>
  );
};

export default Article;
