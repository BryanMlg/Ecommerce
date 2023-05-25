import EditItem from '@services/editItem';
import EditForm from '@components/EditForm';
export default function Edit() {
  const item = EditItem();
  return <EditForm item={item}/>;
}
