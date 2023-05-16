import Style from '@style/AdminItem.module.scss';
import Image from 'next/image';
import DeleteIcon from '@assets/DeleteIcon.svg';
import EditIcon from '@assets/EditIcon.svg';
export default function UserItem({ category }) {
  return (
    <div className={Style.MyOrderContent}>
      <div className={Style.Shopping}>
        <p>{`ID:${category.id}`}</p>
        <figure>
          <Image priority={true} unoptimized={() => category.image} src={category.image} alt={category.title} width="240" height="240" />
        </figure>
        <p>{category.name}</p>
        <p>{category.role}</p>
        <figure>
          <Image src={DeleteIcon} alt="Close" className={Style['Delete-Img']} width="0" height="0" />
          <Image src={EditIcon} alt="Close" className={Style['Edit-Img']} width="0" height="0" />
        </figure>
      </div>
    </div>
  );
}