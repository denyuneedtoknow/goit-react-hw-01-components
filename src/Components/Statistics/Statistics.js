import DataItem from "./DataItem";

export default function Statistics({ data, title }) {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      <ul className="stat-list">
        {data.map((dataEl) => (
          <li key={dataEl.id} className="item">
            <DataItem label={dataEl.label} percentage={dataEl.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
