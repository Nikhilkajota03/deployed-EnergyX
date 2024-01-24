import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const MarkTra = () => {
  const [transaction, setTransaction] = useState([]);


  const { user } = useSelector((state) => state.users);
    const { walletAdd } = useSelector((state) => state.wallet);
    const { userid } = useSelector((state) => state.userId);

  // const transactions = async () => {
  //   try {
  //     const res = await axios.get("https://energy-app-backend.vercel.app/api/mak/markettra");

  //     setTransaction(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const stripetransactions = async () => {
    try {
      const res = await axios.get("https://energy-app-backend.vercel.app/api/mak/stripeTra");

      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    stripetransactions();
  }, []);
  return (
    <>
      <div className="bg-purple-900 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 flex flex-col gap-10 items-center bottom-0 leading-5 h-[100vh] w-full overflow-hidden">

      <div className=" p-4 mt-[4rem] right-0  rounded-lg shadow-md h-18px">
          {/* <p>User : {user ? user : "Please log in first"}</p>
          <p>Wallet: {walletAdd ? walletAdd : "Please log in first"}</p> */}
          {/* <p>User : {userid}</p> */}
        </div>
      
      
        <div className="text-white text-4xl mt-[6rem] font-bold">
          Marketplace Buying History
        </div>

        <div className="md:px-32 py-7 w-full">
          <div className="shadow overflow-hidden rounded-2xl border-b border-gray-200 max-h-[45vh] overflow-y-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Product ID
                  </th>
                  <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Buyer
                  </th>
                  <th className=" w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Seller
                  </th>
                  <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Total amount{" "}
                  </th>
                  <th className=" w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Pincode
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {transaction.map((item, index) => (
                  <tr key={index}>
                    <td className="w-1/4 text-xl font-semibold text-left py-3 px-4">
                      {item.productid}
                    </td>
                    <td className="w-1/4 text-left text-xl font-semibold  py-3 px-4">
                      {item.buyerName}
                    </td>
                    <td className="w-1/4 text-left text-xl font-semibold  py-3 px-4">
                      {item.sellerName}
                    </td>
                    <td className="w-1/4 text-left  text-xl font-semibold py-3 px-4">
                      {item.pincode}
                    </td>
                    <td className="w-1/4 text-left text-xl font-semibold py-3 px-4">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
      </div>



      {/* </div> */}
    </>
  );
};

export default MarkTra;
