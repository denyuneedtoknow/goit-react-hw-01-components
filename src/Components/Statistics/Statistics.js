import DataItem from './DataItem';
import s from './Statistics.module.css';

export default function Statistics({ data, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {data.map(dataEl => (
          <li key={dataEl.id} className={s.item}>
            <DataItem label={dataEl.label} percentage={dataEl.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
