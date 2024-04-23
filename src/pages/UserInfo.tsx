import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import "./UserInfo.css";
import { useContactQuery } from "../services/ContactsApi";
import { toast } from "react-toastify";
const UserInfo = () => {
  const { id } = useParams();
  const { data, error, isLoading, isSuccess, isError } = useContactQuery(id!);

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isError]);

  if (!id) {
    return <div>Error: No ID found in the URL.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load user info. Please try again later.</div>;
  }

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{data?.id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{data?.name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{data?.email}</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>{data?.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
