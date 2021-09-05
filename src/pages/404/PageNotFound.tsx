import React from 'react';
import img404 from './mascot_404.png'

const PageNotFound = () => {

  return (
    <div >
      <img style={{height: '160px', margin: '20px auto'}} src={img404}/>
      <div>Xin lỗi, trang bạn tìm kiếm không tồn tại</div>
    </div>
  )
}

export default PageNotFound;
