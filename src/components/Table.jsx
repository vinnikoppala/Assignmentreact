export default function Table() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Vinitha</td>
          <td>Active</td>
          <td>Frontend Developer</td>
        </tr>
        <tr>
          <td>Ravi</td>
          <td>Inactive</td>
          <td>UI Designer</td>
        </tr>
      </tbody>
    </table>
  );
}
