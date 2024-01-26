"use client"
import { useFormStatus } from "react-dom"

function Loadingbtn() {
    const {pending}=useFormStatus();
  return (
    <button type="submit" disabled={pending} className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-opacity-20">
        {pending ? (<>
        <div className="flex">
            <div className="h-5 w-5 animate-spin rounded-full border-b-2"></div>
            <div className="text-white">Submitting</div>
        </div>
        </>
        ): (<>submit</>)}</button>
  )
}

export default Loadingbtn