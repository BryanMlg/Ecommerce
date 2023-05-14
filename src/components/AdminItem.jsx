import Style from '@style/AdminItem.module.scss';
import Image from 'next/image';
import DeleteIcon from '@assets/DeleteIcon.svg';
import EditIcon from '@assets/EditIcon.svg';
export default function AdminItem({product}) {
  return (
    <div className={Style.MyOrderContent}>
      <div className={Style.Shopping}>
        <p>{product.id}</p>
        <figure>
        <Image
          priority={true}
          unoptimized={() => product.images[0]}
          src={product.images[0]}
          alt={product.title}
          width="240"
          height="240"
        />
        </figure>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <figure>
          <Image src={DeleteIcon} alt="Close" className={Style['Delete-Img']} width="0" height="0" />
          <Image src={EditIcon} alt="Close" className={Style['Edit-Img']} width="0" height="0" />
        </figure>
      </div>
    </div>
  );
}
