import "@/styles/PageNotFound.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className="goBackButton">
        <Button onClick={goHomeHandler}>Go To HOME Page</Button>
      </div>
      <div className="container">
        <h1 className="head1">Page not Found</h1>
        <h2 className="head2">Go back or Enter the correct Page address.</h2>
      </div>
    </>
  );
}

export default PageNotFound;
