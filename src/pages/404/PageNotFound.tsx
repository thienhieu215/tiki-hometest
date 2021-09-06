import img404 from './mascot_404.png'
import style from './PageNotFound.module.scss'

const PageNotFound = () => {

  return (
    <div className={style.page404}>
      <div>
        <img className={style.img} src={img404} alt='404' />
        <div>Xin lỗi, trang bạn tìm kiếm không tồn tại</div>
      </div>
    </div>
  )
}

export default PageNotFound;
