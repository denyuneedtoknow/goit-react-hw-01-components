import DataItem from "./DataItem";

export default function StatisticSheet({ data, title }) {
  <section className="statistics">
    <h2>{title}</h2>;
    <ul className="stat-list">
      <DataItem />
    </ul>
  </section>;
}
