import React from 'react'

const Button = () => {
  return (
    <div className="mt-5 mx-5 flex justify-center space-x-3 my-4 ">
     <div className=" flex-1 shadow-xl p-4 rounded-lg">
        <img className="px-52"src="https://o2o.ipos.vn/static/images/request_payment.svg"/>
        <p className="text-center pt-2 text-sm font-normal">Request Bill</p>
     </div>
     <div className="flex-1 shadow-xl text-center p-4 rounded-lg">
        <img className="px-52" src="https://o2o.ipos.vn/static/images/request_service.svg"/>
        <p className="text-center pt-2 text-sm font-normal">Ask for Service</p>
     </div>
     <div className="flex-1 shadow-xl text-center p-4 rounded-lg ">
        <img className="px-52" src="https://o2o.ipos.vn/static/images/rate.svg"/>
        <p className="text-center pt-2 text-sm font-normal">Give Feedback</p>
     </div>
    </div>
  )
}

export default Button