import Table from "react-bootstrap/Table";

function DarkTable(props) {
  console.log(props);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th key={column.label}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr key={row.fileName}>
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
