
const TemplatesCard = (props) => {
  return (
    <>
      <div className="card rounded-md bg-base-100 image-[100%] md:w-80 shadow -z-10">

        <figure>

          <img
            src={props.src}
            alt="Shoes"
            className="z-10 rounded-t-md"
          />

        </figure>

        <div className="card-body p-2">

          <button className="btn bg-darkBg text-whiteText">Use Template</button>

        </div>

      </div>
    </>
  )
}

export default TemplatesCard