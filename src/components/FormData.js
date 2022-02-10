import React ,{ useState} from  'react';

const FormData = ({onNewColor = f => f}) => {
    const [title, setTitle] =useState('')
    const [color, setColor] = useState('#000')
     
    const submit =e => {
        e.preventDefault()
        onNewColor(title, color)
        setTitle("")
        setTitle("")
    }

  return (
      
  
  <div>
      <form action="" onSubmit={submit}>
          <input type="text" value={title} onChange= {(e)=> setTitle(e.target.value)}   placeholder= "please input a color"required/>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} required/>
          <button>ADD</button>

      </form>
     
  </div>
  );
};

export default FormData;
