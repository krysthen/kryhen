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
      {question: `What form of cooperation do you accept?`, tags: `undefined`, description: `The only forms of cooperation that I accept are a contract for specific work (Umowa o dzieło) and a service contract (Umowa zlecenie).`},
      {question: `What are your hourly rates or project fees?`, tags: `undefined`, description: `The hourly rate or project fee is contingent upon the complexity and progress of the specific project.`},
      {question: `How much time do you need to deliver a completed project?`, tags: `undefined`, description: `Each project comes with individual time conditions, from placing the order for the design to sending the final files. The deadline for the project is determined with the client during the project briefing.`},
      {question: `Do you offer different project variants for the client to choose from?`, tags: `undefined`, description: `Yes, if you prefer, I can create several design variations for the project.`},
      {question: `Do you provide services related to preparing files for production and offering support after the project is completed?`, tags: `undefined`, description: `Yes, I provide services related to preparing files for production and offer support after the completion of the project, if the client wishes.`},
      {question: `What is your policy regarding revisions and adjustments after the presentation of the initial project version?`, tags: `undefined`, description: `Each revision is billed at the hourly rate agreed upon during the initial consultation with the client.`},
  ];
  
  return (
    faqDesc.map((item, index) => (
      <DivPropsTag key={index} question={item.question} className={styles.section_portfolio_works}>
        <details>
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
