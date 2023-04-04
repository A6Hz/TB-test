import Table from "react-bootstrap/Table";

function DarkTable(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {props.columns.map((column, key) => (
            <th key={key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, key) => (
          <tr key={key}>
            <td>{row.fileName}</td>
            <td>{row.text}</td>
            <td>{row.number}</td>
            <td>{row.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DarkTable;
