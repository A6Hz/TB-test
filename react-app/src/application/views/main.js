import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DarkTable from "../components/table";
import { useSelector, useDispatch } from "react-redux";
import { selectFileList, fetchFilesAsync } from "../slice/app";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const fileList = useSelector(selectFileList);
  const dispatch = useDispatch();
  const [state, setState] = useState("");

  useEffect(() => {
    dispatch(fetchFilesAsync());
  }, [dispatch]);

  return (
    <Container>
      <Row style={{ marginTop: 10 }}>
        <Col>
          <h2 style={{ color: "white" }}> File viewer Toolbox </h2>
          <div style={{ backgroundColor: "#dc363a", height: 1 }} />
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col xs={12} md={8}>
          <Form.Label htmlFor="fileName" style={{ color: "white" }}>
            File name
          </Form.Label>
          <Form.Control
            type="text"
            id="fileName"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </Col>
        <Col xs={12} md={4} style={{ display: "flex", alignItems: "end" }}>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(fetchFilesAsync(state));
            }}
          >
            Search
          </Button>
          <Button
            style={{ marginLeft: 10 }}
            variant="secondary"
            onClick={() => {
              dispatch(fetchFilesAsync());
              setState("");
            }}
          >
            clear
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col>
          <DarkTable
            rows={fileList}
            columns={[
              { label: "File Name" },
              { label: "Text" },
              { label: "Number" },
              { label: "Hex" },
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
