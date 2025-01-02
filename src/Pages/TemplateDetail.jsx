import { Link } from 'react-router'

const TemplateTwo = () => {
  return (
    <>
      <Link to="/templateTwo">

        <div className="card bg-base-100 w-96 shadow">
          
          <div className="card-body">
            
            <h2 className="card-title">Template 2</h2>
            
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
            <div className="card-actions justify-end">
              
              <button className="btn btn-primary">Buy Now</button>
            
            </div>
          
          </div>
        
        </div>

      </Link>
    </>
  )
}

export default TemplateTwo