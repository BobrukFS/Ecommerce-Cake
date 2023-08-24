import React from 'react'

function AsideSection({title, list}) {
  const sections = list.map((item, index) => {
        return <li className='w-auto list-group-item p-0 border-0 bg-secondary' key={index}><a href="" className='text-decoration-none text-primary'>{item}</a></li>;
  });

  return (
    <>
        <div className="text-center aside-section border-top border-primary border-2 pt-2  w-100">
            <p className='w-100 m-0  text-white fs-5 titles-font'>{title}</p>
            <ul className='list-group list-group-flush w-auto paragraph-font'>
                {sections}
            </ul>
        </div>
    
    </>
  )
}

export default AsideSection