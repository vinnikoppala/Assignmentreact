import Card from "../components/Card";
import Table from "../components/Table";

export default function Dashboard() {
  return (
    <main className="content">
      <div className="card-container">
        <Card title="Total Users" value="1200" />
        <Card title="Revenue" value="₹45,000" />
        <Card title="Sessions" value="320" />
      </div>

      <h3 className="section-title">Team Members</h3>
      <Table />
    </main>
  );
}
