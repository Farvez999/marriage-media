import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import EditIcon from '@mui/icons-material/Edit';

const MyPackage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [isloader, setIsloader] = useState(false);
  const [orders, setOrders] = useState([]);
  console.log(orders);

  const navigate = useNavigate();

  const {
    data: packages,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://server-teal-seven.vercel.app/packages/${user.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) { }
    },
  });

  const handleDelete = (pac) => {
    fetch(`https://server-teal-seven.vercel.app/packages/${pac._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${pac.title} deleted successfully`);
        }
      });
  };

  const handleStatusUpdate = (pac) => {
    fetch(`https://server-teal-seven.vercel.app/packages/${pac._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = pac.filter((odr) => odr._id !== pac._id);
          const approving = pac.find((odr) => odr._id === pac._id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h3 className="text-3xl mb-5">My Package : {packages?.length}</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Price</th>
              <th>Discription</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {packages?.map((pac, i) => (
              <tr key={pac._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={pac.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{pac.title}</td>
                <td>{pac.price}</td>
                <td>{pac.description}</td>
                <td>
                  {/* <label onClick={() => handleStatusUpdate(pac)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Edit</label> */}
                  <Link
                    to={`/dashboard/packagesedit/${pac._id}`}
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <EditIcon />

                  </Link>
                </td>
                <td>
                  <label
                    onClick={() => handleDelete(pac)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {
                deletingDoctor && <ConfirmastionModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
                    successAction={handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData={deletingDoctor}
                    closeModal={closeModal}
                >
                </ConfirmastionModal>
            } */}
    </div>
  );
};

export default MyPackage;
