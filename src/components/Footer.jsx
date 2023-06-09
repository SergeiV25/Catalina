import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
            <div className='col mb-3'>
                  <a className=''>
                      <img src='img/logo1.png' className='bi me-2' width={180} height={180}>
                      </img>
                  </a>
                <p>
                  Catalina - сервис бронирования лучших домиков для путешествий
                </p>
</div>
                      <div className='col mb-3'>

                      </div>
                    <div className='col mb-4'>
                        <h5>Контакты</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Контакт 1</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Контакт 2</a>
                          </li>
                        </ul>
                    </div>

                    <div className='col mb-4'>
                        <h5>Вопросы</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Вопросы</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Ответы</a>
                          </li>
                        </ul>
                    </div>
          
        </footer>
    </div>
  )
}

export default Footer
