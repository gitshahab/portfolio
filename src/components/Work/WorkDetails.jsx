import { useParams } from "react-router-dom";
import { WorkMockData } from "./data/WorkMockData";
import Heading from "../common/Heading";

const WorkDetails = () => {
  const { id } = useParams();
  const project = WorkMockData.find(item => item.id === parseInt(id));

  if (!project) return <p style={{ 
            minHeight: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>Project not found</p>;

  return (
    <div style={{ minHeight: "810px", padding: "64px 0 64px 0" }}>
        <Heading headline={project.title} />
        <p style={{ padding: "16px 0 16px 0" }}>
            {Array(20).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lacus nec ligula scelerisque laoreet. ").join(" ")}
        </p>
    </div>
  );
};

export default WorkDetails;
