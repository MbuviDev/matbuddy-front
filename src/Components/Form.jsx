export  default Form = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
      <div className="bg-white rounded-lg p-8 sm:w-96 ">
        <form onSubmit={handleSubmit} className="grid">
         <h1 className="text-4xl font-serif">FORM</h1>
            <label>
               Sender Name 
               <input 
                type ="text"
                placeholder="Enter Name"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Sender National ID 
               <input 
                type ="text"
                placeholder="Enter National Id"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Sender Phone
               <input 
                type ="number"
                placeholder="Enter Phone (07/01)"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Recipient Name
               <input 
                type ="text"
                placeholder="Enter Name"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Quantity
               <input 
                type ="text"
                placeholder="Enter Quantity"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Description
               <input 
                type ="text"
                placeholder="Enter Parcel Description"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Total Parcel Value
               <input 
                type ="number"
                placeholder="Enter Parcel Value"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Fee Charged
               <input 
                type ="text"
                placeholder="Enter Fee"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Passenger Fare Amount 
               <input 
                type ="number"
                placeholder="Enter Passenger Fare Amount"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Amount Spent (Ksh)
               <input 
                type ="number"
                placeholder="Enter Amount"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

            <label>
               Description
               <input 
                type ="text"
                placeholder="Enter Description (E.g num of litres,etc)"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
               />
            </label>

   
        </form>
        </div>
    )
}