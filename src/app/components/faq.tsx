import React from 'react';
import styles from '../page.module.css';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

interface DivProps {
    question?: string;
    className?: string;
    children?: React.ReactNode;
}
const DivPropsTag: React.FC<DivProps> = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
export default function Faq() {
  const faqDesc = [
      {question: `Jaką formę współpracy akceptujesz?`, tags: `undefined`, description: `Jedyne formy współpracy, jakie akceptuję, to umowa o dzieło oraz umowa zlecenie.`},
      {question: `Jakie są stawki godzinowe lub opłaty za projekt?`, tags: `undefined`, description: `Stawka godzinowa lub opłata za projekt zależy od złożoności i postępu konkretnego projektu.`},
      {question: `Ile czasu potrzebujesz na dostarczenie ukończonego projektu?`, tags: `undefined`, description: `Każdy projekt ma indywidualne warunki czasowe, od złożenia zamówienia na projekt do przesłania ostatecznych plików. Termin realizacji projektu ustalany jest z klientem podczas briefingu projektowego.`},
      {question: `Czy oferujecie różne warianty projektów do wyboru przez klienta?`, tags: `undefined`, description: `Tak, jeśli wolisz, mogę stworzyć kilka wariantów projektu.`},
      {question: `Czy świadczysz usługi związane z przygotowaniem plików do produkcji i oferujesz wsparcie po zakończeniu projektu?`, tags: `undefined`, description: `Tak, świadczę usługi związane z przygotowaniem plików do produkcji i oferuję wsparcie po zakończeniu projektu, jeśli klient sobie tego życzy.`},
      {question: `Jaka jest polityka dotycząca poprawek i korekt po przedstawieniu wstępnej wersji projektu?`, tags: `undefined`, description: `Każda korekta jest rozliczana według stawki godzinowej uzgodnionej podczas wstępnej konsultacji z klientem.`},
  ];
  
  return (
    faqDesc.map((item, index) => (
      <DivPropsTag key={index} question={item.question} className={styles.section_portfolio_works}>
        <details data-aos="fade-up">
            <summary className={styles.summary}>
                <h2>{item.question}</h2>
                <div></div>
            </summary>  
            <p>{item.description}</p>
        </details>
      </DivPropsTag>
    ))
  );
};
