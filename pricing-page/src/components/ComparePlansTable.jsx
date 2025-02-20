import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";

function ComparePlansTable() {
  return (
    <Container>
    <p className="fs-3 text-center">Compare plans</p>
    <Table className="custom-table" responsive>
      <thead className="border-bottom border-secondary">
        <tr>
          <th></th>
          <th>Free</th>
          <th>Pro</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Public</th>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr className="border-bottom border-secondary">
          <th>Private</th>
          <td></td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <th>Permissions</th>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <th>Sharing</th>
          <td></td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <th>Unlimited members</th>
          <td></td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <th>Extra security</th>
          <td></td>
          <td></td>
          <td>✓</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
}

export default ComparePlansTable;
