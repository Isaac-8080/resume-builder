
const TextInput = (props) => {
  return (
    <>
      <label>

        {props.labelText}
        
        {
          props.value.length === 0 ? <input
            type="text"
            className={"border p-2.5 rounded mt-1 outline-0 focus-within:border-red-500 w-full block"}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          /> : <input
            type="text"
            className={"border p-2.5 rounded mt-1 outline-0 focus-within:border-green-500 w-full block"}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
        }
       
      </label>
    </>
  )
}

export default TextInput
