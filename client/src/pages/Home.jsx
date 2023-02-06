import { NavLink } from "react-router-dom"
import axios from "axios"
import {useState} from "react"

export default function Home() {
  const [data,setData] = useState({})

  const submitHandle= async(e)=>{
    e.preventDefault()
    const {name_surname, count, peoples, contact, addres, information} = e.target
    
    if(addres.value.length > 0){
      const response = await axios.post(import.meta.env.VITE_API_URL + "/create",{
        name_surname:name_surname.value?name_surname.value:"null",
        numberOfPeople:
        {
          count:count.value?count.value:0,
          peoples:peoples.value?peoples.value:"null"
        },
        contact:contact.value?contact.value:"null",
        addres:addres.value?addres.value:"null",
        information:information.value?information.value:"null"
      })
    }
    
  }

  return (
    <div className="lg:container 2xl:py-4 xl:py-4 p-4 h-full flex flex-col">
      <NavLink to="/lists" className="bg-blue-600 text-white text-center 2xl:w-auto lg:w-auto w-full rounded px-10 py-2 ml-auto hover:bg-blue-700">
         Yardım çağrılarını görüntüle
      </NavLink>
      <div className="flex-1 flex">
          <form onSubmit={submitHandle} className="flex flex-col gap-2 m-auto w-[500px]">
            <h1 className="mx-auto mb-5 text-4xl font-bold">Yardım isteyin</h1>
            <input name="name_surname" placeholder="Bildiren kişi" type="text" />
            <input name="count" placeholder="Mahsur kalan kişi sayısı" type="number" />
            <textarea name="peoples" className="resize-none h-28" placeholder="Mahsur kalan kişiler"></textarea>
            <input name="contact" placeholder="İletişim numarası" type="number" />
            <textarea name="addres" className="resize-none h-28" placeholder="Adres"></textarea>
            <textarea name="information" className="resize-none h-28" placeholder="Detaylı bilgi"></textarea>
            <button className="bg-blue-600 text-white w-full rounded px-10 py-2 ml-auto hover:bg-blue-700">
               Yardım iste
            </button>
        </form>
      </div>
   </div>
  )
}
