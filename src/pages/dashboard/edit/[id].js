import EditItem from '@services/editItem';
import EditForm from '@components/EditForm';
export default function Edit() {
  const product = EditItem();
  return <EditForm product={product}/>;
}
