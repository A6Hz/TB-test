import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DarkTable from "../components/table";
import { useSelector, useDispatch } from "react-redux";
import { selectFileList, fetchFilesAsync } from "../slice/app";
import { useEffect } from "react";

function App() {
  const fileList = useSelector(selectFileList);
  const dispatch = useDispatch();

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
