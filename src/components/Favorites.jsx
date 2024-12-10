import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.companies);
  const dispatch = useDispatch();
  return (
    <>
      <ListGroup>
        {favorites.length > 0 ? (
          favorites.map((job, i) => (
            <ListGroup.Item key={i} className="d-flex px-5">
              Company:{" "}
              <Link to={`/${job.company_name}`}>{job.company_name} </Link>| - |
              Job: {job.title} | - | Publicated:
              {new Date(job.publication_date).toLocaleDateString()}
              <Button
                className="ms-auto me-5"
                variant="danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_FAVORITES", payload: i });
                }}
              >
                <FaTrash />
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item className="lead ">
            Your favorites list is empty
          </ListGroup.Item>
        )}
      </ListGroup>
    </>
  );
};
export default Favorites;
