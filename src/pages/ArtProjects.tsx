import { Route, Routes, useParams } from "react-router-dom";

type ProjectParams = {
  id: string;
};

function Project() {
  let { id } = useParams<ProjectParams>();
  return <p>{id}</p>;
}

function ArtProjects() {
  return (
    <div>
      <div className="App-header">
        <div>Art pages</div>
        <Routes>
          <Route path=":id" element={<Project />} />
        </Routes>
      </div>
    </div>
  );
}

export default ArtProjects;
