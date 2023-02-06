import {useEffect,useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

export default function Lists() {
   const [data,setData] = useState([]);
  
  useEffect(()=>{
      (async()=>{
         const response = await axios.get(import.meta.env.VITE_API_URL)
         setData(response["data"]);
      })()
   },[])

  return (
    <div>
      <div className="container flex flex-col 2xl:py-4 xl:py-4 p-4">
      <NavLink to="/" className="bg-blue-600 text-white text-center 2xl:w-auto lg:w-auto w-full rounded px-10 py-2 ml-auto hover:bg-blue-700">
         Yardım Çağrısı Yap
      </NavLink>
        <div className="text-gray-900 ">
          <div className="p-4 flex">
              <h1 className="text-3xl">
                  Yardım İsteyen Kişiler.
              </h1>
          </div>
          
          <div className="px-3 py-4 flex justify-center">
              <table className="w-full text-md bg-white shadow-md rounded mb-4">
                  <tbody>
                      <tr className="flex border-b">
                          <th className="flex-1 text-left p-3 px-5 2xl:inline-block md:inline-block hidden">Ad Soyad</th>
                          <th className="flex-1 text-left p-3 px-5">Adres</th>
                          <th className="flex-1 text-left p-3 px-5 2xl:inline-block md:inline-block hidden">Kişi Sayısı</th>
                          <th className="flex-1 text-left p-3 px-5 2xl:inline-block md:inline-block hidden">Kişiler</th>
                          <th className="flex-1 text-left p-3 px-5">İletişim</th>
                          <th className="flex-1 text-left p-3 px-5 2xl:inline-block md:inline-block hidden">Bilgi</th>
                          <th></th>
                      </tr>
                      { data.map(dt =>
                        <tr key={dt._id} className="flex border-b hover:bg-blue-100 bg-gray-100">
                        <td className="flex-1 p-3 px-5 hidden 2xl:inline-block md:inline-block"><span>{dt.name_surname}</span></td>
                        <td className="flex-1 p-3 px-5"><span>{dt.addres}</span></td>
                        <td className="flex-1 p-3 px-5 hidden 2xl:inline-block md:inline-block"><span>{dt.numberOfPeople.count}</span></td>
                        <td className="flex-1 p-3 px-5 hidden 2xl:inline-block md:inline-block"><span>{dt.numberOfPeople.peoples}</span></td>
                        <td className="flex-1 p-3 px-5"><span>{dt.contact}</span></td>
                        <td className="flex-1 p-3 px-5 hidden 2xl:inline-block md:inline-block"><span>{dt.information}</span></td>
                      </tr>
                      )
                      }
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}
