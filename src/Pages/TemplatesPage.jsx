import { Link } from 'react-router'
import TemplatesCard from '../components/TemplatesCard'
import MarginX from '../components/MarginX'
import templateOneImg from "../assets/templateOneImg.png"


const TemplatesPage = () => {

  return (
    <>

      <MarginX classItem="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          <Link to="/templates/templateOne"><TemplatesCard src={templateOneImg} /></Link>
          <Link to="/templates/templateTwo"><TemplatesCard /></Link>
          <Link to="/templates/templateTwo"><TemplatesCard /></Link>
        </div>
      </MarginX>
  
    </>
  )
}

export default TemplatesPage