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
          <h2>
            <GiWhiteBook className={styles.icons} /> Como Desenvolver o Hábito
            da Leitura e Transformar Sua Vida.
          </h2>
          <section className={styles.section}>
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
          <h2>O Poder da Leitura: Por Que Ler é Tão Importante?</h2>
          <section className={styles.section}>
            <p>
              Ler estimula o cérebro, melhora o vocabulário e aumenta a
              capacidade de conexão entre ideias. Estudos científicos mostram
              que a leitura regular pode:
            </p>
            <ul>
              <li>
                <strong>Reduzir o estresse:</strong> Apenas seis minutos de
                leitura por dia podem reduzir o estresse em até 68%.
              </li>
              <li>
                <strong> Melhorar a memória: </strong>Ativa diferentes áreas do
                cérebro, fortalecendo conexões neurais.
              </li>
              <li>
                <strong>Aumentar a empatia: </strong> Ler ficção nos coloca na
                pele dos personagens, ajudando a compreender diferentes
                perspectivas.
              </li>
            </ul>{" "}
          </section>
          <img
            src={IntersectImage1}
            alt="Livro aberto"
            className={styles.img1}
          />
          <h2>
            <BiSolidBookHeart className={styles.icons} /> Como Manter o Hábito
            de Leitura?
          </h2>
          <section className={styles.section}>
            <ol>
              <li>
                <strong>Comece Pequeno:</strong> <br />
                Não tente devorar um clássico da literatura logo de cara.
                Escolha livros curtos ou que abordem temas de seu interesse.
                Histórias envolventes ajudam a criar uma conexão emocional com a
                leitura.
              </li>
              <li>
                <strong>Estabeleça uma Rotina:</strong>
                <br /> Dedique um horário específico do dia para ler. Pode ser
                pela manhã, antes de dormir ou durante o trajeto no transporte
                público. Transforme a leitura em um ritual.
              </li>
              <li>
                <strong>Tenha Metas Realistas:</strong>
                <br /> Defina objetivos alcançáveis, como ler 10 páginas por dia
                ou um livro por mês. Conforme avança, ajuste suas metas.
              </li>
              <li>
                <strong>Crie um Ambiente Convidativo:</strong>
                <br /> Escolha um local tranquilo, bem iluminado e sem
                distrações para ler. Um espaço acolhedor pode fazer toda a
                diferença.
              </li>
              <li>
                <strong>Tenha Sempre um Livro por Perto:</strong> Carregue um
                livro ou e-reader com você. Assim, é possível aproveitar
                momentos de espera para ler algumas páginas.
              </li>
            </ol>
          </section>
          <h2>Como Ler Mais?</h2>
          <section className={styles.section}>
            <ul>
              <li>
                <strong>Diversifique os Gêneros:</strong> Experimente diferentes
                tipos de literatura, como ficção, biografias, poesia e livros
                técnicos. Isso evita a monotonia.
              </li>
              <li>
                <strong>Participe de Grupos de Leitura:</strong> Compartilhar
                experiências e debater sobre livros motiva a continuar lendo.
              </li>
              <li>
                <strong>Aproveite Tecnologias:</strong>Aplicativos e audiolivros
                são ótimos aliados para quem tem uma rotina corrida.
              </li>
            </ul>
          </section>
          <img
            src={IntersectImage2}
            alt="Pessoas lendo juntas"
            className={styles.img2}
          />
          <h2>
            {" "}
            <GiBurningBook className={styles.icons} />
            Por Onde Começar?
          </h2>
          <section className={styles.section}>
            <p>Se não sabe por onde começar, aqui estão algumas sugestões:</p>
            <ul>
              <li>
                <strong>Ficção:</strong> O Pequeno Príncipe{" "}
                <em>(Antoine de Saint-Exupéry) </em>ou 1984{" "}
                <em>(George Orwell).</em>
              </li>
              <li>
                <strong>Desenvolvimento Pessoal:</strong>
                Os 7 Hábitos das Pessoas Altamente Eficazes{" "}
                <em>(Stephen Covey)</em>.
              </li>
              <li>
                <strong>Biografias:</strong> A História de Minha Vida
                <em>(Helen Keller).</em>
              </li>
            </ul>
          </section>
          <h2>Por Que Criar Suas Próprias Histórias?</h2>
          <section className={styles.section}>
            <p>
              Ler histórias é inspirador, mas criar suas próprias histórias é
              transformador. Escrever é uma forma de expressar sentimentos,
              organizar pensamentos e explorar a criatividade. Além disso, a
              prática da escrita:
            </p>
            <ul>
              <li>
                <strong>Desenvolve a Comunicação:</strong> Ao colocar suas
                ideias no papel, você aprimora sua capacidade de se expressar de
                forma clara e coerente.
              </li>
              <li>
                <strong>Fortalece a Imaginação:</strong> Criar personagens,
                cenários e tramas estimula o cérebro a pensar fora da caixa.
              </li>
              <li>
                <strong>Promove o Autoconhecimento:</strong> Escrever sobre suas
                experiências ou criar mundos fictícios ajuda a entender melhor
                quem você é e como enxerga o mundo.
              </li>
            </ul>{" "}
          </section>
          <img
            src={IntersectImage3}
            alt="Pessoa escrevendo"
            className={styles.img3}
          />
        </div>
      </motion.section>
    </article>
  );
};

export default Article;
