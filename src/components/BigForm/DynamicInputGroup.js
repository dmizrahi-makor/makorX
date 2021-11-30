 
import { Box } from '@mui/system';
import _ from 'lodash';
 
 
function DynamicInputGroup() {
  const state = useSelector();
  const [inputCount, setInputCount] = useState(1);
  const handleClick = () => {
    setInputCount(prev => prev + 1);
  };
 
  return (
    <Box>
{
  _.times(inputCount, () => {
    return <UploaderField />
  })
}
    <Box onClick={handleClick}>+</Box>
  </Box>
 
  );
}
 
export default DynamicInputGroup;